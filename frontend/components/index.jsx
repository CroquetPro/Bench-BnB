var React = require('react'),
    BenchStore = require('../stores/bench'),
    ApiUtil = require('../utils/api_util'),
    History = require('react-router').History;


var Index = React.createClass({
  mixins: [History],

  getInitialState: function(){
    return({ benches: BenchStore.all()
    });
  },

  componentDidMount: function(){
    this.token = BenchStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    this.token.remove();
  },

  _onChange: function(){
      this.setState({ benches: BenchStore.all() });
  },

  handleClick: function(event){
    console.log(event.target.getAttribute('data-id'));
    url = "benches/" + event.target.getAttribute('data-id');
    this.history.pushState(null, url);
  },

  render: function(){
    var benches = this.state.benches.map(function(bench){
      return <li key={bench.id} className='bench' data-id={bench.id}>{bench.description}</li>
    });
    return(
      <div className='index'>
        <ul className='list' onClick={this.handleClick}>
          {benches}
        </ul>
      </div>
    );
  },
});

module.exports = Index;
