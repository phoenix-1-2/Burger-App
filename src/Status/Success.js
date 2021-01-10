import React from 'react';
import { Alert,Card } from 'reactstrap';
import classes from './status.module.css';
const app = ()=>{

   return ( 


<Card className={classes.card}>
<Alert color="success">
    <h3 style={{
        textAlign:'center'
    }} >Your Order is Successful.
   Thank You For Ordering With Us.</h3>
  </Alert>

  </Card>
  
  )


};

export default app;