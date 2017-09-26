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
            <router-link to="/login" tag="span" style="cursor: pointer" class="navbar-item">Login</router-link>
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
import logo from './assets/logo.png'

export default {
  data() {
    return { logo }
  }
}
</script>

<style lang="scss">
</style>
