import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n';

Vue.config.productionTip = false
Vue.use(VueI18n);
const messages = {
  en: {
    message: {
      hello: 'Hello, {name}!'
    }
  },
  de: {
    message: {
      hello: 'Guten Tag, {name}!'
    }
  }
};
const i18n = new VueI18n({
  locale: 'en',
  messages
}); 
new Vue({
  render: h => h(App),
  i18n,
}).$mount('#app')
