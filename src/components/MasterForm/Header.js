import React from 'react'
import logo from '../../imgs/logo.png'

const Header = () => (
	<div className="header__wrapper">
		<a className="logo__header" href=""><img src={logo} alt="innovatube"/></a>
		<div className="message__header">
			<i className="fa fa-check-circle"></i>
			<span>Message has been sent!</span>
		</div>
		<div className="intro__header">
			<h1>Join our team!</h1>
			<h3>Please let us know a bit about you : )</h3>
		</div>
	</div>
)

export default Header