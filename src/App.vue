<template>
  <div>
    <v-app>
      <transition name="router-anim">
        <router-view/>
      </transition>
    </v-app>
  </div>
</template>
<script>
import headermenu from './components/headermenu/headermenu.vue'
export default {
  components: {
    headermenu
  }
}
</script>
<style src="./main.css"></style>
