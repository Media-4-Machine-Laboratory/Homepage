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
      <div class="slide-container">
        <div id="introCarousel" class="carousel slide carousel-fade shadow-2-strong" data-mdb-carousel-init>
          <!-- Indicators -->
          <div class="carousel-indicators">
            <li data-mdb-target="#introCarousel" data-mdb-slide-to="0" class="active"></li>
            <li data-mdb-target="#introCarousel" data-mdb-slide-to="1"></li>
            <li data-mdb-target="#introCarousel" data-mdb-slide-to="2"></li>
          </div>

          <!-- Inner -->
          <div class="carousel-inner">
            <!-- Single item -->
            <div class="carousel-item active">
              <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
                <div class="d-flex justify-content-center align-items-center h-100">
                  <div class="text-white text-center" data-mdb-theme="dark">
                    <h1 class="mb-3">Learn Bootstrap 5 with MDB</h1>
                    <h5 class="mb-4">Best & free guide of responsive web design</h5>
                    <a class="btn btn-outline-light btn-lg m-2" data-mdb-ripple-init href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                      role="button" rel="nofollow" target="_blank">Start tutorial</a>
                    <a class="btn btn-outline-light btn-lg m-2" data-mdb-ripple-init href="https://mdbootstrap.com/docs/standard/"
                      target="_blank" role="button">Download MDB UI KIT</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Single item -->
            <div class="carousel-item">
              <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
                <div class="d-flex justify-content-center align-items-center h-100">
                  <div class="text-white text-center">
                    <h2>You can place here any content</h2>
                  </div>
                </div>
              </div>
            </div>

            <!-- Single item -->
            <div class="carousel-item">
              <div class="mask" style="
                                      background: linear-gradient(
                                      45deg,
                                      rgba(29, 236, 197, 0.7),
                                      rgba(91, 14, 214, 0.7) 100%
                                      );
                                      ">
                <div class="d-flex justify-content-center align-items-center h-100" data-mdb-theme="dark">
                  <div class="text-white text-center">
                    <h2>And cover it with any mask</h2>
                    <a class="btn btn-outline-light btn-lg m-2" data-mdb-ripple-init
                      href="https://mdbootstrap.com/docs/standard/content-styles/masks/" target="_blank" role="button">Learn
                      about masks</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Inner -->

          <!-- Controls -->
          <a class="carousel-control-prev" href="#introCarousel" role="button" data-mdb-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#introCarousel" role="button" data-mdb-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
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
import { Carousel, initMDB } from 'mdb-ui-kit';
initMDB({Carousel})
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
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/landing.css";
  @import '~mdb-ui-kit/css/mdb.min.css';

  #map {
    margin-left: 10px;
    width: 400px;
    height: 400px;
  }
  .cOverlay .info .title .close {position: absolute;top: 10px;right: 10px;color: #888;width: 17px;height: 17px;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png');}
  .cOverlay .info .title .close:hover {cursor: pointer;}

  /* Carousel styling */
  #introCarousel,
  .carousel-inner,
  .carousel-item,
  .carousel-item.active {
    height: 100vh;
  }

  .carousel-item:nth-child(1) {
    background-image: url('../assets/main_assets/carousel/logo-big.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  .carousel-item:nth-child(2) {
    background-image: url('https://mdbootstrap.com/img/Photos/Others/images/77.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  .carousel-item:nth-child(3) {
    background-image: url('https://mdbootstrap.com/img/Photos/Others/images/78.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  /* Height for devices larger than 576px */
  @media (min-width: 992px) {
    #introCarousel {
      margin-top: -58.59px;
    }
  }
</style>
