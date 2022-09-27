<template>
  <div class="cf">
    <div id="rawsweet" class="rawsweet">
      <div class="lineover">
        <img src="../assets/img/line-over.png" />
        <h2>Raw sweet</h2>
      </div>
      <p>
        　RAW SWEETSのRAWは生という意味。<br /><br />
        　"生"の植物には、加熱すると失われてしまう食物酵素が含まれています。現代の食生活で不足しがちな酵素はからだの代謝に不可欠な栄養素。不足すると、デトックス機能が低下してしまいます。<br />
        　非加熱の野菜や果物を意識的に摂り、植物酵素で体内酵素を補う必要があるといわれています。植物ならではの食物繊維や、ファイトケミカルなどの抗酸化物質も多く含まれているロースイーツは、安心して食べることのできる新デザートです。<br /><br />
        　無添加の素材だけで、濃厚な本格スイーツに仕上げた<br />HARU特製こだわりのロースイーツを、<br />是非お召し上がりください。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RawSweet',
};
</script>

<style>
@media screen and (min-width:768px) {
.rawsweet {
  padding: 6% 12% 8% 12%;
  background-color: #ffc6c6;
  background-image: url(../assets/img/rawsweet.png);
  background-position: right bottom;
  background-size: 30%;
  background-repeat: no-repeat;
}
}
@media screen and (max-width:767px) {
.rawsweet {
  padding: 12%;
  background-color: #ffc6c6;
  background-image: url(../assets/img/rawsweet.png);
  background-position: right bottom;
  background-size: 30%;
  background-repeat: no-repeat;
}
}
</style>
