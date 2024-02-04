<!-- App.vue -->
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
        <p>Welcome, Guest!</p>
        <button @click="login">Login with Google</button>
      </div>
    </div>
  </div>
</template>

<script>
import StockList from './components/StockList.vue';

export default {
  components: {
    StockList
  },
  data() {
    return {
      greeting: 'Welcome to My App',
      isLoggedIn: false,
      user: null,
    };
  },
  methods: {
    login() {
      this.$gAuth.signIn().then(() => {
        this.checkLoginStatus();
      }).catch((error) => {
        console.error('Error logging in:', error);
      });
    },
    logout() {
      this.$gAuth.signOut().then(() => {
        this.isLoggedIn = false;
        this.user = null;
      }).catch((error) => {
        console.error('Error logging out:', error);
      });
    },
    checkLoginStatus() {
      this.isLoggedIn = this.$gAuth.isAuthorized;
      if (this.isLoggedIn) {
        this.user = this.$gAuth.getUserInfo();
      }
    },
  },
  created() {
    this.checkLoginStatus();
  },
};
</script>

<style>
/* 필요한 스타일 추가 */
</style>
