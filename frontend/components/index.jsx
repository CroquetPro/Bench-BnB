var React = require('react'),
    BenchStore = require('../stores/bench'),
    ApiUtil = require('../utils/api_util');

var Index = React.createClass({

  getInitialState: function(){
    return({ benches: BenchStore.all()
    });
  },

  componentDidMount: function(){
    this.token = BenchStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    BenchStoreremove(this.token);
  },

  _onChange: function(){
      this.setState({ benches: BenchStore.all() })
      console.log('Benches in index:');
      console.log(this.state.benches);
  },

  render: function(){
    var benches = this.state.benches.map(function(bench, index){
      return <li key={index} className='bench'>{bench.description}</li>
    });
    return(
      <div className='index'>
        <ul className='list'>
          {benches}
        </ul>
      </div>
    );
  },
});

module.exports = Index;
