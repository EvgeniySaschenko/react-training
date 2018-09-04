import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
let store= require('./storages')

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('container')
)