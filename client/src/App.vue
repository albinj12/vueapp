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
          <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
          

       </v-tabs>
       <v-tabs-items v-model="tab">
       <v-tab-item v-for="item in items" :key="item"> 
       {{ item }}
       </v-tab-item>
       </v-tabs-items>
    </div>
    
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
      return {
        tab: null,
        items: [
          'News', 'Events', 'To-Do'
        ],
      }
    }
}
</script>

<style scoped>
#tabs {
  margin : 70px 0px 0px 20px;
}
</style>
