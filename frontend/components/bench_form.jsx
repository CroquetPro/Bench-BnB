var React = require('react'),
    ApiUtil = require('../utils/api_util'),
    History = require('react-router').History,
    LinkedStateMixin = require('react-addons-linked-state-mixin');


var BenchForm = React.createClass({
  mixins: [History, LinkedStateMixin],

  getInitialState: function(){
    var coords = this.props.location.query;
    return ({lat: coords['lat'], long: coords['lng'], description: "", seating: null})
  },

  handleSubmit: function(){
    event.preventDefault();
    postData = {lat: this.state.lat,
                long: this.state.long,
                description: this.state.description,
                seating: this.state.seating};
    console.log("postData:");
    console.log(postData);
    ApiUtil.createBench(postData);
    this.setState({lat: 37.7758, long: -122.435, description: "", seating: null});
    this.history.pushState(null, "/");
  },

  render: function(){
    return (
      <div id="BenchForm">
        <h1>New Bench</h1>
        <form onSubmit={this.handleSubmit} >
          <label>Latitude:
            <input
              type="text"
              valueLink={this.linkState('lat')} />
          </label>
          <br></br>
          <label>Longitude:
            <input
              type="text"
              valueLink={this.linkState('long')} />
          </label>
          <br></br>
          <label>Description:
            <input
              type="textarea"
              valueLink={this.linkState('description')} />
          </label>
          <br></br>
          <label>Seating:
            <input
              type="number"
              valueLink={this.linkState('seating')} />
          </label>
          <br></br>
          <input type="submit" value="Create Bench" />
        </form>
      </div>
    );
  }
});

module.exports = BenchForm;
