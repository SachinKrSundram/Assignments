import { configureStore } from "@reduxjs/toolkit";
import AddressSlice from "../Slice/AddressSlice";
import MovieSlice from "../Slice/MovieSlice";

export const Store =configureStore({
    reducer:{
        movie:MovieSlice,
        adderss:AddressSlice
    }
})