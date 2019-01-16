import React, { Component } from 'react';
// import AuthService from '../auth-service';
import { Link } from 'react-router-dom';
import "./AboutUs.css";

class AboutUs extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = { loggedInUser: null };
	// 	this.service = new AuthService();
	// }
	
	render () {
		return (
			<div className="box">
				<div id="background-AboutUs">
					<div>
						<div>
							{/* <div className="box-container">
								<h1 id="anim">Dê Amor</h1>
							</div> */}
							<div className="box-cont">
								<div className="box-cont-e">
									<h2> Quem Somos</h2>
									<p>Lorem ipsum ornare facilisis sed neque vestibulum arcu rhoncus, placerat lacinia nisi ante quisque fermentum accumsan, condimentum amet curabitur id diam pellentesque eros. nisi nec molestie suspendisse cras ligula etiam, turpis sodales nibh pharetra mauris hendrerit inceptos, nulla dapibus feugiat morbi mattis. tincidunt class velit etiam imperdiet, donec sagittis convallis.</p>
								</div>
								<div className="box-cont-d">
									<h2> O que fazemos</h2>
									<p>Lorem ipsum ornare facilisis sed neque vestibulum arcu rhoncus, placerat lacinia nisi ante quisque fermentum accumsan, condimentum amet curabitur id diam pellentesque eros. nisi nec molestie suspendisse cras ligula etiam, turpis sodales nibh pharetra mauris hendrerit inceptos, nulla dapibus feugiat morbi mattis. tincidunt class velit etiam imperdiet, donec sagittis convallis.</p>
								</div>
							</div>
						</div>
							<div className="alinhar">
								<Link className="alinhamento" to="/"> Voltar </Link>
							</div>
					</div>
				</div>
			</div>

		);

	}
}

export default AboutUs;