<template>
  <div>
    <b-container>
      <b-row>
        <b-col class="p-0">
          <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
          <h1>Home</h1>
        </b-col>
      </b-row>
      <!-- Card options -->
      <b-row>
        <b-col cols="12" xl="4" class="mt-2">
          <b-card header="Flight reservations">
            <b-card-text>
              Here you can make your flight reservations, check the status of your flight, and more.
            </b-card-text>
            <b-button @click="goTo('/reservations')" variant="outline-primary">Go to flight reservations</b-button>
          </b-card>
        </b-col>
        <b-col cols="12" xl="4" class="mt-2">
          <b-card header="Available flights">
            <b-card-text>
              Here you can check the available flights, and which ones are already full.
            </b-card-text>
            <b-button @click="goTo('/available')" variant="outline-primary">Go to available flights</b-button>
          </b-card>
        </b-col>
        <b-col cols="12" xl="4" class="mt-2">
          <b-card header="Canceled flights">
            <b-card-text>
              Here you can check the flights that have been canceled, and the reason for the cancellation.
            </b-card-text>
            <b-button @click="goTo('/canceled')" variant="outline-primary">Go to canceled flights</b-button>
          </b-card>
        </b-col>
        <b-col cols="12" xl="4" class="mt-2">
          <b-card header="Form">
            <b-card-text>
              Here you can go to the form page.
            </b-card-text>
            <b-button @click="goTo('/form')" variant="outline-primary">Go to form</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      breadcrumbs: [
        {text: 'Home', active: true},
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