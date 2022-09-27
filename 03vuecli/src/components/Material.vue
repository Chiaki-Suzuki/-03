<template>
  <div class="cf">
    <div class="material">
      <div class="lineover">
        <img src="img/line-over.png" />
        <h2>Material</h2>
      </div>
      <figure class="good">
        <img src="img/good.png" class="goodbadimg" />
        <figcaption>
          <h3>主な食材</h3>
          <p>
            〜無添加の植物そのものを〜<br /><br />
            ・ナッツ<br />
            　未加工の生ナッツを使用。カシューナッツ、くるみ、ヘーゼルナッツ、ピーカンナッツ、アーモンド、パンプキンシードなど。ピーナッツは使用しません（ピーナッツはナッツではなくマメ科の植物です）。<br /><br />
            ・ココナッツオイル<br />
            　未精製の低温圧搾のオーガニックバージンココナッツオイルを使用。香りは軽いものを厳選しています。ココナッツオイルはアンチエイジングなどさまざまな効能が謳われています。<br /><br />
            ・メープルシロップ<br />
            　ロースイーツ界で甘味料はさまざまなものが使われていますが、当スイーツには長い歴史の中で安心のオーガニックメープルシロップを使用しています。からだに優しいデザートに仕上げるため、過剰な甘さにはしていません。<br /><br />
            ・ドライフルーツ<br />
            　デーツ（なつめやしの実）やレーズンなどの甘さを活用しています。ポリフェノールや鉄分など豊富な栄養素を含んだドライフルーツも過剰な甘さにならないよう使用しています。
          </p>
        </figcaption>
      </figure>
      <figure class="bad">
        <img src="img/bad.png" class="goodbadimg" />
        <figcaption>
          <h3>使わない食材</h3>
          <p>
            〜からだの負担が大きいもの〜<br /><br />
            ・小麦粉<br />
            　ロースイーツはグルテンフリーです。小麦粉には腸の炎症などさまざまな問題が指摘されています。日常生活ですべてを避けることは難しいですが、意識して控えるとよいかもしれません。<br /><br />
            ・乳製品<br />
            牛乳、バター、生クリームなどケーキには不可欠な素材も、ロースイーツには使いません。牛乳は近年本来の人間には合わない食材のひとつといわれています。<br /><br />
            ・たまご<br />
            たまごは一番多いアレルギーの食材と言われています。当ケーキにはたまご由来の材料も一切使用しません。<br /><br />
            ・白砂糖<br />
            多くのデザートに使用されている白砂糖は、精製されすぎておりからだに大きな負担を掛ける代表的な甘味料です。<br /><br />
            ・大豆<br />
            発酵していない大豆はからだに負担があると言われています。
          </p>
        </figcaption>
      </figure>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Material",
};
</script>

<style>
@media screen and (min-width:768px) {
.material {
  padding: 6% 7% 8% 7%;
}
.goodbadimg {
  width: 80%;
  margin:0 5% 7%;
}
.good {
  float: left;
  width: 45%;
}

.bad {
  float: right;
  width: 45%;
}
}
@media screen and (max-width:767px) {
.material {
  padding: 12% 7%;
}

.goodbadimg {
  width: 80%;
  margin:2% 5% 8%;
}

.good {
  width: 90%;
  margin: 5% auto;
}

.bad {
  width: 90%;
  margin: 5% auto;
}
}
</style>
