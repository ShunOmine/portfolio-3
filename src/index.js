import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/Layout"
import Profile from './components/Profile';
import Products from './components/Products';
import Skills from './components/Skills'
import Contact from './components/Contact'

import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

ReactDOM.render(
	<Router>
		<Layout>
			<Route exact path="/" component={Profile} />
			<Route path="/products" component={Products} />
			<Route path="/skills" component={Skills} />
			<Route path="/contact" component={Contact} />
		</Layout>
	</Router>,
root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
