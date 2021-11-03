import {combineReducers} from "redux";
import { productReducer,selectedProductReducer,categoryReducer,
        cartReducer,createProductReducer,createCategoryReducer,
        deleteProductReducer } from "./productReducer";
import { userReducer } from "./userReducer";

const reducers =combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer,
    createProduct:createProductReducer,
    deleteProduct:deleteProductReducer,
    allCategories:categoryReducer,
    createCategory:createCategoryReducer,
    allCarts:cartReducer,
    user:userReducer,
});

export default reducers;