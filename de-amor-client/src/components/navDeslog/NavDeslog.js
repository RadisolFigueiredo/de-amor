import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NavDeslog.css";

class NavDeslog extends Component {
  render() {
    return ( 
		<div id="navdeslog">
			<div className="navbar-home">
				<div className="align-navdeslog">
					<div>
					<Link className="nav-dec " to="#">Quem Somos</Link>
					</div>
					<div>
					<Link className="nav-dec" to="#">Entre</Link>
					</div>
					<div>
					<Link className="nav-dec" to="#">Cadastre-se</Link>
					</div>
					<div>
					<Link className="nav-dec" to="#">Contato</Link>
					</div>
				</div>
			</div>
		</div>
		)
  }
}

export default NavDeslog;
