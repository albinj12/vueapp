<template>
    <v-app>
    <div>
        <v-btn v-for="item in category" :key="item" style="margin : 0px 0px 50px 20px" @click="fetchnews(item)"> {{ item }}</v-btn>
    </div>
    <div v-for="item in news" :key="item">
        <v-card v-if="itemCategory === newsCategory "
            class="mx-auto"
            max-width="1100"
        >
            <v-card-title>
                <p>{{ item.title }}</p>
            </v-card-title>
            <v-card-subtitle>
                <p>{{ item.source.name }}</p>
                <p>{{ item.publishedAt }}</p>
            </v-card-subtitle>
            <v-card-text>
                <p>{{ item.content }}</p>
                <a :href="item.url">Click here to see full news</a>
            </v-card-text>
        </v-card>
    </div>
    </v-app>
</template>

<script>
import axios from 'axios';
import keys from '../../config/keys' 
export default {
    data() {
        return {
            category: ['sports','technology','entertainment','business'],
            news: [],
        }
    },
    methods: {
        fetchnews(item) {
            axios.get('http://newsapi.org/v2/top-headlines?category='+item,{
                    headers: {
                        Authorization: 'Bearer ' + keys.APIKey
                        }
                })
                .then((response) => {this.news = response.data.articles})
        }
    }
}
</script>

<style scoped>
.v-btn {
    background: bottom !important;
    color: white !important;
}
</style>
