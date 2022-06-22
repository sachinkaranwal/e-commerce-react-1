import "office-ui-fabric-react/dist/css/fabric.css";
import ProductCard from "../components/ProductCard";
import { Select } from "@copart/core-components";
import { useEffect, useState } from "react";
import { getProductsList } from "../actions/productsListAction";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { brandOptions, pricingOptions } from "../constants/selectBarConstants";
import "./SearchScreen.css";

const SearchScreen = () => {
  const history = useHistory()
  const productsList = useSelector((state) => state.productsList.productsList);
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const  { category = "laptops", brand = "all", order = "featured" } = params
  const dispatch = useDispatch();
  const [options, setOptions] = useState(category === 'all' ? [] : brandOptions[category]);
  const [priceOptions, setPriceOptions] = useState(pricingOptions);
  const [brandFilter, setBrandFilter] = useState('all');
  const [sortFilter, setSortFilter] = useState('featured');
  useEffect(() => {
    dispatch(
      getProductsList({ category, brand: brandFilter, order: sortFilter })
    );
    
    history.push(
      `/search?category=${category}&brand=${brandFilter}&order=${sortFilter}`
    );
  }, [category, brandFilter, sortFilter]);

  useEffect(() => {
    setOptions(brandOptions[category])
    setBrandFilter('all')
    setSortFilter('featured')
  },[category])

  const handleSortFilterChange = (event, item) => {
    setSortFilter(item.text);
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
