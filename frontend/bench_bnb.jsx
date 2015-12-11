var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    ApiUtil = require('./utils/api_util.js'),
    BenchStore = require('./stores/bench'),
    Search = require('./components/search');

document.addEventListener('DOMContentLoaded', function () {
  // var routes = (<Route path="/" component={App} >
  //     <Route path="pokemons/:pokemonId" component={PokemonDetail}>
  //       <Route path="toys/:toyId" component={ToyDetail} />
  //     </Route>
  //   </Route>);
  var content = document.querySelector('#content');
  ReactDOM.render(<div>
                    <Search />
                  </div>, content);
  // ReactDOM.render(<Router>{routes}</Router>, content);
});
