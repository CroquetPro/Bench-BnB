var ApiActions = require('../actions/api_actions'),
    FilterActions = require('../actions/filter_actions'),
    FilterParamsStore = require('../stores/filter_params');

var ApiUtil = {
  fetchBenches: function(){
    var params = FilterParamsStore.all();
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
