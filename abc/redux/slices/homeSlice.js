import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const home = createSlice({
    name: 'home',
    initialState: {
        setting: {
            storeName: '',
            storePhone: ''
        }
    },
    reducers: {
        setHome: (state, action?: PayloadAction) => {
            return action?.payload
        },
        getHome: (state) => { },
        updateSetting: (state,action?: PayloadAction) => { }
    },
})


const { reducer, actions } = home

export const { getHome, setHome, updateSetting } = actions

export const homeSelector = (state) => state.home

export const settingSelector = (state) => state.home.setting


export default reducer



