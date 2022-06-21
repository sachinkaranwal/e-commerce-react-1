import { NavLink } from "react-router-dom";
import './CategoriesLink.css'

const CategoriesLink = () => {
  return (
    <div className="category-links">
      <NavLink activeClassName="activeLink" className="category-link" to="/search/category/laptops">
        Laptops
      </NavLink>
      <NavLink activeClassName="activeLink" className="category-link" to="/search/category/headphones">
        Headphones
      </NavLink>
      <NavLink activeClassName="activeLink" className="category-link" to="/search/category/mobiles">
        Mobiles
      </NavLink>
      <NavLink activeClassName="activeLink" className="category-link" to="/search/category/shoes">
        Shoes
      </NavLink>
    </div>
  );
};

export default CategoriesLink;
