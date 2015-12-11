var AppDispatcher = require('../dispatcher/dispatcher');
var BenchConstants = require('../constants/bench_constants');
ApiActions = {
  receiveAll: function(benches){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  }
}

module.exports = ApiActions;
