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
          <a href="https://www.instagram.com/harulife/" target="_blank"><fa-icon :icon="['fab', 'instagram']"></fa-icon></a>　
          <a href="https://www.facebook.com/HARU-LIFE-STYLE-1600389390090690/" target="_blank" ><fa-icon :icon="['fab', 'facebook-square']" size="2x"></fa-icon></a>
        </li>
      </ul>
    </nav>
    <!-- ナビメニュー部分 -->
    <ul id="Drawer">
      <li><a href="#top">Top</a></li>
      <li><a href="#rawsweet">Raw sweet</a></li>
      <li><a href="#spmenu">Menu/Online shop</a></li>
      <li><a href="#guide">Guide</a></li>
      <li><a href="#message">Message</a></li>
      <li><a href="#spcompany">Company</a></li>
      <li>
        <a href="https://pay.peraichi.com/checkout/items/harulifestyle/?lp" target="_blank"><fa-icon icon="shopping-cart"></fa-icon>カートを見る</a>
      </li>
      <li>
        <a href="https://www.instagram.com/harulife/" target="_blank"><fa-icon :icon="['fab', 'instagram']"></fa-icon></a>　
        <a href="https://www.facebook.com/HARU-LIFE-STYLE-1600389390090690/" target="_blank"><fa-icon :icon="['fab', 'facebook-square']"></fa-icon></a>
      </li>
    </ul>
    <!-- ハンバーガーメニュー部分 -->
    <nav class="Drawer">
      <div class="menu1"></div>
      <div class="menu2"></div>
      <div class="menu3"></div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
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

#Drawer {
  display: none;
}
.Drawer {
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
}
@media screen and (max-width:767px) {
.g-nav {
  display: none;
}

/* ハンバーガーメニュー */
.Drawer {
  width:25px;
  height:30px;
  top: 2%;
  right:2%;
  position:fixed;
  cursor:pointer;
  overflow:hidden;
  z-index:9999;
}
nav .menu1 {
  width:25px;
  height:3px;
  background-color: #000;
  top:0px;
  position:absolute;
}
nav .menu2 {
  width:25px;
  height:3px;
  background-color: #000;
  top:9px;
  position:absolute;
}
nav .menu3 {
  width:25px;
  height:3px;
  background-color: #000;
  top:18px;
  position:absolute;
}
nav.menu1,nav.menu2,nav.menu3 {
  transition: all 0.5s ease-out; -o-transition: all 0.5s ease-out; /* Opera */
  -moz-transition: all 0.5s ease-out; /* Firefox */
  -webkit-transition: all 0.5s ease-out; /* GoogleChrome, Safari */
  -ms-transition: all 0.5s ease-out; /* IE */
}
nav .menuclick1 {
  top:8px;
  -o-transform: rotate(405deg);
  -moz-transform: rotate(405deg);
  -webkit-transform: rotate(405deg);
  -ms-transform: rotate(405deg);
  transform: rotate(405deg);
}
nav .menuclick2 {
  background-color:rgba(255,255,255,0);
}
nav .menuclick3 {
  top:8px;
  -o-transform: rotate(-405deg);
  -moz-transform: rotate(-405deg);
  -webkit-transform: rotate(-405deg);
  -ms-transform: rotate(-405deg);
  transform: rotate(-405deg);
}

#Drawer{
  background: rgba(100,63,48,0.8);
  display: none;
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: 98;
  text-align: center;
  color : white;
  padding-top: 16%;
}

#Drawer a {
  color: white;
  font-size: 1.6em;
  letter-spacing: 0.17em;
  line-height: 260%;
  text-decoration: none;
}

.fa-instagram {
  padding-top: 12%;
  font-size: 1.8em;
}

.fa-facebook-square {
  padding-top: 12%;
  font-size: 1.8em;
}
}
</style>
