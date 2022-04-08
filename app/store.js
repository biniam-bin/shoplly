import { configureStore } from '@reduxjs/toolkit'
import tabReducer from "../features/tab/tabSclice"
import productReducer from "../features/products/productSclice"
import cartSclice from "../features/cart/cartSclice"
import checkoutSclice from "../features/checkout/checkoutSclice"

export default configureStore({
    reducer: {
        tab: tabReducer,
        product: productReducer,
        cart: cartSclice,
        checkout: checkoutSclice,
    }
})

