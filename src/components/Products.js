import React from "react";
import { Link } from "react-router-dom";

export default class Products extends React.Component{
	render(){
		return(
			<div>
				<nav className="nav">
					<ul className="nav_list">
						<li className="products"><Link to="/products" className="nav_link now"><i className="far fa-file-alt"></i></Link></li>
						<li className="skills"><Link to="/skills" className="nav_link"><i className="far fa-address-card"></i></Link></li>
						<li className="top"><Link to="/" className="nav_link"><i className="far fa-user"></i></Link></li>
						<li className="not"><Link to="/not" className="nav_link">未</Link></li>
						<li className="contact"><Link to="/contact" className="nav_link"><i className="far fa-envelope"></i></Link></li>
					</ul>
				</nav>
				<h1>Products</h1>
			</div>
		)
	}
}