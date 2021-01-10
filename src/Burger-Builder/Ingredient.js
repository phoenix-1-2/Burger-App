import React from 'react';
import classes from './BurgerBuilder.module.css';
import './BurgerBuilder.module.css';
const Ingredient = (props)=>{

    let ingredient = null;
    if(props.label === 'BreadBottom'){
        ingredient = (
            <div className={classes.BreadBottom} > 
             </div>
        );
    }
    else if(props.label === 'BreadTop'){
        ingredient = (
            <div className = {classes.BreadTop}>
                <div className = {classes.Seeds1}></div>
                <div className = {classes.Seeds2}></div>
            </div>
        );
    }
    else if(props.label === 'Meat'){
        ingredient = (
            <div className = {classes.Meat} >
            </div>
        );
    }
    else if(props.label === 'Cheese'){
        ingredient = (
            <div className = {classes.Cheese} >
            </div>
        );
    }
    else if(props.label === 'Bacon'){
        ingredient = (
            <div className = {classes.Bacon} >
            </div>
        );
    }
    else if(props.label === 'Salad'){
        ingredient = (
            <div className = {classes.Salad} >
            </div>
        );
    }
    return ingredient;
}
export default Ingredient;