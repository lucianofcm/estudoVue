<template>
  <li
    class="list-group-item"
    style="cursor: pointer"
    @click="serverSelected">
    Server #{{ server.id }}
  </li>
</template>

<script>
  import { serverBus } from '../../main'

  export default {
    props: ['server'],
    methods: {
      /* Método que dispara o evento serverSelected passando para os listeners o servidor selecionados */
      serverSelected () {
        serverBus.$emit('serverSelected', this.server)
      }
    }
  }
</script>

<style>

</style>
