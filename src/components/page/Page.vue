<template lang="html">
  <div id="page">
    <page-menu @send-filter="filter = $event"></page-menu>

    <page-main :filter="filter"></page-main>

    <page-footer></page-footer>
  </div>
</template>

<script>
import PageFooter from './Footer.vue'
import PageMain from './Main.vue'
import PageMenu from './Select.vue'

export default {
  components: {
    PageFooter,
    PageMain,
    PageMenu
  },
  data () {
    return {
      filter: null
    }
  }
}
</script>

<style scoped>
  #page {
    background: #EEEEF8;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 96vw;
  }
</style>
