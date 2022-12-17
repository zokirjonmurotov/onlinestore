import "./Product.styles.css";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../../redux/actions/productAction";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { title, image, price, category, description } = product;

  const FetchProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((e) => console.log(`Error`, e.mesage));
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    FetchProduct();
  }, [productId]);

  return (
    <div className="parent">
      {Object.keys(product).length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div className="product-box">
          <img src={image} alt="" />
          <div className="product-content">
            <h1>{title}</h1>
            <p>{description}</p>
            <hr/>
            <div className="prices">
              <p>${price}</p>
              <p>{category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductDetails;
