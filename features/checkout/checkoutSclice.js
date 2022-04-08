import { createSlice } from '@reduxjs/toolkit'

export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: {
        order: {}
    },
    reducers: {
        
        getOrder: (state, action) => {
            state.order = action.payload
            console.log(state.order)
        }
    }
})


export const { getOrder } = checkoutSlice.actions
export default checkoutSlice.reducer