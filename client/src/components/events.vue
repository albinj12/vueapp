<template>
    <v-app>
        <h1 style="margin: 0px auto">Current Events</h1>
        <div v-for="event in events" :key="event._id">
            <v-card
                class="mx-auto"
                max-width="800"
            >
                <v-card-text>
                    <v-list-item-title class="headline mb-1">{{ event.eventTitle }}</v-list-item-title>
                    <v-list-item-subtitle class="title">{{ event.eventDes }}</v-list-item-subtitle>
                    <p>{{ event.eventLoc }}</p>
                    <p>{{ event.eventDate }}</p>
                </v-card-text>
            </v-card>
        </div>
        <addevents :showcomponent=showcomponent @eventadded="newevent"></addevents>
    </v-app>
</template>

<script>
import addevents from './addevents'
import axios from 'axios';
export default {
    data() {
        return {
            events: [],
            showcomponent: false,
        }
    },
    components: {
        addevents
    },
    methods: {
        newevent() {
            //fetch events
            axios.get('http://localhost:8000/events')
            .then((response) => {
                this.events = response.data.message;
            })
            .catch(error => console.log(error))
        }
    },
    created() {
        //fetch events
        axios.get('http://localhost:8000/events')
        .then((response) => {
            this.events = response.data.message;
        })
        .catch(error => console.log(error))
    }
}
</script>