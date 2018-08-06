<template lang="html">
  <div id="main">

    <div class="selects" :id="s.name.toLowerCase().split(' ').join('-')" v-for="s in select" :key="s.id" @click="setFilter(s.name)" :class="filter != s.name ? 'dis' : 'act'">
      <p class="count">{{s.count}}</p>
      <p class="name">{{s.name}}</p>
      <hr :class="filter == s.name || filter == null ? '' : 'dis'">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filter: null,
      select: [
        {
          name: 'Invitations',
          count: 0
        },
        {
          name: 'Ongoing RFQs',
          count: 0
        },
        {
          name: 'Offers sent',
          count: 0
        }
      ]
    }
  },
  methods: {
    setFilter (filter) {
      this.filter = filter
      this.emitFilter()
    },
    emitFilter () {
      this.$emit('send-filter', this.filter)
    }
  }
}
</script>

<style scoped>
  #main {
    background: #DDDDE4;
    box-shadow: 0px 0px 5px rgba(25, 25, 25, .5);
    display: flex;
    justify-content: flex-end;
    padding-bottom: 1rem;
  }

  .selects {
    background: #FFF;
    border: solid 2px transparent;
    border-radius: 5px;
    color: #333;
    margin: 1rem;
    padding: 0.5rem 4rem;
  }

  .count, .name, hr {
    margin: .5rem 0;
  }

  .count {
    font-size: 1.25rem;
    font-weight: bolder;
  }

  hr {
    border: solid 2px #888;
  }

  #invitations hr:not(.dis) {
    border: solid 2px #f2c039;
  }

  #ongoing-rfqs hr:not(.dis) {
    border: solid 2px #2daecc;
  }

  #offers-sent hr:not(.dis) {
    border: solid 2px #0fd6a0;
  }

  .dis {
    color: #AAA;
  }

  #invitations.act {
    border: solid 2px #f2c039;
  }

  #ongoing-rfqs.act {
    border: solid 2px #2daecc;
  }

  #offers-sent.act {
    border: solid 2px #0fd6a0;
  }
</style>
