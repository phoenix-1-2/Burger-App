import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import classes from './Home.module.css';
import BurgerBuilder from '../Burger-Builder/BurgerBuilder';
import BurgerController from '../Burger-Controller/BurgerController';
import Modal from '../Modal/Modal';
import axios from '../axios';
const Home = (props)=>{
    props.setSignIn(true);
    const[totalPrice,setTotalPrice] = useState(0); 

    const [ingredients,setIngredients] = useState({
        'Meat' : [],
        'Bacon' : [],
        'Salad' : [],
        'Cheese' : []
    });
    const [price,setPrice] = useState();

    useEffect(()=>{
        axios.get('/ingredients.json').then(response=>{
           setPrice(response.data);
           const ingredientData = {};
           for(let key in response.data){
            console.log(key);
            ingredientData[key.toString()] = [];
           }
           setIngredients(ingredientData);
           console.log(ingredientData);
           console.log(response.data);

        })

    },[])

    const incrementItem= (item) => {
        const ans = ingredients[item];
        ans.push(1);

        setIngredients((prevState)=> {
            const a =  {...prevState};
            a[item] = ans ;
            return a;
        } );
        changeTotalPrice();
    }
    const decrementItem= (item) => {
        const ans = ingredients[item];
        ans.splice(0,1);

        setIngredients((prevState)=> {
            const a =  {...prevState};
            a[item] = ans ;
            return a;
        } );
        changeTotalPrice();
    }

    const changeTotalPrice = ()=>{

        let total = ingredients['Meat'].length * price['Meat'] + 
        ingredients['Cheese'].length * price['Cheese'] +
        ingredients['Bacon'].length * price['Bacon'] + 
        ingredients['Salad'].length * price['Salad'] ;
        
        total = total + 0.07 * total; 
        setTotalPrice(total);
        console.log(totalPrice);
    }

    const uploadData = () =>{
        const data = {
            CustomerNo : props.customerNo,
            Ingredients : {
            'Meat' : ingredients['Meat'].length,
            'Salad' : ingredients['Salad'].length,
            'Bacon' : ingredients['Bacon'].length,
            'Cheese' : ingredients['Cheese'].length,
            },
            Total : totalPrice,
        }
        axios.post('/orderDetails.json',data).then(response =>{
            console.log('Order Saved');
        })
    }
    return (

        <Container>
      <Row>
        <Col xs={12} md={6}  className={classes.ParticularCol} >
            <BurgerBuilder ingredients = {ingredients}
            />
        </Col>
        <Col xs={12} md={6}  className={classes.ParticularCol} >
            <h1>Current Price : Rs.{Math.round(totalPrice)} </h1>
            <Modal
            totalPrice = {totalPrice}
            uploadData = {uploadData}
            price = {price}
            ingredients = {ingredients} />
            <BurgerController
                ingredients = {ingredients}
                incrementItem = {incrementItem}
                decrementItem = {decrementItem}
            />
        </Col>
      </Row>
      </Container>

    )
}
export default Home;