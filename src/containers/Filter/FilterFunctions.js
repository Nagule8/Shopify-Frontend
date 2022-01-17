import { useDispatch, useSelector } from "react-redux";
import FetchProduct from '../../fetchData/FetchProduct';
import { filteredProducts, sortedProducts, searchedProducts } from '../../redux/actions/productActions';

const FilterFunctions = () => {
    const products = useSelector((state)=> state.allProducts.products);
    const {fetchProducts} = FetchProduct();
    const dispatch = useDispatch();

    const filterProducts = (event) => {
        const categoryId = event.target.value;
        
        if(categoryId === ""){ 
            fetchProducts();
        };
        dispatch(filteredProducts(event.target.value));
    }

    const sortProducts = (event) => {
        const sortValue = event.target.value;
        if(sortValue === "Latest"){
            fetchProducts();
        }
        dispatch(sortedProducts(sortValue, products));
    }

    const searchProducts = (event) => {
        const searchValue = event.target.value;
        if(searchValue === ""){
            fetchProducts();
        }
        dispatch(searchedProducts(searchValue));
    }

    return {
        filterProducts, sortProducts,
        searchProducts
    }
}

export default FilterFunctions
