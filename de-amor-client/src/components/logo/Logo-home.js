import React, { Component } from "react";
import "./Logo-home.css";

class LogoHome extends Component {

	render() {
		return (
			<div id="logo-home">
				<div className="box-logo">
					<img className="img-logo" src="/images/logo.jpg" alt="logo" ></img>
					<div>
						<h2>
							DÊ AMOR
						</h2>
					</div>
				</div>
			</div>
		)
	}

};

export default LogoHome;