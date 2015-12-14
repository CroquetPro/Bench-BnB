var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher');

var FilterParamsStore = new Store(AppDispatcher);

var _params = {
  bounds: {},
  seating: {min: 0, max: 10}
};

FilterParamsStore.all = function () {
  return Object.keys(_params).map(function (param) {
    return _params[param];
};

var resetBounds = function(bounds){
  _params[bounds] = bounds;
};

FilterParamsStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case FilterParamsConstants.BOUNDS_RECEIVED:
      resetBoundss(payload.bounds);
      break;
  //   case FilterParamsConstants.BENCH_RECEIVED:
  //     _benches.push(payload.bench);
  //     break;
  //   }
    FilterParamsStore.__emitChange();
  }

module.exports = FilterParamsStore;
