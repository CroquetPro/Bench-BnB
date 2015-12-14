var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    _benches = [],
    BenchConstants = require('../constants/bench_constants');

var BenchStore = new Store(AppDispatcher);

BenchStore.all = function () {
  return _benches.slice();
};

var resetBenches = function(benches){
  _benches = benches;
};

BenchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      resetBenches(payload.benches);
      break;
    case BenchConstants.BENCH_RECEIVED:
      _benches.push(payload.bench);
      break;
    }
    BenchStore.__emitChange();
  }

module.exports = BenchStore;
