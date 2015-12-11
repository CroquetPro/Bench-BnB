var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    _benches = [],
    BenchConstants = require('../constants/bench_constants');

var BenchStore = new Store(AppDispatcher);

BenchStore.all = function () {
  return _benches.slice();
};

var resetBenches = function(benches){
  console.log(benches);
  _benches = benches;
};

BenchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      var result = resetBenches(payload.benches);
      BenchStore.__emitChange();
      break;
    }
  }

module.exports = BenchStore;
