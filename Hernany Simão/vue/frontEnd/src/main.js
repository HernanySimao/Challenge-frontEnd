import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin, AlertPlugin } from 'bootstrap-vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from "vue-sweetalert2";
import Swal from "../node_modules/sweetalert2/dist/sweetalert2.js";
import "../node_modules/sweetalert2/dist/sweetalert2.min.css";

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(AlertPlugin)

Vue.use(VueSweetalert2)
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  timer: 5000,
  timerProgressBar: true,
  showConfirmButton: false
});
//salva a configuração global na palavra "Toast"
window.Toast = Toast;

Vue.config.productionTip = false
new Vue({
    router,
  render: h => h(App)
}).$mount('#app')

