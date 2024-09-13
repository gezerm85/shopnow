import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    product: [],
}


export const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers:{},
})



export const {} = mainSlice.actions

export default mainSlice.reducer