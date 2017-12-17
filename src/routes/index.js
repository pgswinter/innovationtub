import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../App';
import InputPage from '../containers/InputPageContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={InputPage} />
  </Route>
)