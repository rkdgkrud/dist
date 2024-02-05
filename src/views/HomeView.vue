<template>
  <div>
    <h1>Welcome to My Homepage</h1>
    <router-link to="/login">
      <button>Login</button>
    </router-link>
    <router-link to="/signup">
      <button>Sign Up</button>
    </router-link>
    <button @click="loginWithGoogle">Login with Google</button>
  </div>
</template>

<script>
export default {
  methods: {
    loginWithGoogle() {
      // Google 로그인 처리 로직 추가
      console.log('Logging in with Google...');
    },
  },
};
</script>

<style>
/* 필요한 스타일 추가 */
</style>