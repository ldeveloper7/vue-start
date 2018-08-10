<template>
  <div>
    <v-app>
      <router-view/>
      <footermenu/>
    </v-app>
  </div>
</template>
<script>
  import headermenu from './components/headermenu/headermenu.vue'
  import footermenu from './components/Footer/Footer.vue'
  export default {
    components: {
      headermenu, footermenu
    }
  }
</script>
