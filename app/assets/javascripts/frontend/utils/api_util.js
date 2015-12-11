var ApiActions = require('../actions/api_actions');

ApiUtil = {
  fetchBenches: function(){
    //make an api call using AJAX in here
    $.get('api/benches', {}, function(benches){
      ApiActions.receiveAll(benches);
    });
  }
}

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
