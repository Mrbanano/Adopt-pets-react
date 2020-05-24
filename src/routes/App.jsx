import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from '../components/Layout'
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Pet from '../pages/Pet';
import Dashboard from '../pages/Dashboard';
import '../styles/global.css'
import setUSer from '../actions/index';
import Couse from '../pages/couse'

const App = () => (
 // <BrowserRouter>
   // <Layout>
     ///   <Switch>
        //  <Route exact path="/"component={Home}/>
        //  <Route exact path="/mascotas/:id"component={Pet}/>
          //<Route exact path="/login"component={Login}/>
         // <Route exact path="/panel"component={Dashboard}/>
         // <Route component={NotFound}/>
       // </Switch>
   // </Layout>
 // </BrowserRouter>
 <div>
    <h3>hola</h3>
    <Couse></Couse>
 </div>
);

export default App;