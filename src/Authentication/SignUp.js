import classes from './Auth.module.css';
import React, { useState,useCallback } from 'react';
import {Form,Button} from 'reactstrap';
import {
  Container, Col, Card,
  FormGroup, Label, Input,
} from 'reactstrap';
import {Link, withRouter} from 'react-router-dom';
import app from '../Authentication/base';

const SignUp = ({history}) =>{
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history,email,password]);

    return (

<Card className={classes.card}>
        <Container className={classes.App} >
        <h2>Sign Up</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                onChange = {(event)=>{
                  setEmail(event.target.value);
                  console.log(email);
                }}
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
          onClick = {handleSignUp}
          color='primary' >Submit</Button>
          
        <Link to='/sign-in'><Button 

        style = {{
          marginLeft : '4%'
        }}

        color='success' >Sign In</Button></Link>
        </Form>
      </Container>
      </Card>

    );   

}

export default withRouter(SignUp);