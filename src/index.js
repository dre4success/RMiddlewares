import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';
import Async from './middlewares/async';

const createStoreWithMiddleWare = applyMiddleware(Async)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleWare(reducers)}>
		<App />
	</Provider>, document.querySelector('.container'));
registerServiceWorker();
