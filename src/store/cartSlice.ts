import {createSlice} from '@reduxjs/toolkit';

const initialState: { 
    name: string; 
    ingredients: string; 
    allergens: string[]; 
    price: number; 
    count: number 
}[] = [];

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
        removeFromCart: (state, action) => {
            const index = state.findIndex(item => item.name === action.payload.name);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        updateItemCount: (state, action) => {
            const index = state.findIndex(item => item.name === action.payload.name);
            if (index !== -1) {
                state[index].count = action.payload.count;
            }
        },
    },
})

export const { addToCart, removeFromCart, updateItemCount } = cartSlice.actions;

export default cartSlice.reducer;