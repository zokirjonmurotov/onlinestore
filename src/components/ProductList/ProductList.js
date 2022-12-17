
import { useEffect } from "react";
import "./ProductList.styles.css"
import { useSelector, useDispatch } from "react-redux";
import { setProduct } from "../../redux/actions/productAction";
import axios from "axios";
import ProductComponents from "../ProductComponents/ProductComponents";

const ProductList = () => {
    const products = useSelector(state => state)
    const dispatch = useDispatch()
    const FetchProduct = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
        .catch((e) => console.log("Error" + e.message))
        dispatch(setProduct(response?.data))
    }


    useEffect(()=>{
        FetchProduct()
    },[])

    return(
        <>
        <div className="product-list">
        <ProductComponents />
        </div>
        </>
    )
}
export default ProductList;