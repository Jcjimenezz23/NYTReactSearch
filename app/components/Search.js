var React = require('react');
var Router = require('react-router');

var Query = require('./Search/Query');
var Results = require('./Search/Results');

var helpers = require('../utils/helpers');

var Search = React.createClass({
	getInitialState: function(){
		return {
			term: "",
			start: "",
			end: "",
			results: {}
		}
	},

	setQuery: function(newQuery, newStart, newEnd){
		this.setState({
			term: newQuery,
			start: newStart,
			end: newEnd
		})
	},

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