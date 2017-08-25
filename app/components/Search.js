// Include React
var React = require("react");

// Create the Header component
var Search = React.createClass({
 render: function() {
   return (
     <h1>I'm The Search Component!</h1>
   );
 }
});

// Export the component back for use in other files
module.exports = Search;