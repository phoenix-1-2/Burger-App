import React from 'react';
import { Table } from 'reactstrap';
import Button from '../Button/Button';

const BurgerController = (props)=>{
    return (
        <Table striped hover dark>  
      <thead>
        <tr>
          <th><h5>Ingredients</h5></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><h5>Cheese</h5> </td>
          <td>  
          <Button label = 'Cheese' 
            ingredients = {props.ingredients}
          decrementItem = {props.decrementItem}
          incrementItem = {props.incrementItem}
          />
            </td>
        </tr>

        <tr>
          <td><h5>Salad</h5> </td>
          <td>  
          <Button label = 'Salad'
            ingredients = {props.ingredients}
          decrementItem = {props.decrementItem}
          incrementItem = {props.incrementItem}
           />
            </td>
        </tr>
        <tr>
          <td><h5>Meat</h5> </td>
          <td>  
          <Button label = 'Meat'
            ingredients = {props.ingredients}
          decrementItem = {props.decrementItem}
          incrementItem = {props.incrementItem} 
          />
            </td>
        </tr>
        <tr>
          <td><h5>Bacon</h5> </td>
          <td>  
            <Button label = 'Bacon'
            ingredients = {props.ingredients}
            decrementItem = {props.decrementItem}
            incrementItem = {props.incrementItem}
            />
            </td>
        </tr>
        
      </tbody>
    </Table>
    );
}
export default BurgerController;