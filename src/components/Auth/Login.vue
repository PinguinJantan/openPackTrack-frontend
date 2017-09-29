<template>
  <section class="hero is-success is-fullheight">
    <div class="columns is-mobile">
      <div class="hero-body">
        <div class="column is-half is-offset-one-quarter">
          <h1 class="title">Login</h1>

          <form @submit.prevent="login">
            <b-field label="Username" type="is-success" message="This username is available">
              <b-input :value="username" v-model="username">
              </b-input>
            </b-field>
            <b-field label="Password">
              <b-input type="password" :value="password" v-model="password" password-reveal>
              </b-input>
            </b-field>
            <button class="button" type="submit">Login</button>
          </form>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      username: 'sikun',
      password: 'passwkwk'
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', { 
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>

<style lang="scss">

</style>
