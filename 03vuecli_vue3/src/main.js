import { createApp } from 'vue'
import App from './App.vue'
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)

// vueインスタンス作成
let app = createApp(App)
// fontawesome
app.component('fa-icon', FontAwesomeIcon)
// マウント
app.mount('#app')
