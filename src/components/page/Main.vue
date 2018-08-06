<template lang="html">
  <div id="main">
    <section class="dashlists" id="invitations" v-if="compFilter == 'invitations' || compFilter == null">
      <h3 class="list-title">Invitations</h3>

      <section class="grid">
        <div class="row headers">
          <p class="company-name">Company - Name <span class="light">/ Technology</span></p>
          <p class="suppliers-count">N° of suppliers</p>
          <p class="status">Your Status</p>
        </div>

        <div class="row case" v-for="c in invitationsCases" :key="c.id">
          <p class="company-name">{{c.companyName}}<span class="break light">{{c.technology}}</span></p>
          <p class="suppliers-count">{{c.suppliersCount}}</p>
          <p class="status"><span class="light">{{c.status}}</span></p>
        </div>
      </section>
    </section>

    <section class="dashlists" id="ongoing-rfqs" v-if="compFilter == 'ongoing-rfqs' || compFilter == null">
      <h3 class="list-title">Ongoing RFQs</h3>

      <section class="grid">
        <div class="row headers">
          <p class="company-name">Company - Name <span class="light">/ Technology</span></p>
          <p class="offers-amount">Offer Amount</p>
          <p class="suppliers-count">N° of suppliers</p>
          <p class="status">Your Status</p>
        </div>

        <div class="row case" v-for="c in ongoingRFQsCases" :key="c.id">
          <p class="company-name">{{c.companyName}}<span class="break light">{{c.technology}}</span></p>
          <p class="offers-amount">{{c.offerAmount}}</p>
          <p class="suppliers-count">{{c.suppliersCount}}</p>
          <p class="status"><span class="light">{{c.status}}</span></p>
        </div>
      </section>
    </section>

    <section class="dashlists" id="offers-sent" v-if="compFilter == 'offers-sent' || compFilter == null">
      <h3 class="list-title">Offers sent</h3>

      <section class="grid">
        <div class="row headers">
          <p class="company-name">Company - Name <span class="light">/ Technology</span></p>
          <p class="offers-amount">Offer Amount</p>
          <p class="suppliers-count">N° of suppliers</p>
          <p class="status">Your Status</p>
        </div>

        <div class="row case" v-for="c in offersCases" :key="c.id">
          <p class="company-name">{{c.companyName}}<span class="break light">{{c.technology}}</span></p>
          <p class="offers-amount">{{c.offerAmount}}</p>
          <p class="suppliers-count">{{c.suppliersCount}}</p>
          <p class="status"><span class="light">{{c.status}}</span></p>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selections: ['invitations', 'ongoing-rfqs', 'offers-sent'],
      invitationsCases: [
        {
          companyName: 'Naji Buyer - DANY - CAST AND MACHINE TUBE',
          technology: 'Plastic addtive Fabrication',
          suppliersCount: 'From 5 to 10',
          status: 'Awaiting for approval'
        }
      ],
      ongoingRFQsCases: [
        {
          companyName: 'Buyer Unlimited - DUPLICATE OF MODEL RFQ SIMPLE',
          technology: 'Metal Manufacturing Technologies',
          offerAmount: '0€',
          suppliersCount: 'From 5 to 10',
          status: 'Make an offer'
        }
      ],
      offersCases: [
        {
          companyName: 'A buyer s55 rcq - TEST FORM POUR OFFRE',
          technology: 'Aluminium Heat treatment',
          offerAmount: '3 000€',
          suppliersCount: 'Less than 5',
          status: 'Waiting for verififcation'
        },
        {
          companyName: 'Hermiston - Rodriguez - EXW',
          technology: 'Metal additive fabrication',
          offerAmount: '10 000€',
          suppliersCount: 'Less than 5',
          status: 'Waiting for verififcation'
        }
      ],
      compFilter: null
    }
  },
  props: ['filter'],
  watch: {
    filter: {
      handler: function first (s) {
        this.compFilter = s.toLowerCase().split(' ').join('-')
      },
      deep: true
    }
  }
}
</script>

<style scoped>
  #main {
    color: #333;
    padding: 2rem
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
  }

  .list-title {
    margin: 0;
    margin-top: 1rem;
    text-align: left;
  }

  .row {
    display: grid;
    grid-template-columns: 40% 10% 10% 40%;
    margin-bottom: 1rem;
  }

  .company-name {
    grid-column: 1;
    padding: 0 1rem;
    text-align: left;
  }

  .offer-amount {
    grid-column: 2;
  }

  .suppliers-count {
    grid-column: 3;
  }

  .status {
    grid-column: 4;
    padding: 0 1rem;
    text-align: right
  }

  .light {
    color: #777;
  }

  .break {
    display: block
  }

  .case {
    background: white;
    box-shadow: 0px 1px 2px rgba(50, 50, 50, .25);
  }

  #invitations .case {
    border-left: solid 5px #f2c039;
  }

  #ongoing-rfqs .case {
    border-left: solid 5px #2daecc;
  }

  #offers-sent .case {
    border-left: solid 5px #0fd6a0;
  }
</style>
