<template>
  <v-app>
    <v-app-bar
      color="#00dbde"
      app
      flat
    >
      <div class="d-flex align-center">
        <h1 class="white--text"><i>vue</i>APP</h1>
      </div>
      
  
    </v-app-bar>

    <div id="tabs">
       <v-tabs v-model="tab" color="white" class="d-flex justify-center">
          <v-tab>NEWS</v-tab>
          <v-tab>EVENTS</v-tab>
          <v-tab>TO-DO</v-tab>
       </v-tabs>
       <v-tabs-items v-model="tab">
         <v-tab-item>
           <news></news>
         </v-tab-item>
         <v-tab-item>
           <events></events>
         </v-tab-item>
         <v-tab-item>
           <todo></todo>
         </v-tab-item>
       </v-tabs-items>
    </div>
    <h1>{{ info }}</h1>
  </v-app>
</template>

<script>

import todo from './components/todo';
import news from './components/news';
import events from './components/events';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    todo,
    news,
    events
  },
  data () {
      return {
        tab: null,
        info: null,
      }
    },
  created() {
    axios.get('http://localhost:8000')
    .then((response) => (this.info = response.data))
    .catch(error => console.log(error))
  } 
};
</script>

<style scoped>
#tabs {
  background-color: #00dbde;
}
.v-tabs {
  margin : 70px 10px 10px;
}
#app {
  background: #fc00ff;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #00dbde, #fc00ff);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient( #00dbde, #fc00ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.v-tab {
  background-color: #00dbde;
  color: white !important;
}
</style>
