<template>
  <main>
    <component is="style">
      .cf:before,
      .cf:after {
        content: "";
        display: table;
      }
      .cf:after{ clear: both; }
      .cf{ zoom: 1; }
    </component>
    <div class="cf">
      <div class="bg-slider slide-outer">
        <transition-group :name="fade">
          <div class="slider-inner"
            v-for="(slide, key, idx) in slides"
            v-if="currentSlide == idx">
            <img class="slide-img" v-bind:src="slide.img">
          </div>
        </transition-group>
        <p><img src="../assets/img/logo.png" class="logo" alt="HARU LIFE STYLE" /></p>
      </div>
    </div>
    <div class="cf">
      <div class="about">
        <h3>HARUのこだわり</h3>
        <p>
          　宮崎の工房で一台ずつ作っている、当ケーキに使用している甘味料は全て天然のものです。　<br />１カット（ホール型10分割・タルト型12分割の場合）には、１日に推薦されているナッツが含まれています。<br />　タルト部分の素材はナッツやドライフルーツ、生地部分の素材はペースト状にしたカシューナッツ・ココナッツオイル・メープルシロップ・カカオパウダー・フルーツなどです。
        </p>
      </div>
    </div>
    <RawSweet></RawSweet>
    <Material></Material>
    <Menu></Menu>
    <Guide></Guide>
    <SNS></SNS>
    <Message></Message>
    <Company></Company>
  </main>
</template>

<script>
import RawSweet from '../components/RawSweet.vue'
import Material from '../components/Material.vue'
import Menu from '../components/Menu.vue'
import Guide from '../components/Guide.vue'
import SNS from '../components/SNS.vue'
import Message from '../components/Message.vue'
import Company from '../components/Company.vue'

export default {
  name: 'Main',
  components: {
    RawSweet,
    Material,
    Menu,
    Guide,
    SNS,
    Message,
    Company
  },
  data: () => {
    return {
      currentSlide: 0,
      slides: [
        {img: './img/bg1-1.jpg', id: 0},
        {img: './img/bg1-2.jpg', id: 0},
        {img: './img/bg1-3.jpg', id: 0}
        ],
        fade: 'next',
        show: true,
        timer: 0
    }
  },
  // 10秒ごとにキービジュアルを切り替える
  mounted: function() {
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 7000)
    })
  },
  unmounted: function () {
    clearInterval(this.timer)
  },
  methods: {
    // 表示する画像を指定し、最後まで表示したら最初に戻る
    autoPlay: function() {
      this.currentSlide++;
      if (this.currentSlide === this.slides.length) {
        this. currentSlide = 0;
      }
    }
  }
};
</script>

<style>
@media screen and (min-width:768px) {
.bg-slider {
	width: 100%;
  height: 700px;
	background-position:center center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
}

.cf {
  width: 1000px;
  margin:0 auto;
}

.logo {
  text-align: center;
  max-width:260px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 10;
}

.lineover {
  text-align: center;
}

.lineover img {
  width: 250px;
}

h2 {
  font-family: 'Libre Baskerville', serif;
  font-size: 1.4em;
  letter-spacing: 0.05em;
  padding-top: 1%;
  padding-bottom: 6%;
  text-align: center;
}

.about {
  padding: 5% 13%;
}

h3 {
  font-size: 1.1em;
  padding-bottom: 0.5em;
}
}
@media screen and (max-width:767px) {
.cf {
  width: 100%;
  margin: 0 auto;
}

.bg-slider {
	width: 100%;
  height: 400px;
	background-position:center center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
}

.logo {
  padding: 24%;
  width: 50%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 10;
}

.lineover {
  text-align: center;
}

.lineover img {
  width: 200px;
}

h2 {
  font-family: 'Libre Baskerville', serif;
  font-size: 1.4em;
  letter-spacing: 0.05em;
  padding-top: 1%;
  padding-bottom: 6%;
  text-align: center;
}

.about {
  padding:10% 13%;
}

h3 {
  font-size: 1.1em;
  padding-bottom: 0.5em;
}
}
/*-------------------------
  スライダー
-------------------------*/
.slide-outer {
  position: relative;
  overflow: hidden;
  display: flex;
}

.slider-inner {
  position: absolute;
  width: 100%;
  height: auto;
}

.slide-img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.next-enter-active {
  transition: all 1s ease;
}

.next-leave-active {
  transition: all 1s ease;
  position: absolute;
}

.next-enter,
.next-leave-to {
  opacity: 0;
}
</style>
