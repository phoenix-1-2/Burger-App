import classes from './BurgerBuilder.module.css';
import React from 'react';
import Ingredient from './Ingredient';
const BurgerBuilder = (props)=>{

    const meatItems = (
        props.ingredients['Meat'].map(()=>{
            return (
                <Ingredient label = 'Meat' />
            );
        })
    );
    
    const cheeseItems= (
        props.ingredients['Cheese'].map(()=>{
            return (
                <Ingredient label = 'Cheese' />
            );
        })
    )

    const baconItems = (
        props.ingredients['Bacon'].map(()=>{
            return (
                <Ingredient label = 'Bacon' />
            );
        })
    );

    const saladItems = (
        props.ingredients['Salad'].map(()=>{
            return (
                <Ingredient label = 'Salad' />
            );
        }) 
    );
    
    let combinedItems = (
        <React.Fragment>
            {meatItems}
            {cheeseItems}
            {baconItems}
            {saladItems}
        </React.Fragment>
    );

    if (props.ingredients['Salad'].length === 0 &&
    props.ingredients['Meat'].length === 0 &&
    props.ingredients['Bacon'].length === 0 &&
    props.ingredients['Cheese'].length === 0 
    ){
        combinedItems = <React.Fragment><h2> Add Ingredients </h2></React.Fragment>
    }



    return (

        <div className = {classes.Burger} >
            <Ingredient label = 'BreadTop' />

        
            {combinedItems}
            

            <Ingredient label = 'BreadBottom' />
        </div>

    );
}
export default BurgerBuilder;