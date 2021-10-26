import { Route,Switch,Redirect } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import CartScreen from './screens/CartScreen';
import SearchScreen from './screens/SearchScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' >
        <Redirect to='/home' />
        </Route>
        <Route path='/home' exact component={HomeScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/checkout' component={CheckoutScreen} />
        <Route path='/cart' component={CartScreen} />
        <Route path='/products' exact component={SearchScreen} />
        <Route path='/product/:productId' component={ProductScreen} exact/>
        <Route path="/search/category/:category" component={SearchScreen} exact />
        <Route path="/search/category/:category/brand/:brand" component={SearchScreen}
            exact />
        <Route path="/search/category/:category/brand/:brand/order/:order" component={SearchScreen} exact />
      </Switch>
    </div>
  );
}

export default App;
