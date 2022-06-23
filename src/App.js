import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import CartScreen from "./screens/CartScreen/CartScreen";
import SearchScreen from "./screens/SearchScreen/SearchScreen";
import ProductScreen from "./screens/ProductScreen/ProductScreen";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact component={HomeScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/checkout" component={CheckoutScreen} />
        <Route path="/cart" component={CartScreen} />
        <Route path="/search" exact component={SearchScreen} />
        <Route path="/product/:productId" component={ProductScreen} exact />
        {/* <Route
          path="/search/category/:category"
          component={SearchScreen}
          exact
        />
        <Route
          path="/search/category/:category/brand/:brand"
          component={SearchScreen}
          exact
        />
        <Route
          path="/search/category/:category/brand/:brand/order/:order"
          component={SearchScreen}
          exact
        /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
