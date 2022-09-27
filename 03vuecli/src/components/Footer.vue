<template>
  <footer class="cf">
    <p>&copy; 2019 haruharu.07.11 @icloud.com</p>
    <div class="links">
      <a href="https://peraichi.com/commercial_transactions/view/amex0t1aw00" target="_blank">特定商取引法に関する表記</a>
      <a href="https://peraichi.com/privacy_policies/view/amex0t1aw00" target="_blank">プライバシーポリシー</a>
      <a href="https://peraichi.com/terms_for_customer/view/amex0t1aw00" target="_blank">決済に関する利用規約</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
@media screen and (min-width:768px) {
footer {
  text-align: center;
  padding-top: 2%;
  padding-bottom: 2%;
  background-color: #ffd797;
  font-size: 0.8em;
}

.links {
  padding-top: 1%;
}

footer a {
  color: black;
}
}
@media screen and (max-width:767px) {
footer {
  text-align: center;
  padding-top: 5%;
  padding-bottom: 5%;
  background-color: #ffd797;
  font-size: 0.6em;
  letter-spacing: 0.1em;
  line-height: 130%;
}

.links {
  padding-top: 1%;
}

footer a {
  color: black;
}
}
</style>
