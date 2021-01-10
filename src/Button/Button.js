import React from 'react';
import { Button } from 'reactstrap';
import classes from './Button.module.css';

const customButton = props =>{

    let isDisabled = false;

    if(props.ingredients[props.label].length === 0){
        isDisabled = true;
    }
    return (<React.Fragment>
            <Button
            disabled = {isDisabled}
            onClick={()=>props.decrementItem(props.label)}
            className = {classes.Btn}
            outline color="danger">
                -
        </Button>

        {props.ingredients[props.label].length} 

        <Button 
        onClick={()=>props.incrementItem(props.label)}
        className = {classes.Btn}
        outline color="success">
            +
        </Button> 
    </React.Fragment>)
};

export default customButton;