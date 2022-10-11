<template>
  <div class="cf">
    <div id="message" class="message">
      <div class="lineover">
        <img src="././img/line-over.png" />
        <h2>Message</h2>
      </div>
      <div class="messagetable">
        　私がここまで、ロースイーツにこだわる理由の話を。<br /><br />
        　こどもの頃から体調が優れず、無理を重ね続け、とうとう免疫系の病気の診断が下りました。<br />
        　藁をもすがる思いで出会ったコールドプレスジュース。（生絞りジュース）溜まりに溜まった毒素がすべて排出され、生まれ変わる体感に感動しました。<br /><br />
        <p class="message1">からだは食べ物からできている</p>
        <br />
        　間違った食生活を繰り返しており、そんな食生活は私のからだに大きな負担を掛けるものでした。<br />
        　すっかり健康を取り戻した私は、暮らしに生の野菜や果物を多めに、好きな小麦粉は控えめにし、たまにはハメを外して、快適な暮らしを楽しんでいます。<br />
        　そんなことをきっかけに、今では食の提案をさせていただくようになりました。<br />
        　からだに負担が少なく、しかも必要な栄養素を含んだデザートのロースイーツ。<br />
        　どうぞあなたのからだが喜ぶローフードから生まれたロースイーツを大切な人との時間に添えていただけたらと思います。<br /><br />
        <p class="message2">ハルライフスタイル 　ハル</p>
      </div>
      <div class="lineunder">
        <img src="././img/line-under.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
};
</script>

<style>
@media screen and (min-width:768px) {
.message {
  padding: 6% 15%;
  background-color: #ffc6c6;
}

.messagetable {
  background-color: rgba(255, 255, 255, 0.5);
  padding: 13%;
  letter-spacing: 0.15em;
  line-height: 185%;
}

.message1 {
  text-align: center;
  font-size: 1.1em;
  font-weight: bold;
}

.message2 {
  text-align: right;
}

.lineunder {
  text-align: center;
  padding-top: 5%;
}

.lineunder img {
  width: 250px;
}
}
@media screen and (max-width:767px) {
.message {
  padding: 12% 15%;
  background-color: #ffc6c6;
}

.message1 {
  text-align: center;
  font-size: 1.1em;
  font-weight: bold;
}

.message2 {
  text-align: right;
}

.lineunder {
  text-align: center;
  padding-top: 5%;
}

.lineunder img {
  width: 200px;
}
}
</style>
