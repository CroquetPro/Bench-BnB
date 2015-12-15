var React = require('react'),
    ReactDOM = require('react-dom'),
    BenchStore = require('../stores/bench'),
    FilterActions = require('../actions/filter_actions'),
    History = require('react-router').History;

var Map = React.createClass({
  mixins: [History],

  componentDidMount: function () {
    //React.findDOMNode gets us a pointer to the actual html DOM element,
    //not its React component class instance, this is what
    //google maps wants to render the map into
    //this.refs is an object populated by giving children a 'ref' prop
    //when we render
    //we make these options so when the map loads up it displays a
    //good location and zoom level, zoom of 13 show most of SF
    var mapOptions = {
          center: { lat: 37.7758, lng: -122.435 },
          zoom: 13
        };

    this.makeMap(mapOptions);
    //this line actually creates the map and renders it into the DOM
    this.markers = [];
    //add a movement listener
    // this.listenForMove();
    //we are going to add a map marker for each burrito place now
    // this.props.benches.forEach(this.addBench);
    this.storeToken = BenchStore.addListener(this._onChange);
    this.mapToken = this.map.addListener('idle', function(){
      var latlngBounds = this.getBounds();
      var northeast = {lat: latlngBounds.getNorthEast().lat(),
                       lng: latlngBounds.getNorthEast().lng()};
      var southwest = {lat: latlngBounds.getSouthWest().lat(),
                       lng: latlngBounds.getSouthWest().lng()};
      var bounds = {northeast: northeast,
                    southwest: southwest};
      FilterActions.updateBounds(bounds);
    });
    this.map.addListener('click', function(event){
      var coords = {lat: event.latLng.lat(), lng: event.latLng.lng() }
      this.history.pushState(null, "benches/new", coords);
    }.bind(this));
  },

  makeMap: function(mapOptions){
    var map = ReactDOM.findDOMNode(this.refs.map)
    this.map = new google.maps.Map(map, mapOptions);
  },

  componentWillReceiveProps: function(newProps){
    if(typeof newProps.bench === 'undefined') {return;}
    var mapCenter = { lat: newProps.bench.lat,
                      lng: newProps.bench.long };
    var mapOptions = { center: mapCenter, zoom: 20 };
    this.makeMap(mapOptions);
  },

  _onChange: function(){
    var benches = BenchStore.all();
    this.removeMarkers();
    benches.forEach(this.addMarker);
  },

  componentWillUnmount: function(){
    this.storeToken.remove();
    this.mapToken.remove();
  },

  removeMarkers: function(){
    this.markers.forEach(function(marker){
      marker.setMap(null);
    });
  },

  addMarker: function (bench) {
    //we make an instance of the google maps LatLng class, args are
    //(lat, lng)
    var pos = new google.maps.LatLng(bench.lat, bench.long),
    //then we use our new instance of LatLng to make a marker
        marker = new google.maps.Marker({
          position: pos,
          //set map to this.map, this is what adds it to the map
          //when we want to remove this marker, we need to set its
          //map property to null using myMarker.setMap(null)
          map: this.map
        });
    this.markers.push(marker);

    marker.addListener('click', function () {
      //when the marker is clicked on, alert the name
      url = "benches/" + bench.id;
      this.history.pushState(null, url);
    }.bind(this));
  },

  // listenForMove: function(){
  //   //we listen for the map to emit an 'idle' event, it does this when
  //   //the map stops moving
  //   var that = this;
  //   google.maps.event.addListener(this.map, 'idle', function() {
  //     var bounds = that.map.getBounds();
  //     alert('map has moved, check console to see updated bounds')
  //     console.log('center');
  //     console.log(bounds.getCenter());
  //     console.log("north east");
  //     console.log(bounds.getNorthEast());
  //     console.log("south west");
  //     console.log(bounds.getSouthWest());
  //   });
  // },
  render: function () {
    //the div that will become the map is just an empty div
    //we give it a 'ref' so we can easily get a pointer to the
    //actual dom node up in componentDidMount
    //DO NOT FORGET: you must style your map div and give it width + height
    //or else it won't be visible!
    return(
      <div className='map' ref='map'>
      </div>
    )
  },
});

module.exports = Map;
