<template>
  <v-app>
    <v-app-bar
      app
      color="grey"
      dark
    >
      <div class="d-flex align-center">
        <h1><i>my</i>DAY</h1>
      </div>
      
  
    </v-app-bar>

    <div id="tabs">
       <v-tabs v-model="tab" color="grey">
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
  </v-app>
</template>

<script>

import todo from './components/todo';
import news from './components/news';
import events from './components/events';

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
      }
    },
}
</script>

<style scoped>
.v-tabs {
  margin : 70px 10px 10px;
}
</style>
