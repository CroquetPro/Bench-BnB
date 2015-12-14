var React = require('react'),
    AppDispatcher = require('../dispatcher/dispatcher');
    BilterConstants = require('../constants/filter_constants');

var FilterActions = {
  updateBounds: function(bounds){
    AppDispatcher.dispatch({
      actionType: FilterConstants.BOUNDS_RECEIVED,
      bounds: bounds
    });
  }
  // receiveAll: function(benches){
  //   AppDispatcher.dispatch({
  //     actionType: BenchConstants.BENCHES_RECEIVED,
  //     benches: benches
  //   });
  // },
  //
  // receiveBench: function(bench){
  //   AppDispatcher.dispatch({
  //     actionType: BenchConstants.BENCH_RECEIVED,
  //     bench: bench
  //   });
  // }
}

module.exports = FilterActions;
