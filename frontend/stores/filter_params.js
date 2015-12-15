var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    FilterConstants = require('../constants/filter_constants');

var FilterParamsStore = new Store(AppDispatcher);

var _params = { bounds: { northeast: { lat: 37, lng: -122 },
                          southwest: { lat: 36.5, lng: -122.5 }},
                seating: { min: 0, max: 10 }
                  };

FilterParamsStore.all = function () {
    return _params;
};

var resetBounds = function(bounds){
  _params['bounds'] = bounds;

};

var resetSeating = function(seating){
  _params['seating'] = seating;
}

FilterParamsStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case FilterConstants.BOUNDS_RECEIVED:
      resetBounds(payload.bounds);
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.SEATING_RECEIVED:
      resetSeating(payload.seating);
      FilterParamsStore.__emitChange();
      break;
    }
}

module.exports = FilterParamsStore;
