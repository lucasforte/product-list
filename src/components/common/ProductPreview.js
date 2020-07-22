// Dependencies
import React from 'react';

const ProductPreview = (props) => {
  return(
    <li className="wrapper-1-3 column center" onClick={() => props.getProductDetail(props.product)} >
      <img src={props.product.img} alt={props.product.name} style={{maxWidth: '100px'}}/>
      <p>
        {props.product.name}
      </p>
    </li>
  );
}

export default ProductPreview;