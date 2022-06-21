import Navbar from "../components/Navbar";
import "office-ui-fabric-react/dist/css/fabric.css";
import ProductCard from "../components/ProductCard";
import { Select } from "@copart/core-components";
import { useEffect, useState } from "react";
import { getProductsList } from "../actions/productsListAction";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { brandOptions, pricingOptions } from "../constants/selectBarConstants";
import { useParams } from "react-router-dom";
import "./SearchScreen.css";

const SearchScreen = () => {
  let { category = "all", brand = "all", order = "featured" } = useParams();

  const productsList = useSelector((state) => state.productsList.productsList);
  const history = useHistory();

  const dispatch = useDispatch();
  const [options, setOptions] = useState(brandOptions[category]);
  const [priceOptions, setPriceOptions] = useState(pricingOptions);
  const [filterOptions, setFilterOptions] = useState([]);
  const [brandFilter, setBrandFilter] = useState(brand);
  const [sortFilter, setSortFilter] = useState("Featured");

  useEffect(() => {
    dispatch(
      getProductsList({ category, brand: brandFilter, order: sortFilter })
    );
    history.push(
      `/search/category/${category}/brand/${brand}/order/${sortFilter}`
    );
  }, [category,history]);

  const handleSortFilterChange = (event, item) => {
    setSortFilter(item.text);
    history.push(
        `/search/category/${category}/brand/${brand}/order/${sortFilter}`
      );
  };
  const handleBrandFilterChange = (event, item) => {
    setBrandFilter(item.text);
  };
  return (
    <div className="">
      <div className="select">
        <h1>{category}</h1>
        <div className="filters">
          <div className="select-filter">
            <Select
              label="Filter"
              placeholder={brandFilter}
              options={options}
              selectedOption={brandFilter}
              onChange={handleBrandFilterChange}
            />
          </div>
          <div className="sort-filter">
            <Select
              label="Sort By Price"
              placeholder={sortFilter}
              options={priceOptions}
              selectedOption={sortFilter}
              onChange={handleSortFilterChange}
            />
          </div>
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
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
