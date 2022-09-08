<template>
  <header class="header">

    <div class="inner">
      <a href="#" class="logo">

      </a>

      <div class="gnb">
        <ul class="menu">
          <li  v-for="(item, index) in gnbData" :key="index">
            <a :href="item.link" class="mainmenu" v-html="item.title"></a>
            <ul class="submenu">
              <li v-for="(subitem, subindex) in item.subArr" :key="subindex">
                <a :href="subitem.sublink" v-html="subitem.subtitle"></a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="member">

        <ul class="member-list clearfix">
          <li><a href="#">로그인</a></li>
          <li><a href="#">회원가입</a></li>
        </ul>

        <button class="member-more">더보기</button>

      </div>
    </div>

  </header>
</template>

<script>
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'
import $ from 'jquery';
  export default {
    setup() {
      const store = useStore();
      const gnbData = computed(() => store.getters.getMenuData)
      onMounted(() =>{
        // let more_wrap = $('.more-wrap');
        let member_more = $('.member-more');
        member_more.click(function () {
        $('.more-wrap').fadeIn(300);
  });
      })
      return {
        gnbData
      }
    }
  }
</script>

<style scoped>
  /* 상단영역 */
  .header {
    position: relative;
    display: block;
    z-index: 9999;
  }

  .header .inner {
    height: 98px;
  }

  .logo {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 123px;
    height: 40px;
    background: url('@/assets/images/logo.jpg') no-repeat center;
    background-size: contain;
  }

  .gnb {
    position: relative;
    display: block;


  }

  /* display:block 을 적용하시면 width는 defalut는 100%다 */
  /* 영역을 가운데로 배치 */
  /* 너비를 안다 그렇다면 margin:0 auto */
  /* 너비를 알수 없다.? abosolute; */
  /* display:inline-block 이면 center로 할수있다 */

  .menu {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    display: block;
    margin: 0 auto;
    white-space: nowrap;
    font-size: 0;
  }

  .menu>li {
    position: relative;
    display: inline-block;
    vertical-align: top;

  }

  .mainmenu {
    position: relative;
    display: block;
    height: 98px;
    text-align: center;
    line-height: 98px;
    padding: 0 20px;
    font-size: 19px;
    color: #333;
  }

  .submenu {
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    top: 70px;
    display: block;
    visibility: hidden;
    min-width: 182px;
    opacity: 0;
    transition: all 0.3s;
    background-color: #fff;
    border: 1px solid rgba(255, 255, 255, .3);
    border-radius: 3px;
    box-shadow: 0px 0px 10px rgb(0 0 0 / 8%);
  }

  .menu>li:hover .submenu {
    display: block;
    opacity: 1;
    transform: translateX(-50%) translateY(0);
    visibility: visible;
  }

  .submenu li {
    position: relative;
    display: block;
  }

  .submenu li a {
    position: relative;
    display: block;
    text-align: center;
    white-space: nowrap;
    font-size: 14px;
    color: #333;
    font-weight: 400;
    line-height: 46px;
    border: 1px solid #eaeaea;
  }

  .submenu .menu>li:hover .mainmenu {
    color: #2578de;
    z-index: 999;
  }

  .mainmenu:hover {
    color: #2578de;

  }

  .submenu li a:hover {
    color: #2578de;
  }

  .member {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: block;

  }

  .member-list {
    position: relative;
    display: block;
    float: left;
    overflow: hidden;

  }

  .member-list li {
    position: relative;
    display: block;
    float: left;
    margin-top: 12px;
    margin-right: 15px;
  }

  .member-list li a {
    position: relative;
    display: block;
    font-size: 14px;
    color: #666;
  }

  .member-more {
    position: relative;
    display: block;
    width: 45px;
    height: 45px;
    float: left;
    font-size: 0;
    background: url('@/assets/images/img_allmenu.png') no-repeat center;
    background-size: cover;
    border: 0;
    cursor: pointer;
  }

  /* .header > .inner{} */
  /* 동일한게 중첩되게 겹쳐져 있을때는>를 사용한다 */
  /* 1400보다 작은 경우 반응형 */
  @media all and (max-width:1400px) {

    .header .inner {
      height: 70px;
    }

    .logo {
      width: 123px;
      height: 40px;
    }

    .menu {
      left: 60%;
      top: 28px;

    }

    .mainmenu {
      font-size: 17px;
      line-height: 65px;
      height: 65px;
    }

    .submenu {
      top: 60px;
    }

    .member {
      top: 20%;
    }

    .member-more {
      width: 35px;
      height: 35px;
      border-radius: 100%;
      margin-top: 5px;
    }
  }

  @media all and (max-width: 1000px) {
    .header {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 70px;
      background-color: #fff;
    }

    .header .inner {
      width: 97%;
      height: 70px;

    }

    .gnb {
      display: none;
    }

    .member {
      display: none;
    }
  }
</style>