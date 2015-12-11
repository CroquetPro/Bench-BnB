var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    _benches = [],
    BenchConstants = require('../constants/bench_constants');

var BenchStore = new Store(AppDispatcher);

BenchStore.all = function () {
  return _benches.slice(0);
};

var resetBenches = function(benches){
  _benches = benches;
};

BenchStore._onDispatch = function (payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      var result = resetBenches(payload.benches);
      BenchStore._emitChange();
      break;
    }
  }

window.BenchStore = BenchStore;

module.exports = BenchStore;
