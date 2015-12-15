var React = require('react'),
    Map = require('./map'),
    BenchStore = require('../stores/bench'),
    ApiUtil = require('../utils/api_util');

var Show = React.createClass({
  getInitialState: function(){
  //   return();
    var benchId = this.props.params['benchId']
    return({bench: BenchStore.find(parseInt(benchId))})
    // debugger;
  },

  componentWillReceiveProps: function(newProps){
    this.setState({ bench: BenchStore.find(parseInt(newProps.params.benchId))});
  },

  render: function(){
    return(
      <div id="show">
        <Map bench={this.state.bench} />
        <label>Description:
          {this.state.bench.description}
        </label>
        <br></br>
        <label>Seating:
          {this.state.bench.seating}
        </label>
      </div>
    );
  }
});

module.exports = Show;
