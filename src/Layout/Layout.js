import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../Navigation/Nav';
import {AuthProvider} from '../Authentication/Auth';

const Layout = (props)=>{
   

    return (<AuthProvider>
    <BrowserRouter>
    <React.Fragment>
        <Nav signIn = {props.signIn}/>
        {props.children}
    </React.Fragment>
    </BrowserRouter>
    </AuthProvider>);
};

export default Layout;