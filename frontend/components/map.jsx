var React = require('react'),
    ReactDOM = require('react-dom'),
    BenchStore = require('../stores/bench'),
    FilterStore = require('../stores/filter_params'),
    FilterActions = require('../actions/filter_actions'),
    History = require('react-router').History;

var Map = React.createClass({
  mixins: [History],

  componentDidMount: function () {
    var mapOptions = {
          center: { lat: 37.7758, lng: -122.435 },
          zoom: 13
        };
    this.markers = [];
    this.makeMap(mapOptions);
  },

  makeMap: function(mapOptions){
    var map = ReactDOM.findDOMNode(this.refs.map)
    this.map = new google.maps.Map(map, mapOptions);
    this.benchToken = BenchStore.addListener(this._onChange);
    this.filterToken = FilterStore.addListener(this._onChange);
    this.mapToken = this.map.addListener('idle', function(){
      var latlngBounds = this.getBounds();
      var northeast = {lat: latlngBounds.getNorthEast().lat(),
                       lng: latlngBounds.getNorthEast().lng()};
      var southwest = {lat: latlngBounds.getSouthWest().lat(),
                       lng: latlngBounds.getSouthWest().lng()};
      var bounds = { northeast: northeast,
                     southwest: southwest };
      FilterActions.updateBounds(bounds);
    });
    this.map.addListener('click', function(event){
      var coords = {lat: event.latLng.lat(), lng: event.latLng.lng() }
      this.history.pushState(null, "benches/new", coords);
    }.bind(this));
  },

  componentWillReceiveProps: function(newProps){
    if(typeof newProps.bench === 'undefined') {return;}
    var mapCenter = { lat: newProps.bench.lat,
                      lng: newProps.bench.long };
    var mapOptions = { center: mapCenter, zoom: 20 };
    this.makeMap(mapOptions);
    this.map.setOptions({ draggable: false });
  },

  _onChange: function(){
    var benches = BenchStore.all();
    this.removeMarkers();
    benches.forEach(this.addMarker);
  },

  componentWillUnmount: function(){
    this.benchToken.remove();
    this.filterToken.remove();
    this.mapToken.remove();
  },

  removeMarkers: function(){
    this.markers.forEach(function(marker){
      marker.setMap(null);
    });
  },

  addMarker: function (bench) {
    var pos = new google.maps.LatLng(bench.lat, bench.long),
        marker = new google.maps.Marker({
          position: pos,
          map: this.map
        });
    this.markers.push(marker);
    marker.addListener('click', function () {
      url = "benches/" + bench.id;
      this.history.pushState(null, url);
    }.bind(this));
  },

  render: function () {
    return(
      <div className='map' ref='map'>
      </div>
    )
  },
});

module.exports = Map;
