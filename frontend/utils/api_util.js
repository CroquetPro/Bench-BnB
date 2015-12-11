var ApiActions = require('../actions/api_actions');

var ApiUtil = {
  fetchBenches: function(){
    //make an api call using AJAX in here
    $.get('api/benches', {}, function(benches){
      ApiActions.receiveAll(benches);
    });
  }
}

module.exports = ApiUtil;
