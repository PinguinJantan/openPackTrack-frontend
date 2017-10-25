<template>
  <section class="hero is-success is-fullheight">
    <div class="columns is-mobile">
      <div class="hero-body">
        <div class="column is-half is-offset-one-quarter">
          <h1 class="title">Home Page</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { isLoggedIn } from '../utils/auth'

export default {
  methods: {
    isNeedToLogin () {
      if (isLoggedIn()) {
        this.$router.push('/dashboard')
      }
    }
  },
  mounted () {
    this.isNeedToLogin()
  }
}
</script>

<style lang="scss">

</style>
