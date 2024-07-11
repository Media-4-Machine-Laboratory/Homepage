<template>
  <div class="landingpage">
    <section class="land">
      <div class="row">
        <div class="main-logo col-md-6">
          <img src="../assets/main_assets/logo-big.png" />
        </div>
        <div class="v-line col-sm-2"></div>
        <div class="description-area col-md-8">
          <div class="row">
            <div class="col-md-6">
              <h4 style="padding-bottom: 50%; margin-left: 50%;">We Research</h4>
            </div>
            <div class="col-lg-6">
              <div class="description">Video</div>
              <div class="description">Image</div>
              <div class="description">Audio</div>
              <div class="description">Computer Vision</div>
              <div class="description">For Machine</div>
              <div class="description">For Humans</div>
              <div class="description">For Future</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="start">
      <div class="slideshow-container">
        <div class="slides">
          <img src="../assets/main_assets/carousel/logo-big.png" />
        </div>
        <div class="slides">
          <img src="../assets/main_assets/carousel/logo-big.png" />
        </div>
        <div class="slides">
          <img src="../assets/main_assets/carousel/logo-big.png" />
        </div>
        <a class="prev" onclick="changeSlide(-1)">&#10094;</a>
        <a class="next" onclick="changeSlide(1)">&#10095;</a>
      </div>
    </section>
    <section class="map">
      <div class="row">
        <div class="col-md-6">
          <h3>찾아오시는 길</h3>
          <p style="font-size: 18px;"><i class="fa-solid fa-location-dot"></i> 부산광역시 사하구 낙동대로550번길 37(49315)</p>
          <hr/>
          <h5>지하철 이용</h5>
          <div class="row">
            <div class="col">
              <p style="font-size: 18px;">순환 버스</p>
              <div class="path-to">
                <p style="font-size: 18px;"><i class="fas fa-train-subway"></i> 1호선 하단역 하차</p>
                <p style="font-size: 18px;"><i class="fas fa-bus-simple"></i> 6번 출구에서 <br> 순환버스(사하 10) 이용</p>
              </div>
            </div>
            <div class="col">
              <p style="font-size: 18px;">도보</p>
              <div class="path-to">
                <p style="font-size: 18px;"><i class="fas fa-train-subway"></i> 1호선 하단역 하차</p>
                <p style="font-size: 18px;"><i class="fa-solid fa-person-walking"></i> 9번 출구에서 <br> 10분, 1.1km 이동</p>
              </div>
            </div>
          </div>
          <hr/>
          <h5>버스 이용</h5>
            <div class="path-to">
              <p style="font-size: 18px;"><i class="fa-solid fa-bus"></i> 동아대입구 정류소 하차</p>
              <p style="font-size: 18px;">2, 16, 68, 123, 126, 138, 338</p>
              <p style="font-size: 18px;">1001</p>
            </div>
        </div>
        <div class="col-md-4">
          <div id="map"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'LandingPage',
  data() {
    return {
      markers: [],
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
        {title: 'LAB', latlng: new kakao.maps.LatLng(35.11582996167435, 128.96628227368254), icon: "fas fa-flask"},
        {title: 'Professor Office', latlng: new kakao.maps.LatLng(35.11705318007645, 128.96754006345864), icon: "far fa-building"}
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
        const marker = new kakao.maps.Marker({
          map,
          position: position.latlng
        })

        var content = `<div class="cOverlay" style="background-color: #332D2D; opacity: 0.8; color: white; font-family: 'Pretendard-Regular'; font-size: 12px; padding: 5px;">
                        <div class="info">
                          <div class="title">
                            <i class="${position.icon}"></i>
                            ${position.title}
                            <div class="close" onclick="this.closeOverlay(overlay)" title="닫기"></div>
                          </div>
                        </div>
                      </div>`

        const overlay = new kakao.maps.CustomOverlay({
          content: content,
          map: map,
          position: marker.getPosition()
        })

        kakao.maps.event.addListener(marker, 'click', () => {overlay.setMap(map)})
        this.markers.push(marker)
      })
    },
    closeOverlay(overlay) {
      overlay.setMap(null);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/landing.css";

  #map {
    margin-left: 10px;
    width: 400px;
    height: 400px;
  }
  .cOverlay .info .title .close {position: absolute;top: 10px;right: 10px;color: #888;width: 17px;height: 17px;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png');}
  .cOverlay .info .title .close:hover {cursor: pointer;}
</style>
