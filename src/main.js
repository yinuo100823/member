import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import "./plugins/element.js";

Vue.use(ElementUI);
/*
* 生产环境的标志
* */

Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
