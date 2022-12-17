import "./ProductComponents.styles.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const ProductComponents = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  const products = useSelector((state) => state.allProducts.product);
  const renderList = products.map((product, order) => {
    const { id, title, image, price, category } = product;
    return (
      <div data-aos="fade-up" className="card" key={order}>
        {/* <div className="black"></div> */}
        <Link to={`/product/${id}`}>
          <div className="card-box">
            <img src={image} alt={title} />
          </div>
          <div className="incard">
            <h3>{title}</h3>
            <div className="price">
              <p>${price}</p>
              <p>{category}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};
export default ProductComponents;
