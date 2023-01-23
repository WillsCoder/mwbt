import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/AuthSlice'
import messageReducer from "./slices/Message";


const reducer = {
    auth: authReducer,
    message: messageReducer,
}

const store = configureStore({
    reducer: reducer,
    devTools: true,
})

export default store;