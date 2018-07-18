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

      <v-content style="background-color: #f4f4f4;">
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs10 class="text-title">
              <h2>Get access to all things Black <i class="text-primary">in</i> Tech.</h2>
            </v-flex>
            <v-flex xs12>
              <p class="elevated text-center">Submit once and come back whenever you want.</p>
            </v-flex>
            <v-flex xs6 sm6>
              <v-text-field
                placeholder="Enter your email address"
                solo
                flat
              ></v-text-field>
            </v-flex>
            <v-flex xs6 sm6>
              <v-btn class="btngetstarted">Large Button</v-btn>
            </v-flex>
            <v-flex>
              <p class="headline">By clicking "Get Started" you agree to our Terms of Service and our Payment Policy.</p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>

      <v-content>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs12 class="text-title">
              <h2>Latest News :::::::::::::::::::::::::::::::</h2>
            </v-flex>
            <v-flex xs12>
              <v-container grid-list-xl>
                <v-layout row wrap>
                  <v-flex xs12 sm3 v-for="item in cardMenu2" :key="item.title">
                    <v-card flat class="text-sm-left">
                      <v-card-media
                        :src='item.src'
                        height="200px">
                      </v-card-media>

                      <v-card-title primary-title >
                        <div>
                          <h3 class="headline" style="font-weight: bolder">{{item.title}}</h3>
                          <br>
                          <div>{{item.content}}</div>
                        </div>
                      </v-card-title>
                    </v-card>
                  </v-flex>
                  <v-flex xs12>
                    <hr>
                  </v-flex>
                  <v-flex xs12>
                    <v-btn class="text-xs-right" flat color="blue">More Info --></v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>

      <v-content>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs12 sm6 v-for="item in placeimage" :key="item.title">
            <v-card flat class="rounded-class">
              <v-card-media
                :src='item.src'
                height="200px"
                ripple
                raised flat>
              </v-card-media>
            </v-card>
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
    ],
    cardMenu2: [
      { src: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        title: 'Dr. Mareena Robinson Snowden On Being The First Black Woman To Earn Her PhD In Nuclear Science From MIT1',
        content: 'News } Christine'
      },
      { src: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        title: 'Dr. Mareena Robinson Snowden On Being The First Black Woman To Earn Her PhD In Nuclear Science From MIT2',
        content: 'News } Christine'
      },
      { src: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        title: 'Dr. Mareena Robinson Snowden On Being The First Black Woman To Earn Her PhD In Nuclear Science From MIT3',
        content: 'News } Christine'
      },
      { src: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        title: 'Dr. Mareena Robinson Snowden On Being The First Black Woman To Earn Her PhD In Nuclear Science From MIT4',
        content: 'News } Christine'
      }
    ],
    placeimage: [
      {src: 'http://via.placeholder.com/850x440', title: '1'},
      {src: 'http://via.placeholder.com/850x440', title: '2'}
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
.text-title{
  margin: 0 auto;
}
.text-title h2{
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
@media only screen and (max-width: 600px) {
  .text-title h2{
    font-size: 36px;
    line-height: 42px;
  }
}
.text-primary{
  color: #3cccb7
}
.txtemail{
background-color: #fff;
font-size: 36px;
line-height: 40px;
padding: 28px 48px;
}

.btngetstarted .v-btn__content{
  background-color: #3cccb7;
  border: none;
  color: #fff;
  font-family: Avenir Black;
  font-style: normal;
  font-weight: 900;
  line-height: 1em;
  padding: .8em 2em;
  text-align: center;
}
.rounded-class{
  border-radius:15px;
}
</style>
