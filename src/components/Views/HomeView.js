// Dependencies
import React from 'react';

// Components
import Header from './../common/Header';
import Footer from './../common/Footer';
import SearchBar from './../common/SearchBar';
import ProductPreview from './../common/ProductPreview';

// Types
import { Pages } from '../../Types/Types';

// API
import { products } from '../../api/api';
 
const HomeView = (props) => {
  const getProductDetail = (product) => {
    props.changeProduct(product)
    props.changePage(Pages.ProductDetails)
  }

  const renderProducts = () => {
    const productsList = products;

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
      <Header/>
      <SearchBar/>
      {renderProducts()}
      <Footer/>
    </div>
  );
}

export default HomeView;