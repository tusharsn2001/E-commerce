import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    products: [],
    error: null,
};

const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        productListRequest: (state) => {
            state.loading = true;
            state.products = [];
            state.error = null;
        },
        productListSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload;
            state.error = null;
        },
        productListFail: (state, action) => {
            state.loading = false;
            state.products = [];
            state.error = action.payload;
        },
    },
});

export const {
    productListRequest,
    productListSuccess,
    productListFail,
} = productListSlice.actions;

export default productListSlice.reducer;
