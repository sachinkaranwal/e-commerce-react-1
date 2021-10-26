import Navbar from "../components/Navbar";
import 'office-ui-fabric-react/dist/css/fabric.css';
import ProductCard from "../components/ProductCard";
import productsList from "../components/productsList";
import { Link } from "react-router-dom";


const HomeScreen = ({history}) =>{
    const historyChangeHandler = (keyword) =>{
        history.push(`/${keyword}`);
    }
    return(
    <div >
        <Navbar />
        <div className="category-links">
        <Link className="category-link" to='/search/category/laptops' >Laptops</Link>
        <Link className="category-link" to='/search/category/headphones' >Headphones</Link>
        <Link className="category-link" to='/search/category/mobiles' >Mobiles</Link>
        <Link className="category-link" to='/search/category/shoes' >Shoes</Link>
        </div>
        <div className="banner-image">
            <img src ="https://www.kindpng.com/picc/m/193-1936806_e-commerce-development-trends-hd-png-download.png"alt="banner image" />
        </div>
        <div className="ms-Grid main-area" dir="ltr">
            <div class="ms-Grid-row">
              
                 {productsList.map(item => ( 
                     <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg4" key={item.id}>
                            <ProductCard 
                             productId={item.id}
                             title={item.title}
                             image={item.image}
                             price={item.price}
                             brand = {item.brand}
                             />
                     </div>))}
            </div>
   
        </div>
        
    </div>
       
 )
}

export default HomeScreen;