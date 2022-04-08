import React, { useState, useEffect } from 'react'
import { CardWrapper, CardPrice, BodyLeft, BodyRight, BodyWrapper, FilterItem, LeftBottom, FilterItemCombo, FilterItemText, LeftText, LeftWrapper, SortItemRadio, SortItemText, CardContainer, CardImage, CardImageContainer, Cardinfo, CardName, CardButton, SidebarWrapper } from "./style"
import { useQuery, gql } from "@apollo/client"


import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from "../../features/products/productSclice"
import { addToCart } from "../../features/cart/cartSclice"

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { Controls, PlayState, Tween } from 'react-gsap';

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
    const { name, image, description, price, productId } = product;
    const dispatch = useDispatch()
    // let inCart = true
    const addedItems = useSelector(state => state.cart.cartItems)
    let added = addedItems.find(element => element.name == name)

    return (
        <Tween from={{y: '100px'}} to={{ y: '-10px'}} duration={4} ease="back.out(1.7)">

            <CardWrapper>
                <CardImageContainer>
                    <CardImage style={{ width: '190px', height: '210px' }} src={image} />
                </CardImageContainer>
                <Cardinfo>
                    {name.length <= 14 ?
                        <CardName>{name}</CardName>
                        :
                        <CardName>{name.slice(0, 14)}...</CardName>
                    }
                    <CardPrice>${price}</CardPrice>
                </Cardinfo>
                <CardButton added={added} onClick={() => dispatch(addToCart({ name: name, productId: productId, price: price, image: image, amount: 1, description: description }))}>{added ? 'ADDED' : 'ADD TO CART'}</CardButton>
            </CardWrapper>
        </Tween>
    )
}




const Index = () => {
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
    const { loading, error, data } = useQuery(PRODUCTS)
    const products = useSelector(state => state.product.products)
    // const loading = useSelector(state => state.product.loading)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getAllProducts(data?.categories[1].products))
    // }, [])



    return (
        <BodyWrapper>
            <BodyLeft>
                <LeftWrapper>
                    <LeftText>Filter</LeftText>
                    {FilterItemsList.map((item) => {
                        return (
                            <FilterItem key={item.name}>
                                <FilterItemCombo id="finput" type="checkbox" />
                                <FilterItemText>{item.name}</FilterItemText>
                            </FilterItem>
                        )
                    })}
                    <LeftBottom>

                        <LeftText>Sort</LeftText>
                        {SortItemsList.map((item) => {
                            return (
                                <FilterItem key={item.name}>
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
                    {/* {loading ? <Skeleton baseColor="lightgray" count={3} style={{display: 'flex'}} height={ 300}/> : ''} */}
                    {loading ? <Skeleton baseColor="lightgray" count={3} style={{ display: 'flex' }} height={300} width={1100} /> : products?.map((product) => {
                        return (
                            <Card key={product.productId} name={product.name} productId={product.productId} price={product.price} description={product.description} image={product.images[1].url} />)
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

export default Index