<template>
  <b-container>
    <b-row>
      <b-col class="p-0">
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
        <h1>Canceled Flights</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" xl="4" class="mt-2">
        <b-card header="Next flights">
          <b-card-text>
            Here you the flights that will be programmed next.
          </b-card-text>
          <b-button @click="goTo('/canceled/next')" variant="outline-primary" href="#">Check next flights</b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Canceled',
  data() {
    return {
      breadcrumbs: [
        {text: 'Home', active: false, href: '/'},
        {text: 'Canceled Flights', active: true},
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