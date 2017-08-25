<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <servers></servers>
      <app-server-details></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <quote>
            <h2 slot="title">{{titulo}}</h2>
            <h3 slot="subtitle">{{subtitulo}}</h3>
            <p>Slot default</p>
          </quote>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Header from './components/Shared/Header.vue'
import Footer from './components/Shared/Footer.vue'
import Servers from './components/Server/Servers.vue'
import ServerDetails from './components/Server/ServerDetails.vue'
import User from './components/user/User.vue'
import Quote from './components/Quote.vue'

export default {
  data: function () {
      return {
        titulo: 'Titulo',
        subtitulo: 'SubTitulo'
      }
  },
  components: {
    appHeader: Header,
    Servers,
    User,
    'app-server-details': ServerDetails,
    'app-footer': Footer,
    Quote
  }
}
</script>

<style>

</style>
