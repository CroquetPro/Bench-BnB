var React = require('react'),
    BenchStore = require('../stores/bench'),
    FilterParamsStore = require('../stores/filter_params'),
    ApiUtil = require('../utils/api_util'),
    Map = require('./map'),
    Index = require('./index');

var Search = React.createClass({
  getInitialState: function(){
    return (this.resetState());
  },

  componentDidMount: function(){
    this.token = FilterParamsStore.addListener(this._onChange);
  },

  _onChange: function(){
    this.resetState();
    ApiUtil.fetchBenches();
  }

  resetState: function(){
    this.setState(FilterParamsStore.all());
  },

  componentWillUnmount: function(){
    this.token.remove();
  },

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
