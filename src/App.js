import React, { useState } from 'react';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import CheckOut from './Checkout/Checkout';
import SignUp from './Authentication/SignUp';
import SignIn from './Authentication/SignIn';
import PrivateRoute from './Authentication/PrivateRoute';
import Success from './Status/Success';
import Failure from './Status/Failure';

import { Route } from 'react-router-dom';
function App() {
  const [signIn,setSignIn] = useState(false);
  const [customerNo,setCustomerNo] = useState(0);
  return (
    <Layout signIn = {signIn} >
      <PrivateRoute path = '/'  exact 
      component={() => <Home setSignIn={setSignIn} customerNo = {customerNo} setCustomerNo = {setCustomerNo} />}
       />

      <PrivateRoute path = '/check-out' exact 
      component = {() => <CheckOut customerNo = {customerNo} setCustomerNo = {setCustomerNo} /> } 
      /> 
      
      <PrivateRoute path = '/success' exact component = {Success} /> 
      <PrivateRoute path = '/failure' exact component = {Failure} /> 

      <Route path = '/sign-up' exact component = {SignUp} /> 
      
      <Route path = '/sign-in' exact component = {SignIn} /> 
    </Layout>
  );
}

export default App;
