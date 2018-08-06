<template lang="html">
  <div id="bar">
    <section id="menus">
      <div class="price-hub"><icon name="link" scale="2"></icon></div>

      <section id="options">
        <div v-for="opt in options" class="option" :key="opt.id"><icon :name="opt" scale="2"></icon></div>
      </section>
    </section>

    <div id="profile"><icon name="user-circle" scale="2"></icon></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: ['trophy']
    }
  }
}
</script>

<style scoped>
  #bar {
    background: white;
    box-shadow: 0px 0px 5px rgba(25, 25, 25, .5);
    color: #888;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    position: sticky;
    top: 0;
    width: 3rem;
    z-index: 10;
  }

  .price-hub {
    background: rgb(0, 202, 176);
    box-shadow: -2px 1px 3px rgba(25, 25, 25, .5);
    color: white;
    margin-bottom: 1rem;
    padding: 1rem 0;
  }
  .price-hub::after {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 20px solid rgb(0, 202, 176);
    content: "";
    left: .8rem;
    position: absolute;
    top: 4rem;
    width: 0; height: 0;
  }

  #options {
    margin-top: 2rem;
  }

  .option {
    margin-top: 1rem
  }

  #profile {
    border-top: solid 2px rgba(25, 25, 25, .1);
    padding: 1.5rem 0;
  }
</style>
