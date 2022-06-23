import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
import { SearchBar } from "@copart/core-components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Navbar = (props) => {
  const history = useHistory();  
  const allCategories = useSelector((state) => state.allCategories);
  const isHomePage = useSelector((state) => state.isHomePage);
  const cartCount = useSelector((state) => state.cart.cartItems.length);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchedCategory, setSearchedCategory] = useState("");
  useEffect(() => {
    if (searchedCategory) {
      history.push(`/search?category=${searchedCategory}&brand=all&order=featured`);
    }
  }, [searchedCategory]);

  const searchHandler = (search) => {
    if(search.searchText.length > 2) {
      allCategories.forEach(category => {
        if( category.includes(search.searchText)){
          setSearchedCategory(category)
          console.log("category ",category)
        }
      })
    }
    setSearchKeyword(search.searchText);
  };
  const handleSearchTypeChange = (searchType) => {
    setSearchedCategory(searchType.key)
  };
  return (
    <div className="navContainer">
      <nav className="navbar">
        <Link className="brand-name" to="/home">
          E-Commerce
        </Link>
        <div className="searchbar">
          <SearchBar
            searchText={searchKeyword}
            searchTypes={[
              { key: "laptops", text: "Laptops" },
              { key: "headphones", text: "Headphones" },
              { key: "mobiles", text: "Mobiles" },
              { key: "shoes", text: "Shoes" },
            ]}
            searchType={{ key: "laptops", text: "Laptops" }}
            onSearchTypeChange={handleSearchTypeChange}
            handleSearch={searchHandler}
            showSuggestions={['headphones']}
            searchResultsFetcher={""}
          />
        </div>
        <ul className="nav-links">
          <li>
            <Link className="nav-link" to="/cart">
              Cart- 
              <span>{cartCount}</span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/login">
              signin
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
