import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import GAuth from 'vue3-google-oauth2';
import axios from 'axios';
import { gapi } from '../node_modules/gapi-script';
const app = createApp(App);
loadFonts();
// axios를 전역으로 설정하여 사용합니다.
// Google OAuth2 초기화
app.use(GAuth, {
  clientId: '666323034611-cdbgaiumph23s72sa97t8ogj9l9i9ctl.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account',
});

// 여기에서 다른 플러그인 등록이나 Vue 앱에 대한 설정을 진행할 수 있습니다.


app.config.globalProperties.$axios = axios;
app.config.globalProperties.$gapi = gapi;
app.use(router);
app.use(vuetify);
app.mount('#app');
