var ApiActions = require('../actions/api_actions');

var ApiUtil = {
  fetchBenches: function(bounds){
    //make an api call using AJAX in here
    $.get('api/benches', bounds, function(benches){
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
