<template>
  <div>
    <!-- 모바일 메뉴 내용 -->
    <div class="mb-wrap">
      <div class="mb-wrap-top clearfix">
        <a href="#">로그인</a>
        <a href="#">회원가입</a>
      </div>
      <div class="mb-wrap-main">
        <ul class="mb-menu">
          <li class="mb-mainmenu" v-for="(item, index) in mbMenu" :key="index">
            <a :href="item.link" v-html="item.title"></a>
            <ul class="mb-submenu">
              <li v-for="(subitem, subindex) in item.subArr" :key="subindex">
                <a :href="subitem.sublink" v-html="subitem.subtitle"></a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- 모바일 메뉴 가림막 -->
    <div class="mb-dim"></div>
  </div>
</template>

<script>
  import {
    useStore
  } from 'vuex'
  import {
    computed,
    onUpdated
  } from 'vue'
  import $ from 'jquery';
  export default {
    setup() {
      const store = useStore()
      const mbMenu = computed(() => store.getters.getMenuData)
      
      onUpdated(() => {
        function buttonReset() {
          $('.mb-bt').removeClass('mb-bt-open');
          $('.mb-dim').removeClass('mb-dim-open');
          $('.mb-wrap').removeClass('mb-wrap-open');
          $('.mb-menu>li').height(60)
          $('.mb-mainmenu').removeClass('mb-mainmenu-open');
        }
        $(window).resize(function () {
          // 화면 너비를 계산한다.
          let temp = $(window).width();
          // 1000 px 보다 크면
          if (temp > 1000) {
            // 모바일 버튼 기능 초기화
            buttonReset();
          }

        });
        let mb_mainmenu = $('.mb-mainmenu');
        let mb_submenu = $('.mb-submenu');
        let mb_submenu_high = [];
        $.each(mb_submenu, function (index) {
          // 각각의 .mb-submenu 로 가서
          // li 의 개수를 파악한다.
          let count = $(this).find('li').length;
          // 최종 결과를 저장(56*count)
          mb_submenu_high[index] = (56 * count);
        });
        let mb_li = $('.mb-menu > li');
        $.each(mb_mainmenu, function (index) {
          $(this).click(function (e) {
            //  웹브라우저 갱신 막기
            e.preventDefault();

            // mb-mainmenu를 toggleClass 한다.
            $(this).toggleClass('mb-mainmenu-open');
            //만약에 mb-mainmenu-open이 있으면 펼치고
            //없으면 닫고
            let active = $(this).hasClass('mb-mainmenu-open');
            if (active) {
              let temp = mb_submenu_high[index];
              mb_li.eq(index).height(temp + 60);
            } else {
              mb_li.eq(index).height(60);
            }

          });
          let mb_dim = $('.mb-dim');
          mb_dim.click(function () {
            //모바일 버튼 기능 초기화
            buttonReset();
          });
        });
      })
      return {
        mbMenu
      }
    }
  }
</script>

<style scoped>
  /* 모바일 메뉴 내용 */
  .mb-wrap {
    position: fixed;
    right: -400px;
    top: 0;
    display: block;
    width: 400px;
    height: 100%;
    padding: 0 20px;
    background: #fff;
    z-index: 99998;
    transition: all 0.3s;
  }

  .mb-wrap-open {
    right: 0;
  }

  .mb-wrap-top {
    position: relative;
    display: block;
    padding-top: 70px;
    padding-bottom: 15px;
  }

  .mb-wrap-top a {
    position: relative;
    display: block;
    float: left;
    font-size: 13px;
    color: #999;
    border: 2px solid #eee;
    line-height: 35px;
    margin-right: 8px;
    padding: 0 20px;
    border-radius: 18px;
    background-color: rgba(0, 0, 0, 0.0);
    transition: background-color 0.5c;
  }

  .mb-wrap-top a:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .mb-wrap-main {
    position: relative;
    display: block;
    width: 100%;
    height: calc(100% - 124px);
    overflow-x: hidden;
    overflow-y: auto;
  }

  .mb-menu {
    position: relative;
    display: block;
  }

  .mb-menu>li {
    position: relative;
    display: block;
    /* background-color: #f5f5f5; */
    width: 100%;
    height: 60px;
    overflow: hidden;
    transition: all 0.5s;
  }

  .mb-mainmenu {
    position: relative;
    display: block;
    font-size: 18px;
    /* color: #2578de; */
    color: #444;
    line-height: 60px;
    background-color: #fff;
  }

  .mb-mainmenu-open {
    color: #2578de;
  }

  .mb-submenu {
    position: relative;
    display: block;
    padding-left: 10px;
  }

  .mb-submenu li {
    position: relative;
    display: block;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e9e9e9;
  }

  .mb-submenu li:last-child {
    border-bottom: 0;
  }

  .mb-submenu li a {
    position: relative;
    display: block;
    font-size: 14px;
    color: #666;
    line-height: 56px;
    padding-left: 10px;
  }

  /* 모바일 메뉴 가림막 */
  .mb-dim {
    position: fixed;
    left: 0;
    top: 0;
    display: none;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    background-color: #000;
    z-index: 99997;
  }

  .mb-dim-open {
    display: block;
  }
</style>