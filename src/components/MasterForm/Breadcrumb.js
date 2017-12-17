import React from 'react'
import up from '../../imgs/up.png'

const Breadcrumb = () => (
	<div className="breadcrumb_wrapper">
		<div className="breadcrumb">
			<a href="" className="pre">Home </a> >
			<a href=""> Join our team</a>
		</div>
		<a href="" className="up_to_top">
			<img src={up} alt=""/>
		</a>
	</div>
)

export default Breadcrumb