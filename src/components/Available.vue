<template>
  <b-container>
    <b-row>
      <b-col class="p-0">
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
        <h1>Available Flights</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" xl="4" class="mt-2">
        <b-card header="Airlines">
          <b-card-text>
            Here you can see the airlines that are available.
          </b-card-text>
          <b-button @click="goTo('/available/airlines')" variant="outline-primary" href="#">Check airlines</b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Available',
  data() {
    return {
      breadcrumbs: [
        {text: 'Home', active: false, href: '/'},
        {text: 'Available Flights', active: true},
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

<style scoped>

</style>