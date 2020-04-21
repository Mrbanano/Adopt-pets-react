import React from 'react';
import { BrowserRouter, Switch, Router} from 'react-router-dom';
import Layout from '../components/Layout'
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Pet from '../pages/Pet';
import Dashboard from '../pages/Dashboard';
import '../styles/global.css'

const App = () => (
  <BrowserRouter>
    <Layout>
        <Switch>
          <Router exact path="/"component={Home}/>
          <Router exact path="/mascotas:id"component={Pet}/>
          <Router exact path="/login"component={Login}/>
          <Router exact path="/panel"component={Dashboard}/>
          <Router component={NotFound}/>
        </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;