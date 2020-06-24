// Import Files
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Link } from 'react-router-dom';

import App from './components/App';
import BrowserHistory from './BrowserHistory';
import reducers from './reducers';

// Webpages
import Home from './components/Home';
import Inventory from './components/Inventory';
import OrdersPage from './components/Orders';
import Signin from './components/Signin';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const page1 = () => {
  return <div>This is page 1</div>;
}

const page2 = () => {
  return <div>This is page 2</div>;
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={BrowserHistory}>
      <App>
        <Route path='/signin' component={Signin} />
        <Route path='/inventory' component={Inventory} />
        <Route path='/orders' exact components={OrdersPage} />
        <Route exact path='/' component={Home} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);