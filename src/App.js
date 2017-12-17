import React, { Component } from 'react';
import logo from './logo.svg';
import './sass/bundle.sass';
import Header from '../src/components/MasterForm/Header'
import MenuLeft from '../src/components/MasterForm/MenuLeft'
import Footer from '../src/components/MasterForm/Footer'
import Breadcrumb from '../src/components/MasterForm/Breadcrumb'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
			<div className="stick_btn">
				<i className="fa fa-bars"></i>
			</div>
			<Header />
			<MenuLeft />
			{this.props.children}
			<Breadcrumb />
			<Footer />
		</div>
      </div>
    );
  }
}

export default App;
