import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';

import InputPage from '../containers/InputPageContainer';

const baseUrl = process.env.PUBLIC_URL; 

export default () => (
	<BrowserRouter>
		<div>
			<Route path={baseUrl+"/"} component={InputPage} />
		</div>
	</BrowserRouter>
)