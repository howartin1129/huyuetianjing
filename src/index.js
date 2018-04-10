import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import Router from './page';

ReactDOM.render(
	<HashRouter>
		<Router />
	</HashRouter>, document.getElementById('root'));