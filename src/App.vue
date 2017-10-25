<template>
  <div>
    <div class="container is-mobile">
      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <router-link to="/" tag="span" style="cursor: pointer" class="navbar-item">
            <img :src="logo" alt="Buefy">
          </router-link>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <router-link
              v-if="!isLoggedIn"
              to="/login" 
              tag="div" 
              style="cursor: pointer" 
              class="navbar-item">Login
            </router-link>
            <div v-if="isLoggedIn" @click="logout" class="navbar-item" style="cursor:pointer">Logout</div>
          </div>
        </div>
      </nav>
    </div>

    <router-view></router-view>

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

import logo from './assets/logo.png'

export default {
  data() {
    return { logo }
  },
  computed: {
    isLoggedIn() {
        return this.$store.getters.token !== null && this.$store.getters.token !== undefined
      }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/')
      })
    }
  },
  mounted() {
    isLoggedIn()
  }
}
</script>

<style lang="scss">
</style>
