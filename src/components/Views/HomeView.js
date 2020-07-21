// Dependencies
import React from 'react';

// Components
import Header from './../common/Header';
import Footer from './../common/Footer';
import SearchBar from './../common/SearchBar';
import ProductPreview from './../common/ProductPreview';

// Types
import { Pages } from '../../Types/Types';

const HomeView = (props) => {

  const getProductDetail = (product) => {
    props.changeProduct(product)
    props.changePage(Pages.ProductDetails)
  }

  const listProducts = () => {

  }

  return(
    <div id="home-view">
      <Header/>
      <SearchBar/>

      <Footer/>
    </div>
  );
}

export default HomeView;