import classes from './Auth.module.css';
import React, { useState,useCallback, useContext } from 'react';
import {Form,Button} from 'reactstrap';
import {
  Container, Col, Card,
  FormGroup, Label, Input,
} from 'reactstrap';
import {withRouter,Redirect, Link} from 'react-router-dom';
import app from '../Authentication/base';
import {AuthContext} from './Auth';
const SignIn = ({history}) =>{

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  
  const handleSignIn = useCallback(
    async event => {
      event.preventDefault();
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email, password);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history,email,password]
  );


  const {currentUser} = useContext(AuthContext);

  if(currentUser){
    return  <Redirect to='/' />;
  }
  
    return (<Card className={classes.card}>
      <Container className={classes.App} >
      <h2>Sign In</h2>
      <Form className="form">
        <Col>
          <FormGroup>
            <Label>Email</Label>
            <Input
            onChange = {(event)=>setEmail(event.target.value)}
              type="text"
              placeholder="myemail@email.com"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
            onChange = {(event)=>setPassword(event.target.value)}
              type="password"
              placeholder="********"
            />
          </FormGroup>
        </Col>
        <Button 
        onClick = {handleSignIn}
        color='primary' >Submit</Button>
        <Link to='/sign-up'><Button 
        style = {{
          marginLeft : '4%'
        }}
        color='success' >Sign Up</Button></Link>
      </Form>
    </Container>
    </Card>);

}

export default withRouter(SignIn);