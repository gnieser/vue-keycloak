<template>
  <div class="flex flex-center column">
    <h1>Other Page</h1>
    <h2>
      <span style="opacity: .4">Logged as</span> {{ username }}
    </h2>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageOther',
  data() {
    return {
      username: this.$keycloak.tokenParsed.name
    }
  },
  methods: {
    logout() {
      window.location.href = this.$keycloak.createLogoutUrl()
    }
  }
})
</script>

<style lang="css">
button {
  height: 36px;
  padding: 4px 16px;
  text-align: center;
  text-transform: uppercase;
  user-select: none;
  vertical-align: middle;
}
</style>
