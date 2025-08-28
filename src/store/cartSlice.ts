import {createSlice} from '@reduxjs/toolkit';

const initialState: { name: string; ingredients: string; allergens: string[]; price: number; count: number }[] = [];

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload.id);
        },
        clearCart: () => {
            return [];
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;