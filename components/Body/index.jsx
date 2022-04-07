import React, { useState, useEffect } from 'react'
import { CardWrapper, CardPrice, BodyLeft, BodyRight, BodyWrapper, FilterItem, LeftBottom, FilterItemCombo, FilterItemText, LeftText, LeftWrapper, SortItemRadio, SortItemText, CardContainer, CardImage, CardImageContainer, Cardinfo, CardName, CardButton, SidebarWrapper } from "./style"
import { useQuery, gql } from "@apollo/client"


import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from "../../features/products/productSclice"
import {addToCart} from "../../features/cart/cartSclice"

const PRODUCTS = gql`
  query{
  categories {
    categoryId
    name
    products {
      productId
      name
      description
      images{
          url
      }
      price
      discount
      unitsSold
    }
    subCategories{
      name
      subCategoryId
      categoryId
    }
  }
}
`;

export const Card = (product) => {
    const { name, image, description, price } = product;
    const dispatch = useDispatch()
    return (
        <CardWrapper>
            <CardImageContainer>
                <CardImage style={{ width: '190px', height: '210px' }} src={image} />
            </CardImageContainer>
            <Cardinfo>
                {name.length <= 14 ?
                    <CardName>{name}</CardName>
                    :
                    <CardName>{ name.slice(0, 14) }...</CardName>
            }
                <CardPrice>${price}</CardPrice>
            </Cardinfo>
            <CardButton onClick={() => dispatch(addToCart({name: name, price: price, image: image, amount: 1, desccription: description}))}>ADD TO CART</CardButton>
        </CardWrapper>
    )
}




const index =  () => {
    const FilterItemsList = [
        { name: "Sofas" },
        { name: "Beds" },
        { name: "Tables" },
        { name: "Tv Stands" },
        { name: "Wardrobs" },
        { name: "Cabinets" },
        { name: "Dresser" },
        { name: "Other" },
    ]

    const SortItemsList = [
        { name: "Discount" },
        { name: "Best Selling" },
        { name: "Price(Low to High)" },
        { name: "Price(High to Low)" },
    ]
    const {loading, error, data } = useQuery(PRODUCTS)
    const products = useSelector(state => state.product.products)
    // const loading = useSelector(state => state.product.loading)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getAllProducts(data?.categories[1].products))
    // }, [])

    if (loading) { 
        return (
            <p>Loading</p>
        )

    } 

    // if (error) {
    //     return (
    //         <p>Error</p>
    //     )
    // }
        return (
            <BodyWrapper>
                <BodyLeft>
                    <LeftWrapper>
                        <LeftText>Filter</LeftText>
                        {FilterItemsList.map((item) => {
                            return (
                                <FilterItem>
                                    <FilterItemCombo id="finput" type="checkbox" />
                                    <FilterItemText>{item.name}</FilterItemText>
                                </FilterItem>
                            )
                        })}
                        <LeftBottom>

                            <LeftText>Sort</LeftText>
                            {SortItemsList.map((item) => {
                                return (
                                    <FilterItem >
                                        <SortItemRadio id="finput" type="radio" />
                                        <SortItemText>{item.name}</SortItemText>
                                    </FilterItem>
                                )
                            })}
                        </LeftBottom>

                    </LeftWrapper>
                </BodyLeft>
            
                <BodyRight id="right">
                    <CardContainer>
                        {products?.map((product) => {
                            return (<Card name={product.name} price={product.price} description={product.description} image={product.images[1].url} />)
                        })}
                        
                        {/* <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card /> */}
                    </CardContainer>
                </BodyRight>
            </BodyWrapper>
        )
    
}

export default index