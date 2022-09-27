<template>
  <main>
    <component>
      .cf:before,
      .cf:after {
        content: "";
        display: table;
      }
      .cf:after{ clear: both; }
      .cf{ zoom: 1; }
    </component>
    <div class="cf">
      <div class="bg-slider">
        <p><img src="img/logo.png" class="logo" alt="HARU LIFE STYLE" /></p>
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
export default {
  name: "Material",
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
</style>
