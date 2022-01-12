<template>
  <header>
    <div class="title">Other Layout</div>
  </header>
  <div class="page-container">
    <div>
      <router-link to="/" tag="button">Index</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OtherLayout',

})
</script>

<style lang="css">
header {
  background-color: rgb(25, 118, 210);
  color: rgb(255, 255, 255);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 12px;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

header .title {
  font-size: 21px;
}

.page-container {
  padding-top: 50px;
}
</style>
