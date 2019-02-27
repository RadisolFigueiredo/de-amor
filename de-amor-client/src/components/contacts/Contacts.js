import React, { Component } from "react";
import NavDeslog from "../navDeslog/NavDeslog";
import "./Contacts.css";

class Contacts extends Component {
	render() {
		return (
			<div id="contact">
				<NavDeslog />
				<div id="background-contact">
					<div className="title-contact">
						<h1>Fale conosco</h1>
					</div>
					<div className="email-contact">
						<h5>deamor@deamor.com.br</h5>
					</div>
					<div className="text-contact">
						<p>
							A maneira como tratamos os animais reflete o tipo de humano que somos.
						</p>
					</div>
				</div>
			</div>
		)
	}

};

export default Contacts;