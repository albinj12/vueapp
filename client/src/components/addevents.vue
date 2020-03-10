<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Add New Event</v-btn>
      </template>
      <v-app>
        <h1 class="text-center">Add Event Details</h1>

        <!-- snackbar -->
        <div class="text-center">
            <v-snackbar
            v-model="snackbar.value"
            :timeout="snackbar.timeout"
            :color="snackbar.color"
            :top = true
            >
            {{ snackbar.text }}
            </v-snackbar>
        </div>

        <!-- Event form -->
        <v-form ref="form">
        <v-container>
            
            <!-- Event Title -->
            <v-col style="margin: 0px auto;">
                <v-text-field 
                    v-model="eventTitle" 
                    label="Event Title" 
                    required
                ></v-text-field>
            </v-col>
            
            <!-- Event Description -->
            <v-col style="margin: 0px auto;">
                <v-textarea
                    v-model="eventDes"
                    solo
                    label="Event Description"
                    auto-grow
                    row-height="25"
                    required
                ></v-textarea>
            </v-col>

            <!-- Event Location -->
            <v-col style="margin: 0px auto;">
                <v-text-field
                    v-model="eventLoc"
                    placeholder="Location"
                    prepend-icon="place"
                    required
                ></v-text-field>
            </v-col>

            <!-- Date Picker -->
            <v-col style="margin: 0px auto;">
                <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                >
                    <template v-slot:activator="{ on }">
                    <v-text-field
                        v-model="eventdate"
                        label="Picker without buttons"
                        prepend-icon="event"
                        readonly
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker v-model="eventdate" @input="menu = false"></v-date-picker>
                </v-menu>
            </v-col>
        </v-container>
        <v-col>
            <v-btn style="margin-left: 150px" color="green" @click="addEvent()">Add Event</v-btn>
            <v-btn style="margin-left: 50px" color="red" @click="cancelEvent()">Cacel</v-btn>
        </v-col>
    </v-form>
    </v-app>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
        return {
            dialog: false,
            eventTitle: '',
            eventDes: '',
            eventLoc: '',
            eventdate: new Date().toISOString().substr(0, 10),
            menu: false,
            snackbar: {
                value: false,
                text: '',
                timeout: 2000,
                color: ""
            }
        }
    },
    methods: {
        addEvent() {
            axios.post('http://localhost:8000/events/addevent',{
                title: this.eventTitle,
                des: this.eventDes,
                date: this.eventdate,
                loc: this.eventLoc
            })
            .then((response) => {
                if(response.data.message === 'Event added'){
                    this.snackbar.color = 'green'
                    this.dialog = false;
                    this.$emit('eventadded');
                }else{
                    this.snackbar.color = 'red'
                }
                this.snackbar.text = response.data.message;
                this.snackbar.value = true;})
                this.eventTitle= "";
                this.eventDes= "";
                this.eventLoc= "";
        },
        cancelEvent() {
            this.dialog = false;
        }
    }
  }
</script>