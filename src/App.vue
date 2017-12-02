<template>
  <div>
    <nav class="navbar is-light">
      <div class="container is-mobile">
        <div class="navbar-brand">
          <router-link to="/" tag="a" style="cursor: pointer" class="navbar-item">
            <img :src="logo" alt="Buefy">
          </router-link>
        </div>
        <div class="navbar-menu">
          <div v-if="this.$route.name == 'Input Produk A' || this.$route.name == 'Input Produk Bukan A'" class="navbar-start">
            <router-link
            to="/input-a"
            style="cursor: pointer;"
            class="navbar-item"
            tag="div">
              Input Grade A
            </router-link>
            <router-link
            to="/input-bukan-a"
            style="cursor: pointer;"
            class="navbar-item"
            tag="div">
              Input Selain Grade A
            </router-link>
          </div>
          <div class="navbar-end">
            <router-link
            v-if="!isLoggedIn"
            to="/login" 
            tag="div" 
            style="cursor: pointer" 
            class="navbar-item">Login
            </router-link>
            <b-dropdown v-else position="is-bottom-left">
              <a class="navbar-item" slot="trigger">
                <span>Menu </span>
                <b-icon icon="caret-down" size="is-small"></b-icon>
              </a>

              <b-dropdown-item @click="logout">
                <b-icon icon="sign-out"></b-icon>
                Logout
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </div>
    </nav>

    <section class="section">
      <router-view></router-view>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>openPackTrack</strong> dikembangkan oleh 
            <a href="https://github.com/PinguinJantan">Tim Pinguin Jantan</a>. Didukung oleh
            <a href="http://sepatu.fans.co.id/">Sepatu Fans</a>. Kode sumber berlisensi
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          </p>
          <p>
            <a class="icon" target="blank" href="https://github.com/PinguinJantan">
              <i class="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { isLoggedIn } from './utils/auth'
import { mapGetters } from 'vuex'

import logo from './assets/logo.png'

export default {
  data() {
    return { 
      logo
    }
  },
  computed: {
    ...mapGetters([
      'error'
    ]),
    isLoggedIn() {
      return this.$store.getters.token !== null && this.$store.getters.token !== undefined
    }
  },
  watch: {
    error(){
      if(this.error.isError){
        this.showErrorMessage(this.error.errorMessage)
      }
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/')
      })
    },
    showErrorMessage(message){
      this.$snackbar.open({
          duration: 50000,
          message: message,
          type: 'is-danger',
          position: 'is-bottom-left'
      })
      this.$store.commit('resetError');
    }
  },
  mounted() {
    isLoggedIn()
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  position: fixed;
  width: 100%;
  height: 2.5rem;
  z-index: 19;
}
.navbar-item.is-active {
  background-color: white;
}
.is-light {
  background-color: whitesmoke;
  color: #363636;
}
.is-light:hover {
  color: #000;
}
.section {
  padding: 3rem 0;
}
</style>
