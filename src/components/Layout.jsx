import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';



const Layout = props =>(
    <div className="Layout">
        <Header></Header>
         {props.children}
        <Footer></Footer>
    </div>
);


export default Layout;