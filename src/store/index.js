import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";
import toggleSlice from "./toggle";

const store=configureStore({reducer:{
    cart:cartSlice.reducer,
    toggle:toggleSlice.reducer
}});

export default store;