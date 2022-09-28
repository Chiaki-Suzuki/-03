<template>
  <div class="cf">
    <div id="menu" class="menu">
      <div class="lineover">
        <img src="../assets/img/line-over.png" />
        <h2>Menu</h2>
      </div>
      <div class="search_box">
        <div class="dispbox">
          <p>料金で絞む：</p>
          <select id="search" v-model.number="priceOrder">
            <option value="0">すべて</option>
            <option value="5000">5000円以下</option>
            <option value="6000">6000円以下</option>
            <option value="7000">7000円以下</option>
          </select>
        </div>
        <div class="dispbox">
          <p>表示順：</p>
          <select id="search" v-model.number="sortOrder">
            <option value="1">おすすめ順</option>
            <option value="2">値段が安い順</option>
            <option value="3">値段が高い順</option>
          </select>
        </div>
      </div>
      <ul>
        <li v-for="item in cakeFunc" v-bind:key="item.id">
          <img v-bind:src="getUrl(item.image)" />
          <h4>{{ item.name }}</h4>
          <p class="cakename">
            {{ item.kana }}<br />{{ item.size }}cm/{{ item.type }}型
          </p>
          <p class="caketext">{{ item.explanation }}</p>
          <h5>{{ item.price | number_format }}円（税込）</h5>
          <form action="https://pay.peraichi.com/checkout/add" method="post">
            <input
              type="hidden"
              name="uuid"
              value="5c625ef6-2ff8-4a3f-99ed-25580a0000c5"/>
            <button
              type="submit"
              data-pera1-type="shop_payment"
              data-bgcolor=""
              data-item-id="15694">
              <h2>Buy now<fa-icon icon="shopping-cart"></fa-icon></h2>
            </button>
          </form>
        </li>
      </ul>
    </div>
  </div>
  <!-- <div>
    <div id="spmenu" class="spmenu">
      <div class="lineover">
        <img src="../assets/img/line-over.png" />
        <h2>Menu</h2>
      </div>
      <div class="search_box">
        <div class="dispbox">
          <p>料金で絞む：</p>
          <select id="search" v-model.number="priceOrder">
            <option value="0">すべて</option>
            <option value="5000">5000円以下</option>
            <option value="6000">6000円以下</option>
            <option value="7000">7000円以下</option>
          </select>
        </div>
        <div class="dispbox">
          <p>表示順：</p>
          <select id="search" v-model.number="sortOrder">
            <option value="1">おすすめ順</option>
            <option value="2">値段が安い順</option>
            <option value="3">値段が高い順</option>
          </select>
        </div>
      </div>
      <ul>
        <li v-for="item in cakeFunc" v-bind:key="item.id">
          <img v-bind:src="item.image" />
          <h4>{{ item.name }}</h4>
          <p class="cakename">
            {{ item.kana }}<br />{{ item.size }}cm/{{ item.type }}型
          </p>
          <p class="caketext">{{ item.explanation }}</p>
          <h5>{{ item.price | number_format }}円（税込）</h5>
          <form action="https://pay.peraichi.com/checkout/add" method="post">
            <input
              type="hidden"
              name="uuid"
              value="5c625ef6-2ff8-4a3f-99ed-25580a0000c5" />
            <button
              type="submit"
              data-pera1-type="shop_payment"
              data-bgcolor=""
              data-item-id="15694">
              <h2>Buy now<fa-icon icon="shopping-cart"></fa-icon></h2>
            </button>
          </form>
        </li>
      </ul>
    </div>
  </div> -->
</template>

<script>
import cake from '../assets/cake.json'
export default {
  name: 'Menu',
  data: () => {
    return {
      cake: cake,
      priceOrder: 0,
      sortOrder: 1
    }
  },
  filters: {
    number_format: function (num) {
      return parseInt(num).toLocaleString();
    }
  },
  methods: {
    getUrl: function (img) {
      return `./menu/${img}`
    }
  },
  computed: {
    cakeFunc: function() {
      // 絞り込み
      let newItem = []
      for (let i = 0; i < this.cake.length; i++) {
        let isShow = true;
        // 5000円以下
        if (this.cake[i].price > 5000 && this.priceOrder === 5000) {
          isShow = false
        }
        // 6000円以下
        else if (this.cake[i].price > 6000 && this.priceOrder === 6000) {
          isShow = false
        }
        // 7000円以下
        else if (this.cake[i].price > 7000 && this.priceOrder === 7000) {
          isShow = false
        }

        if (isShow) {
          newItem.push(this.cake[i])
        }
      }

      // ソート
      if (this.sortOrder == 2) {
        newItem.sort(function (a, b) {
          return a.price - b.price
        })
      } else if (this.sortOrder == 3) {
        newItem.sort(function (a, b) {
          return b.price - a.price
        })
      }

      return newItem
    }
  }
};
</script>

<style>
@media screen and (min-width:768px) {
.search_box {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  margin: 0 15px 0 0;
}

.search_box select {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search_box .dispbox{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.search_box .dispbox:nth-of-type(2) {
  margin-left: 20px;
}

.spmenu {
  display: none;
}

.menu {
  background-color: #ffd797;
  padding: 6% 1% 3% 1%;
}

.menu ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
}

.menu ul li {
  width: calc(100% / 3);
}

.menu ul li > img {
  width: 90%;
  display: block;
  margin: 0 auto 5px;
}

.menu ul li form {
  text-align: center;
}
h4 {
  text-align: center;
  letter-spacing: 0.09em;
}

.cakename {
  text-align: center;
  font-size: 0.8em;
  letter-spacing: 0.06em;
  line-height: 130%;
  padding-bottom: 4%;
}

.caketext {
  padding: 0 10% 2% 10%;
  text-align: left;
  white-space: pre-wrap; /*JSONの改行を認識するようにする*/
}

h5 {
  text-align: center;
  letter-spacing: 0.15em;
  padding:3% 0;
}

form {
  padding-bottom: 9%;
}

button{
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}
}
@media screen and (max-width:767px) {
.search_box {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  margin: 0 5px 0 0;
}

.search_box {
  font-size: 2.8vw;
}

.search_box select {
  float: right;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search_box .dispbox{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.search_box .dispbox:nth-of-type(2) {
  margin-left: 20px;
}

.menu {
  display: none;
}

.spmenu {
  padding-top: 12%;
  padding-bottom: 10%;
  background-color: #ffd797;
}

.spmenu ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
}

.spmenu ul li {
  width: calc(100% / 2);
}

.spmenu ul li > img {
  width: 95%;
  display: block;
  margin: 0 auto 5px;
}

.spmenu ul li form {
  text-align: center;
}

h4 {
  display: none;
}

.cakename {
  text-align: center;
  letter-spacing: 0.06em;
  line-height: 120%;
  font-size: 1em;
  padding-bottom: 3%;
  font-weight: bold;
}

.caketext {
  padding: 1% 5%;
  text-align: left;
  letter-spacing: 0.06em;
  font-size: 0.9em;
  line-height: 115%;
  white-space: pre-wrap; /*JSONの改行を認識するようにする*/
}

h5 {
  text-align: center;
  letter-spacing: 0.06em;
  line-height: 120%;
  font-size: 1em;
  padding:3% 0;
}

form {
  margin-bottom: 7%;
}
}
</style>
