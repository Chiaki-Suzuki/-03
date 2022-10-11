let app = new Vue({
  el: "#app",
  data: {
    cake: [],
    priceOrder: 0,
    sortOrder: 1
  },
  // JSON呼び出し
  created: async function () {
    const res = await fetch('js/cake.json');
    const items = await res.json();
    this.cake = items;
  },
  // 金額をカンマ区切りに
  filters: {
    number_format: function (val) {
      return parseInt(val).toLocaleString();
    }
  },
  computed: {
    cakeFunc: function () {
      let newCake = [];

      for (i = 0; i < this.cake.length; i++) {
        let isShow = true;
        // 5000円以下
        if (this.priceOrder == 5000 && this.cake[i].price > 5000) {
          isShow = false;
        }
        // 6000円以下
        if (this.priceOrder == 6000 && this.cake[i].price > 6000) {
          isShow = false;
        }
        // 7000円以下
        if (this.priceOrder == 7000 && this.cake[i].price > 7000) {
          isShow = false;
        }

        if (isShow) {
          newCake.push(this.cake[i]);
        }
      }

      // 金額でソート
      if (this.sortOrder == 2) {
        newCake.sort(function (a, b) {
          return a.price - b.price;
        })
      } else if (this.sortOrder == 3) {
        newCake.sort(function (a, b) {
          return b.price - a.price;
        })
      }

      return newCake;
    }
  }
})
