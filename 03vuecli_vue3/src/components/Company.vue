<template>
  <div class="cf">
    <div id="company" class="company">
      <div class="lineover">
        <img src="././img/line-over.png" />
        <h2>Company</h2>
      </div>
      <div>
        <h3>ハル ライフ スタイル</h3>
        <span>工房住所</span>　　　〒880−2102　宮崎県宮崎市有田375−1<br />
        　　　　　　　（工房での直接販売はしておりません）<br />
        <span>お問い合わせ</span>　tel 090-1517-6606 ／ fax 0985-41-9000<br />
        　　　　　　 　mail harulifestyle@gmail.com<br />
        <span>営業時間</span>　　　10:00-17:00<br />
        <span>定休日</span>　　　　土日祝　年末年始<br /><br />
        <span>販売先</span>　　　　三越伊勢丹カタログ<br />
        　　　　　　　宮崎フーデリー霧島店<br />
      </div>
    </div>
    <div id="spcompany" class="spcompany">
      <div class="lineover">
        <img src="././img/line-over.png" />
        <h2>Company</h2>
      </div>
      <div>
        <h3>ハル ライフ スタイル</h3>
        <span>工房住所</span><br />
        　　　　〒880−2102　宮崎県宮崎市有田375−1<br />
        　　　　（工房での直接販売はしておりません）<br /><br />
        <span>お問い合わせ</span><br />
        　　　　tel 090-1517-6606 ／ fax 0985-41-9000<br />
        　　　　mail harulifestyle@gmail.com<br /><br />
        <span>営業時間</span> 　　10:00-17:00<br /><br />
        <span>定休日</span> 　　土日祝　年末年始<br /><br />
        <span>販売先</span> 　　三越伊勢丹カタログ<br />
        　　　　　 宮崎フーデリー霧島店
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Company',
};
</script>

<style>
@media screen and (min-width:768px) {
.spcompany {
  display: none;
}

.company {
  padding: 6% 16% 6% 16%;
}

.company h3 {
  padding-bottom: 3%;
}

.company span {
  font-weight: bold;
}
}
@media screen and (max-width:767px) {
.company {
  display: none;
}

.spcompany {
padding: 12% 5%;
letter-spacing: 0.07em;
line-height: 160%;
}

.spcompany h3 {
  padding-bottom: 3%;
}

.spcompany span {
  font-weight: bold;
}
}
</style>
