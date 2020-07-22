// Dependencies
import React, { useState } from 'react';

// Components
import Footer from './../common/Footer';
import SearchBar from './../common/SearchBar';
import ProductPreview from './../common/ProductPreview';

// Types
import { Pages } from '../../Types/Types';

// API
import { products } from '../../api/api';
 
const HomeView = (props) => {
  const [searchField, setSearchField] = useState('')

  const filteredProducts = products.filter(product =>{
    return product.name.toLowerCase().includes(searchField.toLowerCase());
  })

  const onSearchChange = event => setSearchField(event.target.value);

  const getProductDetail = product => {
    props.changeProduct(product);
    props.changePage(Pages.ProductDetails);
  }

  const renderProducts = () => {
    const productsList = filteredProducts;

    return(
      <ul>
        {productsList.map((product, index) => {
          return(
            <ProductPreview key={index} getProductDetail={getProductDetail} product={product}/>
          );
        })}
      </ul>
    );
  }

  return(
    <div id="home-view">
      <SearchBar search={onSearchChange}/>
      {renderProducts()}
      <Footer/>
    </div>
  );
}

export default HomeView;