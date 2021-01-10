import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import PersonIcon from '@material-ui/icons/Person';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import app from '../Authentication/base';

const NavComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  let signOut = (<Nav className="ml-auto" navbar>

  <NavLink
onClick = {()=>app.auth().signOut()}
className="ml-auto"
href="/sign-up"> 

<PersonIcon fontSize="large" /> Sign Out </NavLink>
  </Nav>);

  if(!props.signIn){
    signOut = null;
  }


  return (
    <div>
      <Navbar
      color="dark" className="navbar-dark navbar-expand-sm" toggleable='true' >
          
        <Link to="/">
        <NavbarBrand>
            <img alt="Logo" src={Logo} style={{
                width:"10%",
                backgroundColor:'white',
                color:'white'
            }} />
        </NavbarBrand>
        </Link>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to='/' style={{
                textDecoration:'none'
              }}>

              <NavLink active href="/">
                <h3>  Order Your
                 Burger </h3>
              </NavLink>

              </Link>
            </NavItem>
          </Nav>

            {signOut}

          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavComponent;