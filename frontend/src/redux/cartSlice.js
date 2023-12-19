import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    error: null,
};

const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        cartAddItem: (state, action) => {
            const { product, quantity } = action.payload;
            const existItem = state.cartItems.find(x => x.product === product);

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x =>
                        x.product === existItem.product ? { ...existItem, quantity } : x
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { product, quantity }],
                };
            }
        },
        // cartRemoveItem
    },
});

export const { cartAddItem } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
