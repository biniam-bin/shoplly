import { createSlice } from '@reduxjs/toolkit'
import { useQuery, gql } from "@apollo/client"




export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    loading: true,
  },
  reducers: {
    getAllProducts: (state, action) => {
      // const { loading, error, data } = useQuery(GET_ALL_PRODUCTS)
      state.products = action.payload
      state.loading = false
      // console.log(state.products?.categories[0].products)
    },
    filterByType: (state, action) => {
      state.products = action.payload
      state.loading = false
      // console.log(state.products)
      
    }
  }
})


export const { getAllProducts, filterByType } = productSlice.actions
export default productSlice.reducer