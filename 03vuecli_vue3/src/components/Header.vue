<template>
  <header>
    <nav class="g-nav">
      <ul class="g-nav-menu">
        <li><a href="#top">Top</a></li>
        <li><a href="#rawsweet">Raw sweet</a></li>
        <li><a href="#menu">Menu/Online shop</a></li>
        <li><a href="#guide">Guide</a></li>
        <li><a href="#message">Message</a></li>
        <li><a href="#company">Company</a></li>
        <li>
          <a href="https://pay.peraichi.com/checkout/items/harulifestyle/?lp" target="_blank" ><fa-icon icon="shopping-cart"></fa-icon>カートを見る</a>
        </li>
        <li>
          <a href="https://www.instagram.com/harulife/" target="_blank" class="instagram"><fa-icon :icon="['fab', 'instagram']"></fa-icon></a>　
          <a href="https://www.facebook.com/HARU-LIFE-STYLE-1600389390090690/" target="_blank" ><fa-icon :icon="['fab', 'facebook-square']" size="2x"></fa-icon></a>
        </li>
      </ul>
    </nav>
    <!-- ナビメニュー部分 -->
    <div class="header_inner">
      <input type="checkbox" id="menu_btn_check" v-model="isShow" />
      <label for="menu_btn_check" class="menu_btn">
        <span></span>
      </label>
      <nav class="header_nav">
        <ul>
          <li><a href="#top" @click="closeNav">Top</a></li>
          <li><a href="#rawsweet" @click="closeNav">Raw sweet</a></li>
          <li><a href="#spmenu" @click="closeNav">Menu/Online shop</a></li>
          <li><a href="#guide" @click="closeNav">Guide</a></li>
          <li><a href="#message" @click="closeNav">Message</a></li>
          <li><a href="#spcompany" @click="closeNav">Company</a></li>
          <li>
            <a href="https://pay.peraichi.com/checkout/items/harulifestyle/?lp" target="_blank"><fa-icon icon="shopping-cart"></fa-icon>カートを見る</a>
          </li>
          <li class="snsbtn">
            <a href="https://www.instagram.com/harulife/" target="_blank"><fa-icon :icon="['fab', 'instagram']"></fa-icon></a>　
            <a href="https://www.facebook.com/HARU-LIFE-STYLE-1600389390090690/" target="_blank"><fa-icon :icon="['fab', 'facebook-square']"></fa-icon></a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data: () => {
    return {
      isShow: false
    }
  },
  methods: {
    // クリックでナビゲーション非表示
    closeNav: function() {
      this.isShow = false;
    }
  }
};
</script>

<style>
@media screen and (min-width:768px) {
header{
  background-color:rgba(255,255,255,0.8);
  position: relative;
  width: 100%;
  z-index: 10;
}

header a {
  position: relative;
  display: inline-block;
  transition: .3s;
  text-decoration: none;
  color: #000;
  line-height: 180%;
  margin-bottom: 10%;
}
header a::after {
  position: absolute;
  bottom: 0;
  left: 50%;
  content: '';
  width: 0;
  height: 1px;
  background-color: lightgray;
  transition: .3s;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
header a:hover::after {
  width: 100%;
}

.fa-instagram  {
  font-size: 1.6em;
}
.fa-facebook-square {
  font-size: 1.6em;
}

.header_inner {
  display: none;
}

.g-nav-menu {
text-align: center;
}
.g-nav-menu li{
padding: 0 2%;
list-style-type: none;
display: inline-block;
line-height: 400%;
font-size: 1em;
}

.fixed{
position: fixed;
top: 0;
left: 0;
}
.fixed .g-nav-menu li{
line-height: 40px;
}

.instagram {
  margin-right: 10px;
  font-size: 18px;
}

}
@media screen and (max-width:767px) {
.g-nav {
  display: none;
}

/* ハンバーガーメニュー */
  header .header_inner {
    /* バーガーボタン */
    /* ラベルタグの設定 */
    /* バーガーメニュー三本線 */
    /* バーガーメニューのバツマークの指定 */
    /* inputタグのをクリックした時のlavelタグ */
    /* inputタグのチェックボックス隠す */
    /* ナビ メニューの指定 (外箱の指定) */
    /* input タグがクリックされた時のnavタグの動き */
    /* inputタグとlavelタグはnavタグの上にないと機能しない */
    /* 初期値は0 */
  }
  header .header_inner .menu_btn {
    position: fixed;
    /* ボタン位置 */
    top: 2%;
    right: 20px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 40px;
    /* バーガーの大きさ */
    height: 40px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    z-index: 90;
    max-block-size: #fff;
  }
  header .header_inner .menu_btn span,
  header .header_inner .menu_btn span:before,
  header .header_inner .menu_btn span:after {
    content: "";
    background-color: #333;
    width: 40px;
    height: 1px;
    display: block;
    position: absolute;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
  header .header_inner .menu_btn span:before {
    bottom: 8px;
  }
  header .header_inner .menu_btn span:after {
    top: 8px;
  }
  header .header_inner #menu_btn_check:checked ~ .menu_btn span {
    /* inputタグをクリックした時のlabelタグ内のspan真ん中を透明に */
    background-color: rgba(51, 51, 51, 0);
  }
  header .header_inner #menu_btn_check:checked ~ .menu_btn span::before {
    bottom: 0;
    /* 8px上に指定していたのを元の位置へ */
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
    /* 右へ回転 */
    background-color: #fff;
  }
  header .header_inner #menu_btn_check:checked ~ .menu_btn span::after {
    top: 0;
    /* 8px下に指定していたのを元の位置へ */
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
    /* 左へ回転 */
    background-color: #fff;
  }
  header .header_inner #menu_btn_check {
    display: none;
  }
  header .header_inner .header_nav {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: block;
    position: fixed;
    bottom: 100%;
    left: 0%;
    z-index: 80;
    background: rgba(100,63,48,0.8);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
  header .header_inner .header_nav ul {
    width: 50%;
    margin: 75px auto;
    text-align: center;
  }
  header .header_inner .header_nav ul li {
    list-style: none;
    margin: 20px 0;
  }
  header .header_inner .header_nav ul li a {
    font-size: 18px;
    display: block;
    color: #fff;
    line-height: 2em;
    text-decoration: none;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  header .header_inner .header_nav ul li a:hover {
    opacity: 0.5s;
  }
  header .header_inner .header_nav.slide-in {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  header .header_inner #menu_btn_check:checked ~ nav {
    bottom: 0;
  }
  header .snsbtn {
    display: flex;
    justify-content: center;
    font-size: 2.5rem;
  }
  header .snsbtn a {
    font-size: 30px !important;
  }
  header .snsbtn a:first-of-type {
    margin-right: 10px;
  }
}
</style>
