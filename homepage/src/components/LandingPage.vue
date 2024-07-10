<template>
  <div class="landingpage">
    <section class="land">
      <h1 class="main-logo">
        <img src="../assets/main_assets/logo-big.png" />
      </h1><br>
      <p class="description-logo">
        We are ...
      </p>
    </section>
    <section class="map">
      <div class="row">
        <div class="col">
          <h1>MAP</h1>
        </div>
        <div class="col">
          <div id="map"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
//import { toRaw } from "vue"

export default {
  name: 'LandingPage',
  data() {
    return {
      markers: []
    }
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=dcf2430e47f4d6e4c7eae6a01045a618";
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(35.11464802405306, 128.96692288109705),
        level: 4
      };

      this.map = new kakao.maps.Map(container, options);
      this.displayMarkers()
    },
    getMarkerPositions() {
      return [
        {title: 'LAB', latlng: new kakao.maps.LatLng(35.11582996167435, 128.96628227368254)},
        {title: 'Professor Office', latlng: new kakao.maps.LatLng(35.11705318007645, 128.96754006345864)}
      ]
    },
    displayMarkers() {
      const map = this.map
      var positions = this.getMarkerPositions()

      if (this.markers.length > 0) {
        this.markers.forEach((item) => {
          item.setMap(null);
        })
      }

      positions.forEach((position) => {
        const infoWindow = new kakao.maps.InfoWindow({
          removable: true,
          content: `<span class="info-title">${position.title}</span>`
        })

        const marker = new kakao.maps.Marker({
          map,
          position: position.latlng
        })

        kakao.maps.event.addListener(marker, 'click', () => {infoWindow.open(map, marker)})
        kakao.maps.event.addListener(marker, 'mouseover', () => {infoWindow.open(map, marker)})
        kakao.maps.event.addListener(marker, 'mouseout', () => {infoWindow.close(map, marker)})
        this.markers.push(marker)
      })

      
    }
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
