import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import ProductSlice from "./ProductSlice";


const Store =configureStore({
    reducer: {
        // loged: loginSlice.reducer,
        Auth:AuthSlice.reducer,
        // Crud:productSlice.reducer
        Product:ProductSlice.reducer,
       
      },
})
export default Store