var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;

document.addEventListener('DOMContentLoaded', function () {
  // var routes = (<Route path="/" component={App} >
  //     <Route path="pokemons/:pokemonId" component={PokemonDetail}>
  //       <Route path="toys/:toyId" component={ToyDetail} />
  //     </Route>
  //   </Route>);
  var content = document.querySelector('#content');
  ReactDOM.render(<div>linked</div>, content);
  // ReactDOM.render(<Router>{routes}</Router>, content);
});
