import Layout from "./components/layout/Layout";
import {Route, Switch, Redirect} from "react-router-dom";

import Cafe from './pages/Cafe';
import Cakes from './pages/Cakes';
import CakesDetail from "./pages/CakesDetail";
import BakedGoods from './pages/BakedGoods';
import BakedGoodsDetail from "./pages/BakedGoodsDetail";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ContactUs from './pages/ContactUs';
import ShoppingCart from "./pages/ShoppingCart";



function App() {
  return (
    <Layout>
      <Switch>
        {/*<Route path='/' >*/}
        {/*  <Redirect to='/home'/>*/}
        {/*</Route>*/}
        <Route path='/home' exact>
          <Home />
        </Route>
        <Route path='/contact-us'>
          <ContactUs />
        </Route>
        <Route path='/cakes' exact>
          <Cakes/>
        </Route>
        <Route path='/cakes/:cakeId' exact>
          <CakesDetail/>
        </Route>
        <Route path='/baked_goods' exact>
          <BakedGoods/>
        </Route>
        <Route path='/baked_goods/:bakedGoodId' exact>
          <BakedGoodsDetail/>
        </Route>
        <Route path='/cafe' exact>
          <Cafe />
        </Route>
        <Route path='/shopping-cart'>
          <ShoppingCart />
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
    </Layout>
  )

}

export default App;
