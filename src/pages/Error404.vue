<template>
  <div class="page404">
    <div>
      <h1>404</h1>
      <div style="opacity:.4">Oops. Nothing here...</div>
      <router-link to="/" tag="button">Go Home</router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Error404'
})
</script>

<style lang="css">
.page404 {
  color: rgb(255, 255, 255);
  background-color: rgb(33, 150, 243);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 16px;
}

a {
  background-color: rgb(255, 255, 255);
  color: rgb(33, 150, 243);
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  line-height: 25px;
  width: 115px;
  height: 25px;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  font-weight: bold;
}
</style>
