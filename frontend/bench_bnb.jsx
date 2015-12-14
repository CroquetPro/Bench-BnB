var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    ApiUtil = require('./utils/api_util.js'),
    BenchStore = require('./stores/bench'),
    Search = require('./components/search');

document.addEventListener('DOMContentLoaded', function () {
  var App = React.createClass({
    render: function(){
      return (
        <div>
          <header><h1>Bench BnB</h1></header>
          {this.props.children}
        </div>
      );
    }
  });
  var routes = (
    <Route path="/" component={App} >
      <IndexRoute component={Search} />
    </Route>);
  var content = document.querySelector('#content');
  // ReactDOM.render(<div>
  //                   <Search />
  //                 </div>, content);
  ReactDOM.render(<Router>{routes}</Router>, content);
});
