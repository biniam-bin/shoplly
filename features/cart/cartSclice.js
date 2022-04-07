import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        total: 0
    },
    reducers: {
        // increment: state => {
        //     state.value += 1
        // },
        // decrement: state => {
        //     state.value -= 1
        // },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // }

        addToCart: (state, action) => {
            let item = state.cartItems.find(element => element.name == action.payload.name)
            if (!item) {
                
                state.cartItems = [...state.cartItems, action.payload];
                state.total += action.payload.price
            }

            console.log(state.cartItems)
        },
        increase: (state, action) => {
            let item = state.cartItems.find(element => element.name == action.payload)
            console.log(item)
            state.total += item.price
            item.amount += 1
        },
        decrease: (state, action) => {
            let item = state.cartItems.find(element => element.name == action.payload)
            console.log(item)
            if (item.amount > 1) {
                
                state.total -= item.price
                item.amount -= 1
            }
        },
        getTotal: (state) => {
            for (let index = 0; index < cartItems.length; index++) {
                console.log(cartItems[index])
                
            }
        },
        remove: (state, action) => {
            let item = state.cartItems.find(element => element.name == action.payload)
            state.total -= item.price * item.amount
            state.cartItems = state.cartItems.filter(item => item.name != action.payload)

        }
        
    }
})


export const { addToCart, increase, decrease, getTotal, remove } = cartSlice.actions
export default cartSlice.reducer