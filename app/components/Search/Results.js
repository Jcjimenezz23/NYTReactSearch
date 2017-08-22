import React from "react";

	const Results = (props) => {

		return (
			<div>
			{
				props.results.docs.map( (result) => {
					return (
					   <h3 key={index}>{result.headline.main}</h3>
					)
				})
			}
			</div>
		)
}
export default Results;