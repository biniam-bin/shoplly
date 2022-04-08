import React, { useState, useContext, createContext, useEffect } from 'react'
import { HeroWrapper, SearchIcon, SearchInput, SearchWrapper, Type, TypesList, TypesWrapper } from "./style"
import { useQuery, gql, useLazyQuery } from "@apollo/client"
import { TabContext } from "../../hooks/tabsContext"


import { useSelector, useDispatch } from 'react-redux'
import { setActiveTab, setActiveTabId } from "../../features/tab/tabSclice"
import {filterByType} from "../../features/products/productSclice"

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


// import 

const PRODUCT_TYPES = gql`
  query{
  categories {
    categoryId
    name
    products {
      productId
      name
      price
      description
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


const FILTER_BY_TAB = gql`
  query getFiltered($categoryId: String!){
  category(categoryId: $categoryId){
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
  }
}
`;


const index = () => {
    // const { activeTab, setActiveTab } = useContext(TabContext)

    const activeTab = useSelector(state => state.tab.activeTab)
    const activeTabId = useSelector(state => state.tab.activeTabId)
    const dispatch = useDispatch()
    let [filter, filtered] = useLazyQuery(FILTER_BY_TAB)
    
    useEffect(() => {
        let catId = ""
        switch (activeTab) {
            case "Electronics":

                catId = "aeb50ed6-580d-a065-383a-e3932fbec6a1"
                break;
            
            case "Fashion & Beauty":
                catId = "d2e71fae-08c6-0ce2-7def-28cc70263ab4"
                break;
            
            
            case "Home, Garden & Kids":
                catId = "3d8eb761-7184-2513-335a-e1d757ecec19"
                break;
            
            case "Leisure, Sports & Travel":
                catId = "a05a52ec-2814-9473-7a9f-ad73ea1f541f"
                break;
            
            case "Vehicles":
                catId = "4ac3ae5c-a433-66d9-1131-8a2aa0d05d46"
                break;
            case "":
                catId = "4ac3ae5c-a433-66d9-1131-8a2aa0d05d46"
                break;
            
            
            default:
                break;
        }

        filter({ variables: { categoryId: catId}})
        dispatch(filterByType(filtered.data?.category?.products))

    })

    const types = [
        { name: "Furnitures" },
        { name: "Electronics" },
        { name: "Vehicles" },
        { name: "Accessories" },
        { name: "Fashion" },
    ]


    let result = useQuery(PRODUCT_TYPES)

    
    
    return (
        <HeroWrapper>
            <SearchWrapper>
                <SearchIcon src="/Icons/search.svg" />
                <SearchInput placeholder="Search" />
            </SearchWrapper>
            <TypesWrapper>
                <TypesList>
                    {/* {result.loading ? <Skeleton baseColor="red" width="200"/> : ''} */}
                    {result.loading ? <Skeleton baseColor="lightgray" width={550} height={20} /> : result.data.categories.map((type) => {
                        if (activeTab == type.name) {

                            return (

                                <Type key={type.name} active onClick={() => dispatch(setActiveTab(type.name))}>{type.name}</Type>
                            )
                        } else {
                            return (

                                <Type key={type.name} onClick={() => dispatch(setActiveTab(type.name))}>{type.name}</Type>
                            )

                        }
                    })}

                </TypesList>
            </TypesWrapper>
        </HeroWrapper>
    )
}

export default index