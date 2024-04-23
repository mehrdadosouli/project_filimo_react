import { configureStore } from "@reduxjs/toolkit";
import detailFilmSlice from "../features/detailFilmSlice";

const store=configureStore({
    reducer:{detailFilmSlice}
})

export default store