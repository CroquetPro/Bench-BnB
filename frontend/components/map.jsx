var React = require('react'),
    ReactDOM = require('react-dom'),
    BenchStore = require('../stores/bench'),
    ApiUtil = require('../utils/api_util');

var Map = React.createClass({
  componentDidMount: function () {
    //React.findDOMNode gets us a pointer to the actual html DOM element,
    //not its React component class instance, this is what
    //google maps wants to render the map into
    //this.refs is an object populated by giving children a 'ref' prop
    //when we render
    var map = ReactDOM.findDOMNode(this.refs.map),
    //we make these options so when the map loads up it displays a
    //good location and zoom level, zoom of 13 show most of SF
        mapOptions = {
          center: { lat: 37.7758, lng: -122.435 },
          zoom: 13
        };
    //this line actually creates the map and renders it into the DOM
    this.map = new google.maps.Map(map, mapOptions);
    //add a movement listener
    // this.listenForMove();
    //we are going to add a map marker for each burrito place now
    // this.props.benches.forEach(this.addBench);
  },
  addBench: function (bench) {
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
    marker.addListener('click', function () {
      //when the marker is clicked on, alert the name
      alert("clicked on: " + burritoPlace.name)
    });
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
