<template>
  <section class="gallery">
    <div class="inner clearfix">
      <div class="gallery-left">
        <h3>활동 갤러리</h3>
        <a href="#" class="gallery-more">전체보기</a>
        <ul class="gallery-list clearfix">
          <li v-for="(item, index) in galleryData" :key="index">
            <a :href="item.link">
              <span class="gallery-img" :style="{
                  backgroundImage:`url(${item.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition:'center'
                }"></span>
              <p class="gallery-cont">
                <span class="gallery-title">{{item.title}}</span>
                <span class="gallery-date">{{item.date}}</span>
              </p>
            </a>
          </li>
        </ul>
      </div>
      <div class="gallery-right">
        <h3>동영상 갤러리</h3>
        <a href="#" class="gallery-more">전체보기</a>
        <div class="gallery-video">
          <iframe width="100%" height="100%" :src="movieData.movie_url"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {
    useStore
  } from 'vuex'
  import {
    computed
  } from 'vue'
  export default {
    setup() {
      const store = useStore();
      const galleryData = computed(() => store.getters.getGalleryData)
      const movieData = computed(() => store.getters.getMovieData)
      store.dispatch('fetchGalleryData')
      return {
        galleryData,movieData
      }
    }
  }
</script>

<style scoped>
  /* 갤러리 */
  .gallery {
    position: relative;
    display: block;


    background: url('@/assets/images/img_bottombgbcc.jpg') no-repeat center;
    background-size: cover;
    padding: 90px 0;
  }

  .gallery h3 {
    position: relative;
    display: block;
    font-size: 22px;
    color: #fff;
    font-weight: 300;
    margin-bottom: 25px;
  }

  .gallery-more::before {
    content: '';
    position: absolute;
    top: 11px;
    left: 0;
    display: block;
    width: 8px;
    height: 2px;
    background-color: #fff;
  }

  .gallery-more::after {
    content: '';
    position: absolute;
    top: 8px;
    left: 3px;
    display: block;
    width: 2px;
    height: 8px;
    background-color: #fff;
  }

  .gallery-more {
    position: absolute;
    right: 0;
    top: 5px;
    display: block;
    color: #fff;
    font-size: 15px;
    padding-left: 18px;
  }

  .gallery-left {
    position: relative;
    display: block;
    width: 67%;
    /* height: 385px; */
    float: left;
  }

  .gallery-list {
    position: relative;
    display: block;
  }

  .gallery-list li {
    position: relative;
    display: block;
    float: left;
    width: 32%;
    margin-right: 2%;
  }

  .gallery-list li:last-child {
    margin-right: 0;
  }

  .gallery-list li a {
    position: relative;
    display: block;

    background-color: #000;

  }

  .gallery-list li a:hover {
    box-shadow: 15px 15px 34px rgba(0, 0, 0, 0.28);
  }

  .gallery-list li a:hover .gallery-img {
    opacity: 0.6;
  }

  /*
 고민을 좀 해야하지 않을까?
 관리자가 새로운 게시물을 업로드 한다.
 이미지
 타이틀
 날짜 
 */
  .gallery-img {
    position: relative;
    display: block;
    width: 100%;
    height: 195px;
    transition: all 0.5s;
  }

  .gallery-1 {
    background: url('@/assets/images/gallery1.jpg') no-repeat center;
    background-size: cover;
  }

  .gallery-2 {
    background: url('@/assets/images/gallery2.jpg') no-repeat center;
    background-size: cover;
  }

  .gallery-3 {
    background: url('@/assets/images/gallery3.jpg') no-repeat center;
    background-size: cover;
  }

  .gallery-cont {
    position: relative;
    display: block;
    background-color: #fff;
    padding: 20px 40px;
    text-align: center;
  }

  .gallery-title {
    position: relative;
    display: block;
    font-size: 16px;
    color: #444;

  }

  .gallery-date {
    position: relative;
    display: block;
    font-size: 15px;
    color: #5f5f5f;
    margin-top: 20px;
  }

  .gallery-right {
    position: relative;
    display: block;
    width: 29%;
    height: 385px;
    float: right;
  }

  .gallery-video {
    position: relative;
    display: block;
    width: 100%;
    height: 327px;
    background-color: #282828;
  }

  /* 갤러리 PC 레이아웃 */
  /* 갤러리 반응형 레이아웃 */
  @media all and (max-width:1400px) {
    .gallery {
      padding: 6.42vw 0;
    }

    .gallery .inner {
      width: 96%;
    }

    .gallery-cont {
      position: relative;
      display: block;
      background-color: #fff;
      padding: 20px 2.85vw;
      text-align: center;
    }

    .gallery-title {
      font-size: 15px;
    }
  }

  @media all and (max-width:1080px) {
    .gallery-left {
      width: 100%;
      margin-bottom: 20px;
    }

    .gallery-right {
      width: 100%;
    }

    .gallery-video {
      background-color: rgba(0, 0, 0, 0.5);
      padding: 50px;
    }

  }

  @media all and (max-width:640px) {
    .gallery-list li {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
</style>