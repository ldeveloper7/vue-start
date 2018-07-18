<template>
  <div>
    <v-app>
    <!--<v-content>-->
      <!--<v-container>-->
        <!--<v-layout>-->
          <!--<v-flex>-->
            <router-view/>
          <!--</v-flex>-->
        <!--</v-layout>-->
      <!--</v-container>-->
    <!--</v-content>-->
    </v-app>
  </div>
</template>

<script>
import headermenu from './components/headermenu.vue'
export default {
  components: {
    headermenu
  }
}
</script>

<style>

</style>
