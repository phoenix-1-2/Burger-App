import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import OrderDetails from '../OrderDetails/OrderDetails';
import {Link} from 'react-router-dom';

const ModalExample = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  let Btn = (<Button 
    style={{
        marginBottom : '1%'
    }}

    color="danger" onClick={toggle}> Order Now </Button>);

    if(props.totalPrice === 0){
      Btn = (<Button 
        style={{
            marginBottom : '1%'
        }}
        disabled
        color="danger" onClick={toggle}> Order Now </Button>);
    }

  return (
  <div>
    
   {Btn}

    <Modal isOpen={modal} toggle={toggle}>

      <ModalHeader toggle={toggle}
      close={closeBtn}>
        Your Order
        </ModalHeader>
      <ModalBody>
        <OrderDetails 
         price = {props.price}
         ingredients = {props.ingredients}/>
      </ModalBody>

      <ModalFooter>
        <Link to="/check-out">
        <Button color="success" 
        onClick = {props.uploadData}
        >Proceed To CheckOut</Button>{' '}
        </Link>
        <Button color="secondary" outline onClick={toggle}>Cancel</Button>
      </ModalFooter>

    </Modal>
  </div>
);
}

export default ModalExample;