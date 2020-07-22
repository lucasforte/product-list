// Dependencies
import React from 'react';

const ProductPreview = (props) => {
  return(
    <li onClick={() => props.getProductDetail(props.product)} >{props.product.name}</li>
  );
}

export default ProductPreview;