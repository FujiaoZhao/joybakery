import Layout from "./components/layout/Layout";
import {Route, Switch, Redirect} from "react-router-dom";


import Cakes from './pages/Cakes';
import BakedGoods from './pages/BakedGoods';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ContactUs from './pages/ContactUs';



function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' >
          <Redirect to='/home'/>
        </Route>
        <Route path='/home' exact>
          <Home/>
        </Route>
        <Route path='/contact-us'>
          <ContactUs />
        </Route>
        <Route path='/cakes' exact>
          <Cakes/>
        </Route>
        <Route path='/baked-goods' exact>
          <BakedGoods/>
        </Route>

        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
    </Layout>
  )

}

export default App;
