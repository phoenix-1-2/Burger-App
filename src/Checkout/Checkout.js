import React,{useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Input,Container } from 'reactstrap';
import axios from '../axios';
import { useHistory } from "react-router-dom";
const CheckOut = (props) =>{


  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [address,setAddress] = useState('');
  const [emailId,setEmailId] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [city,setCity] = useState('');
  const [state,setState] = useState('');
  const [zipCode,setZipCode] = useState('');

  const history = useHistory();
  const uploadCustomerDetails = ()=>{

    const data = {
      CustomerNo : props.customerNo,
      CustomerDetails :{
        FirstName : firstName,
        LastName : lastName,
        Address : address,
        EmailId : emailId,
        MobileNumber : phoneNumber,
        City : city,
        State : state,
        ZipCode : zipCode
        },
    };


    axios.post('/customerDetails.json',data).then(response => {
      props.setCustomerNo(props.customerNo + 1);
      history.push("/success");
    }).catch(error=>{
      history.push("/failure");
    });

  }

  
    return (
        <Container style={{
            marginTop:'5%'
        }} >
        
            <h4 style={{
              textAlign:'center',
              marginBottom : '1%'
            }} > Enter Your Details </h4>
            <Form >

            <Row form>
          <Col md={6}>
          <FormGroup>
              <Input type="text"
              onChange = {(event)=> setFirstName(event.target.value) }
              placeholder="First Name" />
            </FormGroup>
          </Col>
          <Col md={6}>
          <FormGroup>
              <Input
              onChange = {(event)=> setLastName(event.target.value) }
              type="text"placeholder="Last Name" />
            </FormGroup>
          </Col>
        </Row>


        <Row form>
          <Col md={6}>
            <FormGroup>
              <Input 
              onChange = {(event)=> setEmailId(event.target.value) }
              type="email" name="email"  placeholder="Email ID" />
            </FormGroup>
          </Col>
          <Col md={6}>
          <FormGroup>
              <Input 
              onChange = {(event)=> setPhoneNumber(event.target.value) }
              type="number" placeholder="Mobile Number" />
            </FormGroup> 
          </Col>
        </Row>
        <FormGroup>
          <Input 
          onChange = {(event)=> setAddress(event.target.value) }
          type="text" name="address"  placeholder="Full Address"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Input 
              onChange = {(event)=> setCity(event.target.value) }
              type="text" name="city"  placeholder="City"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Input 
              onChange = {(event)=> setState(event.target.value) }
              type="text" name="state"  placeholder="State"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input 
              onChange = {(event)=> setZipCode(event.target.value) }
              type="number" name="zip"  placeholder="ZIP Code"/>
            </FormGroup>  
          </Col>
        </Row>

        <Button 
    style={{
        width:'10%'
    }}
    onClick = {uploadCustomerDetails}
    color="danger"> CheckOut </Button>
      </Form>
      </Container>
    );

}

export default CheckOut;