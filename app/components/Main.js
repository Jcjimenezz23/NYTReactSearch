import React from "react";

import {Link} from "react-router";

const Main extends React.Component {
	
	render() {
		return (

		<div>
			<h1> Hello JC </h1>
			<Link to="/saved">Click here for saved articles</Link>
			<Link to="/search">Click here for searched articles</Link>
			<div>
				{this.props.children}
			</div>
		</div>
		)
	}
}

export default Main;