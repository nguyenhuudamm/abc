// import { configureStore } from "@reduxjs/toolkit"
// import createSagaMiddleware from "redux-saga"

// // import LayoutReducers from './slices/layoutSlice'
// import HomeReducers from './slices/homeSlice'
// // import StoreReducers from './slices/storeSlice'

// import rootSaga from "./sagas/rootSaga"
// const sagaMiddleware = createSagaMiddleware()

// const rootReducers = {
//     // layout:LayoutReducers,
//     home:HomeReducers,
//     // store:StoreReducers,
// }

// const store = configureStore({
//     reducer:{
//         ...rootReducers
//     },
//     middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
//         serializableCheck: false
//       }).concat(sagaMiddleware)
// })

// sagaMiddleware.run(rootSaga)

// export type RootState = ReturnType<typeof store.getState>

// export default store