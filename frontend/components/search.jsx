var React = require('react'),
    BenchStore = require('../stores/bench'),
    ApiUtil = require('../utils/api_util'),
    Map = require('./map'),
    Index = require('./index');

var Search = React.createClass({

  render: function(){
    return(
      <div className='search'>
        <Map />
        <Index />
      </div>
    );
  },
});

module.exports = Search;
