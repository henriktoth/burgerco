import {createSlice} from '@reduxjs/toolkit';

const initialState: { name: string; ingredients: string; allergens: string[]; price: number; count: number }[] = [];

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
    }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;