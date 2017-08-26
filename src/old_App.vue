<template>
  <div class="container">
    <app-quote-grid :quotes></app-quote-grid>
  </div>
</template>

<script>
  import QuoteGrid from './components/quotes/QuoteGrid.vue';

  export default {
    data: function () {
      return {
        quotes: ['Primeira citação'],
        maxQuotes: 10
      }
    },
    components: {
      appQuoteGrid: QuoteGrid
    }
  }
</script>

<style>

</style>


<!-- <app-header></app-header>
   <hr>
   <div class="row">
     <button @click="selectedComponent='quote'">Quote</button>
     <button @click="selectedComponent='new'">New</button>
     <button @click="selectedComponent='autor'">Autor</button>
     <p>{{selectedComponent}}</p>
     &lt;!&ndash;<component :is="selectedComponent"></component>&ndash;&gt;
     <keep-alive>
       <component :is="selectedComponent"></component>
     </keep-alive>
   </div>
   <hr>
   <app-footer></app-footer>
-->
