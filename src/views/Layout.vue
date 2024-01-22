<template>
  <div id="app">
    <b-container fluid>
      <!-- Navbar -->
      <b-row>
        <b-col class="p-0">
          <b-navbar toggleable="lg" type="dark" variant="dark" class="px-3">
            <b-navbar-brand href="#">Logo</b-navbar-brand>
            <b-navbar-toggle target="navbar-nav"></b-navbar-toggle>

            <b-collapse id="navbar-nav" is-nav>
              <b-navbar-nav class="ml-auto">
                <b-nav-item href="#">Inicio</b-nav-item>
                <b-nav-item href="#">Acerca de</b-nav-item>
                <b-nav-item href="#">Contacto</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-col>
      </b-row>

      <!-- Sidebar -->
      <b-row>
        <b-col cols="3" class="px-0">
          <div class="sidebar">
            <b-list-group>
              <b-list-group-item href="#">Link 1</b-list-group-item>
              <b-list-group-item href="#">Link 2</b-list-group-item>
              <b-list-group-item href="#">Link 3</b-list-group-item>
              <b-list-group-item href="#">Link 4</b-list-group-item>
            </b-list-group>
          </div>
        </b-col>

        <!-- Main Content -->
        <b-col cols="9" class="p-3">
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'Layout',
  methods: {
    goTo(path) {
      this.$router.push(path)
    }
  }
}

</script>

<style>
.sidebar {
  background-color: #f5f5f5;
  height: 100vh;
  padding: 20px;
}
</style>
<script setup>
</script>