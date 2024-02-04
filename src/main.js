import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import GAuth from 'vue3-google-oauth2';
import VueGapi from '../node_modules/vue-gapi';

loadFonts();

const apiConfig = {
  apiKey: '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',
  clientId: '666323034611-cdbgaiumph23s72sa97t8ogj9l9i9ctl.apps.googleusercontent.com',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
  scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
};

const app = createApp(App);

// Google OAuth2 초기화
app.use(GAuth, {
  clientId: '666323034611-cdbgaiumph23s72sa97t8ogj9l9i9ctl.apps.googleusercontent.com',
  scope: 'profile email https://www.googleapis.com/auth/plus.login',
  prompt: 'select_account',
});

// 여기에서 다른 플러그인 등록이나 Vue 앱에 대한 설정을 진행할 수 있습니다.
app.use(router);
app.use(vuetify);
app.use(VueGapi, apiConfig);
app.mount('#app');
