<template>
  <b-container>
    <b-row>
      <b-col class="p-0">
        <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
        <h1>WOOOOO</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" xl="4" class="mt-2">
        <b-card header="You did it!">
          <b-card-text>
            Nice
          </b-card-text>
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
        {text: 'Flight Reservations', to: '/reservations'},
        {text: 'Seats', active: true},
      ]
    }
  },
}
</script>