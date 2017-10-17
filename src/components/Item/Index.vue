<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-one-quarter">
          <button 
            class="button is-primary is-fullwidth is-medium" 
            @click="isComponentModalActive = true">
            Tambah Produk
          </button>
        </div>
        <div class="column is-one-quarter">
          <button class="button is-primary is-fullwidth is-medium">Import Data Produk</button>
        </div>
        <div class="column is-one-quarter">
          <button class="button is-primary is-fullwidth is-medium">Import Data Produk</button>
        </div>
      </div>

      <list-item></list-item>

      <b-modal :active.sync="isComponentModalActive" 
        has-modal-card
        :canCancel="false">
        <create-item></create-item>
      </b-modal>
    </div>
  </section>
</template>

<script>
import CreateItem from './CreateItem.vue'
import ListItem from './ListItem.vue'

export default {
  components: {
    CreateItem,
    ListItem
  },
  data () {
    return {
      isComponentModalActive: false,
      formProps: {

      }
    }
  },
  methods: {
    ngelog () {
      console.log(this.isComponentModalActive)
    }
  },
  mounted () {
    this.ngelog ()
  }
}
</script>


<style scoped>
  section {
    min-height: 100vh;
  }
</style>
