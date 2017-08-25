//React library
var React = require("react");

//react-router module
var router = require("react-router");

//include route component
var Route = router.Route;

//Include router component
var Router = router.Router;

var IndexRoute = router.IndexRoute;

var browserHistory = router.browserHistory;

// Reference the high-level components
var Main = require("../components/Main");
var Search = require("../components/Search");
var Saved = require("../components/Saved");

// Export the Routes
module.exports = (
 // High level component is the Router component.
 <Router history={browserHistory}>
   <Route path="/" component={Main}>

     {/* If user selects Search or Saved show the appropriate component */}
     <Route path="Search" component={Search} />
     <Route path="Saved" component={Saved} />

     {/* If user selects any other path... we get the Home Route */}
     <IndexRoute component={Search} />

   </Route>
 </Router>
);