import { createApp } from 'vue'
import App from './App.vue'
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)
Vue.component('fa-icon', FontAwesomeIcon)

createApp(App).mount('#app')
