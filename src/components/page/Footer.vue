<template lang="html">
  <div id="page-footer">
    <section id="legal" class="footer-placeholders">
      <p id="copyright" class="footer-text"><strong class="footer-strong">&copy; 2018 Inter Action Digital.<br>All rights reserved.</strong></p>
      <p id="legal-links" class="footer-text">Legal notices<br>General terms and conditions of sales</p>
    </section>

    <icon id="price-logo" name="link" scale="2"></icon>

    <section id="contacts" class="footer-placeholders">
      <p id="contacts-no" class="footer-text"><icon name="phone" scale="1"></icon>contact@thepricehub.com <br><icon name="envelope" scale="1"></icon>+33 (0)1 73 01 53 20 </p>
      <p id="contacts-loc" class="footer-text"><icon name="map-marker-alt" scale="1"></icon>Station F <br><strong class="footer-strong">75013 Paris France</strong></p>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  #page-footer {
    color: #AAA;
    display: flex;
    flex-direction: row;
    font-size: .8rem;
    justify-content: space-between;
    margin-top: 1rem;
    text-align: left;
  }

  .footer-placeholders {
    display: flex;
/*    flex-direction: column;*/
  }

  #price-logo, .footer-text {
    margin: 1rem;
  }

  .fa-icon {
    margin-right: 4px;
  }

  .footer-strong {
    color: #999;
  }

  #logo {
    margin: 0 5rem;
  }
</style>
