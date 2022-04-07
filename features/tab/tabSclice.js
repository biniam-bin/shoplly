import { createSlice } from '@reduxjs/toolkit'

export const tabSlice = createSlice({
    name: 'counter',
    initialState: {
        activeTab: "",
        acticeTabId: ""
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

        setActiveTab: (state, action) => {
            state.activeTab = action.payload
        },
        setActiveTabId: (state, action) => {
            state.activeTab = action.payload
        }
    }
})


export const { setActiveTab, setActiveTabId } = tabSlice.actions
export default tabSlice.reducer