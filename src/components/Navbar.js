import { Link,useHistory } from "react-router-dom";
import "./Navbar.css"
import { SearchBar,Select } from '@copart/core-components';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";




const Navbar = (props) =>{
    console.log(props);
    const history = useHistory();
    console.log(history);
    
   const  cartCount = useSelector(state => state.cart.cartItems.length)
 
    const [searchKeyword,setSearchKeyword] = useState('');
    
    useEffect(() =>{
        if(searchKeyword)
        {
         history.push('');
        history.push(`search/category/${searchKeyword}/brand/all/order/featured`);
        }
        
        
    },[searchKeyword]);


    const searchHandler = (search) =>{
        console.log(search.searchText);
        setSearchKeyword(search.searchText);    
    }
    const handleSearchTypeChange = (searchType) =>{
       console.log("Search type changed to ",searchType);
    }
    return (
    <nav className="navbar">
         <Link className="brand-name" to='/home'>E-Commerce</Link>
        <div className="searchbar">
         <SearchBar 
         searchText={''}
         searchTypes={[{key:"k1",text:"Laptops"},{key:"k2",text:"Headphones"}]}
         searchType={{key:"k1",text:"Laptops"}}
         onSearchTypeChange={handleSearchTypeChange}
         handleSearch={searchHandler}
         showSuggestions={[]}
         searchResultsFetcher={''}
         />
        
         </div>
         <ul className="nav-links">
             <li ><Link className="nav-link" to='/cart'>Cart- <span>{cartCount}</span></Link></li>
             <li ><Link className="nav-link" to='/login'>signin</Link></li>
         </ul>
    </nav>)
}

export default Navbar;