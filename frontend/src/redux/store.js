// store.js
import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import productListReducer from './productSlice';
import cartItemsReducer from './cartSlice'
import userLoginReducer from './userSlice'
const store = configureStore({
    reducer: {
        productList: productListReducer,
        cartItems: cartItemsReducer,
        userLogin: userLoginReducer
    },

});



export default store;
