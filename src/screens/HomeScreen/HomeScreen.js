import Navbar from "../../components/Navbar";
import "office-ui-fabric-react/dist/css/fabric.css";
import ProductCard from "../../components/ProductCard";
import productsList from "../../components/productsList";
import { Link } from "react-router-dom";
import CategoriesLink from "../../components/CategoriesLink/CategoriesLink";
import "./HomeScreen.css";

const HomeScreen = ({ history }) => {
  const historyChangeHandler = (keyword) => {
    history.push(`/${keyword}`);
  };
  return (
    <div>
      <div className="sliderSection">
        <div className="sliderDetail">
          <h1 className="sliderHeading">Welcome to our Shop</h1>
          <span className="sliderInfo">
            {" "}
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud .{" "}
          </span>
          <button className="sliderButton" > Read More </button>
        </div>
        <div className="bannerImage">
          <img
            src="https://www.kindpng.com/picc/m/193-1936806_e-commerce-development-trends-hd-png-download.png"
            alt="banner image"
          />
        </div>
      </div>

      <div className="ms-Grid main-area" dir="ltr">
        <div class="ms-Grid-row">
          {productsList.map((item) => (
            <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg4" key={item.id}>
              <ProductCard
                productId={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                brand={item.brand}
                isHome
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
