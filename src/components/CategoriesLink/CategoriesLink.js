import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import './CategoriesLink.css'

const CategoriesLink = () => {
  const history = useHistory()
  const [category, setCategory] = useState('')
  
  const isHomePage = useSelector((state) => state.isHomePage);
  useEffect(() => {
    if(category !== '') {
      history.push(`/search?category=${category}&brand=all&order=featured`)
    }
  },[category])

  useEffect(() => {
    if(isHomePage) {
      setCategory('')
    }
  },[isHomePage])

  return (
    <div className="category-links">
      <a  className="category-link" onClick={() => { console.log("Hi"); setCategory('laptops') } } >
        Laptops
      </a>
      <a  className="category-link" onClick={() => setCategory('headphones') } >
        Headphones
      </a>
      <a  className="category-link" onClick={() => setCategory('mobiles') } >
        Mobiles
      </a>
      <a  className="category-link" onClick={() => setCategory('shoes') } >
        Shoes
      </a>
    </div>
  );
};

export default CategoriesLink;
