import {combineReducers} from "redux";

import { ProductReducer, selectedProductReducer } from "./productReducer";
import { userReducer } from "./userReducer";
import { CategoryReducer,selectedCategoryReducer } from "./categoryReducer";
import { CartReducer } from "./cartReducer";
import { ImageReducer } from "./imageReducer";
import {toastsReducer} from "./toastReducer";

const reducers =combineReducers({
    allProducts:ProductReducer,
    product:selectedProductReducer,

    allCategories:CategoryReducer,
    category:selectedCategoryReducer,

    allCarts:CartReducer,
    
    user:userReducer,

    images:ImageReducer,

    toasts:toastsReducer
});

export default reducers;