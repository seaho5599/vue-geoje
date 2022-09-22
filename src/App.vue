<template>
  <div>
    <ModalView />
    <more-wrap-view />
    <mb-bt />
    <mb-wrap-view />

    <div class="wrap">
      <header-view />
      <visual-view />
      <quick-view />
      <community-view />
      <gallery-view />
      <banner-view />
      <footer-view />
    </div>
  </div>
</template>

<script>
import ModalView from "./components/ModalView.vue";
import MoreWrapView from "./components/MoreWrapView.vue";
import MbBt from "./components/MbBt.vue";
import MbWrapView from "./components/MbWrapView.vue";
import HeaderView from "@/components/HeaderView.vue";
import VisualView from "@/components/VisualView.vue";
import QuickView from "@/components/QuickView.vue";
import CommunityView from "@/components/CommunityView.vue";
import GalleryView from "@/components/GalleryView.vue";
import BannerView from "@/components/BannerView.vue";
import FooterView from "@/components/FooterView.vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: {
    ModalView,
    HeaderView,
    VisualView,
    QuickView,
    CommunityView,
    GalleryView,
    BannerView,
    FooterView,
    MoreWrapView,
    MbBt,
    MbWrapView,
  },
  setup() {
    const store = useStore();
    store.dispatch("fetchMenuData");
    store.dispatch("fetchVisualData");
    store.dispatch("fetchBannerData");
    store.dispatch("fetchMovieData");
    store.dispatch("fetchInfoData");
    store.dispatch("fetchNewsData");
    return {};
  },
};
</script>

<style>
@charset 'utf-8';

@import url("http://fonts.googleapis.com/earlyaccess/notosanskr.css");
@import url("http://fonts.googleapis.com/earlyaccess/nanumgothic.css");
@import url("https://fonts.googleapis.com/css?family=Raleway:400,600,700,800");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");

@font-face {
  font-family: "GmarketSansLight";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "GmarketSansMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "GmarketSansBold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline-style: none;
  /* 대학교, 관공서, 대규모 사이트에서는 
  outline-style을 none을 쓰면 안됨 */
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #333;
}

img {
  vertical-align: middle;
  border: 0;
}

/* scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 5px;
  background-color: #f7f7f7;
  -moz-border-radius: 0px;
  -webkit-border-radius: 0px;
  border-radius: 0px;
}

::-webkit-scrollbar-thumb {
  background-color: #aaa;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
}

html {
  min-width: 350px;
  font-size: 16px;
  /* pt rem em % px */
}

body {
  font-family: Open Sans, GmarketSansMedium, GmarketSansLight, GmarketSansBold,
    "맑은 고딕", "돋움", Dotum, "굴림", Gulim, Sans-serif;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: -0.6px;
  /* 글자간격 */
  line-height: 1.5;
  /* 1.4 -> 12px 1.4배 */
}

/* 공통(재사용) */
.inner {
  position: relative;
  display: block;
  margin: 0 auto;
  max-width: 1400px;
}

.clearfix::after {
  content: "";
  position: relative;
  display: block;
  width: 100%;
  clear: both;
}

/* 모바일 관련 */

/* 개별요소 */
.wrap {
  position: relative;
  display: block;
}
</style>
