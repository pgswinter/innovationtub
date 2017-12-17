import React,{Component} from 'react'
import logo from '../../imgs/logo.png'

const Footer = () => (
	
	<div className="footer">
		<a className="logo__header" href=""><img src={logo} alt="innovatube"/></a>
		<div className="wrapper_item">
			<div className="col-lg-6 item">
				<h3>Our Vision</h3>
				<p>We aim to become the worldwide leading foirce when it comes to providing tech solutions and helping to accelerate global innovation.</p>
			</div>
			<div className="col-lg-6 item">
				<h3>Our Mission</h3>
				<p>Our misson is to help start-up companies and agile minded organizations to cut down the time and cost of developing a new product.</p>
			</div>
		</div>
		<div className="copyright">
			<p>Copyright © 2016 Innovatube Solutions Ltd. All right reserved.</p>
		</div>
	</div>
)

export default Footer