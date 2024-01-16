<template>
  <b-container>
    <b-row>
      <b-col class="p-0">
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
        <h1>Flight Reservations</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" xl="4" class="mt-2">
        <b-card header="Reserved seats">
          <b-card-text>
            Here you can check the seats you have reserved, and the status of your flight.
          </b-card-text>
          <b-button @click="goTo('/reservations/seats')" variant="outline-primary" href="#">Check reserved seats</b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Reservations',
  data() {
    return {
      breadcrumbs: [
        {text: 'Home', active: false, href: '/'},
        {text: 'Flight Reservations', active: true},
      ]
    }
  },

  methods: {
    goTo(route) {
      this.$router.push(route);
    }
  }
}
</script>