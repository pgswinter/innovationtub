import React from 'react';
import './sass/bundle.sass';
import Header from '../src/components/MasterForm/Header'
import MenuLeft from '../src/components/MasterForm/MenuLeft'
import Footer from '../src/components/MasterForm/Footer'
import Breadcrumb from '../src/components/MasterForm/Breadcrumb'

import Routes from './routes'

export default () => (
  <div className="App">
    <div className="wrapper">
      <div className="stick_btn">
        <i className="fa fa-bars"></i>
      </div>
      <Header />
      <MenuLeft />
      <Routes />
      <Breadcrumb />
      <Footer />
    </div>
  </div>
)
