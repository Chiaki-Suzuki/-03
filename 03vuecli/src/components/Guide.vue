<template>
  <div class="cf">
    <div id="guide" class="guide">
      <div class="lineover">
        <img src="../assets/img/line-over.png" />
        <h2>Guide</h2>
      </div>
      <div class="guideue">
        <div class="reserve">
          <h3>予約について</h3>
          <p>
            　ご注文をいただいてからお作りしておりますので、発送の準備まで最短３日程度のお時間をいただいております。<br />
            　時期によって混み合う場合がありますので、ご予約はお早めにお願いいたします。<br />
            （お届け日についてはご注文をいただいてからのお知らせになります）
          </p>
        </div>
        <div class="send">
          <h3>発送方法について</h3>
          <p>
            　生の材料が使用しておりますので、品質と栄養素を保つ為に冷凍便でお届けしております。<br />
            　税込３０００円以上のご注文で送料（クール便料金含める）一律１０００円でございます。<br />
            　地方発送もいたします。離島など一部地域は、別途追加料金が発生致します。<br />
            ※商品の特性上、返品は致しかねます。
          </p>
        </div>
      </div>
      <div class="clear"></div>
      <div class="preserve">
        <h3>保存からお召し上がりについて</h3>
        <p>
          　冷凍のまま約３０日間の保存が可能です（冷蔵庫ですと約３日間の保存です）。<br />
          　保存の際は、タッパーやラップで密封することをオススメいたしております。<br />
          　冷凍保存ができますので、大切な方の大切な日に合わせて、お好きなタイミングでお召し上がりいただけます。<br />
          　冷蔵庫から出して数分室温で解凍していただき、半解凍のお召し上がりが一番のオススメでございます。<br />
          　滑らかなケーキがお好みの方は、１０度以下の冷蔵庫で１日以上かけてゆっくり解凍してお召し上がりください。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Guide",
};
</script>

<style>
@media screen and (min-width:768px) {
.guide {
  padding: 6% 15%;
  background-image: url(../../assets/img/bg2.png);
  background-position: center;
  background-size: cover;
}

.reserve {
  float: left;
  width: 47%;
}

.send {
  float: right;
  width: 47%;
}

.clear {
  clear: both;
}

.preserve {
  margin-top: 6%;
}
}
@media screen and (max-width:767px) {
.guide {
  padding: 12% 15%;
  background-position: center;
  background-size: cover;
}

.reserve {
  width: 100%;
  margin: 5% auto;
}

.send {
  width: 100%;
  margin: 5% auto;
}

.preserve {
  margin-top: 6%;
}
}
</style>
