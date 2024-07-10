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
      var infowindow = new 
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=915cffed372954b7b44804ed422b9cf0";
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

      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
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

      var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(33.450701, 126.570667), //인포윈도우 표시 위치입니다
        iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

      this.infowindow = new kakao.maps.InfoWindow({
        map: toRaw(this.map), // 인포윈도우가 표시될 지도
        position: iwPosition,
        content: iwContent,
        removable: iwRemoveable,
      });

      toRaw(this.map).setCenter(iwPosition);
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
