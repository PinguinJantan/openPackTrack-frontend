<template>
  <section class="section section-panel">
    <div class="navbar panel-top">
      <div class="container">
        <div class="navbar-brand">
          <div class="navbar-item">
            <p class="title">{{ this.$route.name}}</p>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <button 
              class="button is-primary" 
              @click="isComponentModalActive = true">
                <b-icon
                icon="plus"
                size="is-small"></b-icon>
                <span>
                  Tambah Produk
                </span>
              </button>
              <button class="button is-primary is-outlined">
                <b-icon
                icon="upload"
                size="is-small"></b-icon>
                <span>
                  Import Data Produk
                </span>
              </button>
              <button class="button is-primary is-outlined">
                <b-icon
                icon="download"
                size="is-small"></b-icon>
                <span>
                  Export Data
                </span> 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container app-body">
      <div class="columns">
        <div class="column is-2">
          <aside class="menu">
            <p class="menu-label">
              Menu
            </p>
            <ul class="menu-list">
              <li v-for="menu in menus" :key="menu.name">
                <router-link
                :to="{name: menu.name}" 
                :title="menu.name">
                  {{ menu.name }}
                </router-link>
              </li>
            </ul>
          </aside>
        </div>
        <div class="column layout-main-section">
          
          <list-item></list-item>

        </div>
      </div>


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
      menus: this.$store.state.menu,
      formProps: {

      }
    }
  },
  methods: {
    ngelog () {
      console.log('route name: ', this.$route.name)
    }
  },
  mounted () {
    this.ngelog ()
  }
}
</script>


<style scoped>
  .section-panel {
    min-height: 100vh;
    padding: 1px;
  }
  .panel-top {
    position: fixed;
    width: 100%;
    border-bottom: 1px solid #d1d8dd;
    background-color: #fff;
    z-index: 1;
    margin: 0;
  }
  .app-body {
    margin-top: 4rem;
  }
  .layout-main-section {
    border: 1px solid #d1d8dd;
    border-top: 0px;
  }
  .button.is-outlined {
    background-color: whitesmoke;
    border: 0;
  }
</style>
