var React = require('react'),
    FilterActions = require('../actions/filter_actions');

var Seating = React.createClass({

  getInitialState: function(){
    return ({min: 0, max: 10})
  },

  minChange: function(event){
    console.log(event);
    console.log(event.currentTarget);
    this.setState({min: event.currentTarget.value});
    FilterActions.updateSeating(this.state);
  },

  maxChange: function(event){
    this.setState({max: event.currentTarget.value});
    FilterActions.updateSeating(this.state);
  },

  render: function(){
    return(
      <form>
        <label>Minimum Available Seats:
          <input
            type="number"
            value={this.state.min}
            onChange={this.minChange} />
        </label>
        <label>Maximum Available Seats:
          <input
            type="number"
            value={this.state.max}
            onChange={this.maxChange}/>
        </label>
      </form>
    );
  }
});

module.exports = Seating;
