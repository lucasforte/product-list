// Dependencies
import React from 'react';

const ProductPreview = (props) => {
  return(
    <li id="product-preview" className="wrapper-1-3 row center">
      <div className="container column center" onClick={() => props.getProductDetail(props.product)}>
        <figure>
          <img src={props.product.img} alt={props.product.name}/>
        </figure>
        <p>{props.product.name}</p>
        <p>{props.product.price}</p>
      </div>
    </li>
  );
}

export default ProductPreview;