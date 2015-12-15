var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    _benches = {},
    BenchConstants = require('../constants/bench_constants');

var BenchStore = new Store(AppDispatcher);

BenchStore.all = function () {
  return Object.keys(_benches).map(function (benchId) {
    return _benches[benchId];
  });
};

var resetBenches = function(benches){
  _benches = {};
  benches.forEach(function (bench) {
    _benches[bench.id] = bench;
  });
};

BenchStore.find = function(id){
  return _benches[id];
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
    console.log(_benches);

    BenchStore.__emitChange();
  }

module.exports = BenchStore;
