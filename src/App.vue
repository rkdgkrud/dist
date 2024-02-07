<!-- src/App.vue -->

<template>
  <div>
    <StockList />
    <div id="app">
      <h1>{{ greeting }}</h1>
      <div v-if="isLoggedIn">
        <p>Hello, {{ user.name }}!</p>
        <button @click="logout">Logout</button>
      </div>
      <div v-else>
        <p>Welcome, Guest!</p><p>됐니?</p>
        <button @click="loginWithGoogle">Login with Google</button><br>
        <button @click="loginPage">Login</button><br>
        <button @click="Signup">Signup</button><br>
        <button @click="stocklist">stocklist</button><br>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  components: {
    
  },
  data() {
    return {
      greeting: 'Welcome to My App',
      isLoggedIn: false,
      user: null,
      host: window.location.hostname // host 정보를 데이터로 추가
    };
  },
  methods: {
    login() {
      // Google Sign-In 시작
      this.initGoogleSignIn();
    },
    loginWithGoogle() {
      // Google 로그인 버튼 클릭 시 서버의 / 엔드포인트로 GET 요청
      window.location.href = `http://${this.host}:3000`;
    },
    loginPage() {
      // Google 로그인 버튼 클릭 시 서버의 / 엔드포인트로 GET 요청
      window.location.href = `http://${this.host}:8081/LoginPage`;
    },
    Signup() {
      // Google 로그인 버튼 클릭 시 서버의 / 엔드포인트로 GET 요청
      window.location.href = `http://${this.host}:8081/SignUp`;
    },
    stocklist() {
      window.location.href = `http://${this.host}:8081/stocklist`;
    },
    checkLoginStatus() {
      // 로그인 상태 확인
      this.$axios.get(`https://${this.host}:8081/check_login_endpoint`)
        .then((response) => {
          this.isLoggedIn = response.data.isLoggedIn;
          if (this.isLoggedIn) {
            this.user = response.data.user;
          }
        })
        .catch((error) => {
          console.error('Error checking login status:', error);
        });
    },
    initGoogleSignIn() {
      // Google Sign-In 초기화 및 시작
      const googleSignInClient = this.$gapi.auth2.init({
        client_id: '666323034611-cdbgaiumph23s72sa97t8ogj9l9i9ctl.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/userinfo.profile',
        ux_mode: 'redirect',
        redirect_uri: `https://${this.host}/code_callback_endpoint`,
        state: 'YOUR_BINDING_VALUE',
      });

      // 인증 코드 가져오기
      googleSignInClient.grantOfflineAccess()
        .then((response) => {
          // 서버로 인증 코드 전송
          this.$axios.post(`https://${this.host}:8081/exchange_code_endpoint`, {
            code: response.code,
          })
            .then(() => {
              // 로그인 상태 업데이트
              this.checkLoginStatus();
            })
            .catch((error) => {
              console.error('Error exchanging code:', error);
            });
        })
        .catch((error) => {
          console.error('Error getting offline access:', error);
        });
    },
  },
  created() {
    // 초기 로그인 상태 확인
    this.checkLoginStatus();
  },
};
</script>

<style>
/* 필요한 스타일 추가 */
</style>
