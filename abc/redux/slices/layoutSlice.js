import { createSlice } from '@reduxjs/toolkit'
import { initLayout } from '../initState'

const layout = createSlice({
    name: 'layout',
    initialState: {
        openFormLogin:false
    },
    reducers: {
        setOpenLoginForm:(state, action)=>{
            return {...state, openFormLogin:action.payload}
        },   
    },
})


const { reducer, actions } = layout

export const { setOpenLoginForm } = actions

export const layoutSelector = (state)=>state.layout

export default reducer



