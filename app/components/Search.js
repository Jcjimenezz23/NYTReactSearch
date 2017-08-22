import React from "react";

import helpers from "../untils/helpers";

import Query from "./Search/Query";

import Results from "./Search/Results";

import {Link} from


class Search extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			results: {}
		}
	}

	setQuery (newQuery, newStart, newEnd) {
		helpers.runQuery(newQuery, newStart, newEnd).then(function(data) {
			this.setState({results: {docs: data.docs}})
		}.bind(this));
	}

	render() {
		return (
			<div className= "main-container">
				<Query setQuery={this.setQuery()} />
				<Results results={this.state.results} />
			</div>
		)
	}
}

export default Search;