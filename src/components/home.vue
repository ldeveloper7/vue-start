<template>
  <div>
    <v-app light>
      <headermenu />
      <v-content>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs12>
              <h1 class="text-sm-left">Featured Stories</h1>
            </v-flex>
            <v-flex xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-center>
                  <v-flex xs12 md4 v-for="item in cardMenu1" :key="item.title">
                    <v-card>
                      <v-card-media
                        :src='item.src'
                        height="200px">
                      </v-card-media>

                      <v-card-title primary-title>
                        <div>
                          <h3 class="headline mb-0">{{item.title}}</h3>
                          <div>{{item.content}}</div>
                        </div>
                      </v-card-title>

                      <v-card-actions>
                        <v-btn flat color="orange">Share</v-btn>
                        <v-btn flat color="orange">Explore</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>

          </v-layout>
        </v-container>
      </v-content>

      <v-content>
        <v-container fluid grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs12>
              <h2>Get access to all things Black <i class="text-primary">in</i> Tech.</h2>
              <p class="elevated text-center">Submit once and come back whenever you want.</p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import headermenu from './headermenu.vue'
export default {
  components: {
    headermenu
  },
  data: () => ({
    cardMenu1: [
      { src: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        title: 'Kangaroo Valley Safari1',
        content: 'Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...'
      },
      { src: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        title: 'Kangaroo Valley Safari2',
        content: 'Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...'
      },
      { src: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        title: 'Kangaroo Valley Safari3',
        content: 'Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...'
      }
    ]
  })
}
</script>
<style>
h1{
  font-family: Sentinel;
  font-size: 80px;
  font-style: normal;
  font-weight: 600;
  line-height: 90px;
}
h2{
  font-family: Sentinel;
  font-size: 68px;
  font-style: normal;
  font-weight: 600;
  line-height: 72px;
}
.elevated {
  margin-bottom: 58px;
  margin-left: auto;
  margin-right: auto;
}
p.elevated {
  font-family: Avenir Book;
  font-size: 36px;
  line-height: 48px;
}
.text-center {
  text-align: center!important;
}
</style>
