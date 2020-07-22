// Dependencies 
import React from 'react';

// Types
import { Pages } from '../../Types/Types';
 

const ProductView = (props) => {
  return(
    <div id="product-view" className="wrapper-1-1 column center">
      <div className="container column center">
        <figure>
          <img src={props.product.img} alt={props.product.name}/>
        </figure>
        <div className="product-details column center">
          <p className="indie">Title:</p>
          <p>{props.product.name}</p>
          <p className="indie">Author</p>
          <p>{props.product.author}</p>
          <p className="indie">Price:</p>
          <p>{props.product.price}</p>
          <p className="indie">Description:</p>
          <p>{props.product.description}</p>
        </div>
        <div className="row between">
          <button className="btn" onClick={() => props.changePage(Pages.Home)}>Back</button>
          <button className="btn green">Buy</button>

        </div>
      </div>
    </div>
  );
}

export default ProductView;