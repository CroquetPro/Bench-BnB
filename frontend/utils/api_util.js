var ApiActions = require('../actions/api_actions'),
var FilterActions = require('../actions/filter_actions');

var ApiUtil = {
  fetchBenches: function(params){
    //make an api call using AJAX in here
    $.get('api/benches', params, function(benches){
      ApiActions.receiveAll(benches);
    });
  },
  createBench: function(data){
    $.post('api/benches', data, function(bench){
      ApiActions.receiveBench(bench);
    })
  }
}

module.exports = ApiUtil;
