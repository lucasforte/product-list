// Dependencies 
import React from 'react';

// Types
import { Pages } from '../../Types/Types';
 

const ProductView = (props) => {
  return(
    <div id="product-view">
      <img src={props.product.img} alt={props.product.name} style={{maxWidth: '100px'}}/>
      <p>{props.product.name}</p>
      <p>{props.product.price}</p>
      <p>{props.product.description}</p>
      <button onClick={() => props.changePage(Pages.Home)}>Home</button>
    </div>
  );
}

export default ProductView;