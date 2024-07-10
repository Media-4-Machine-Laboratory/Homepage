<template>
  <div class="landingpage">
    <section class="land">
      <h1 class="main-logo">
        <img src="../assets/main_assets/logo-big.png" />
      </h1>
      <p class="description-logo">
        We are ...
      </p>
    </section>
    <section class="map">
      <h1> Map here </h1>
      <div id="map">
      </div>
    </section>
  </div>
</template>

<script>
import { toRaw } from "vue"

export default {
  name: 'LandingPage',
  data() {
    return {
      markerPosition1: [
        [35.11576734805419, 128.96625334981783]
      ],
      markerPosition2: [
        [35.117131940674106, 128.96768453876615]
      ],
      markers: [],
      infowindow: null
    }
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
      this.displayMarker(this.markerPosition1);
      this.displayMarker(this.markerPosition2);
      this.displayInfoWindow(this.markerPosition1, "LAB");
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=4e668ae5cd69a64aecd93e568fc960c7";
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(35.11544015468396, 128.967534172774),
        level: 5,
      };

      this.map = new kakao.maps.Map(container, options);
    },
    changeSize(size) {
      const container = document.getElementById("map");
      container.style.width = `${size}px`;
      container.style.height = `${size}px`;
      toRaw(this.map).relayout();
    },
    displayMarker(markerPositions) {
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }

      const positions = markerPositions.map(
        (position) => new kakao.maps.LatLng(...position)
      );

      if (positions.length > 0) {
        this.markers = positions.map(
          (position) =>
            new kakao.maps.Marker({
              map: toRaw(this.map),
              position,
            })
        );

        const bounds = positions.reduce(
          (bounds, latlng) => bounds.extend(latlng),
          new kakao.maps.LatLngBounds()
        );

        toRaw(this.map).setBounds(bounds);
      }
    },
    displayInfoWindow(markerPosition, Content) {

      var iwContent = '<div style="padding:5px;">' + Content + '</div>',
        iwRemoveable = true;

      this.infowindow = new kakao.maps.InfoWindow({
        map: toRaw(this.map), // 인포윈도우가 표시될 지도
        position: markerPosition,
        content: iwContent,
        removable: iwRemoveable,
      });

      //toRaw(this.map).setCenter(markerPosition);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/landing.css";

  #map {
    width: 400px;
    height: 400px;
  }
</style>
