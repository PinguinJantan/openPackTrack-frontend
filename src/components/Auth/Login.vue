<template>
  <section class="hero is-success is-fullheight">
    <div class="columns is-mobile">
      <div class="hero-body">
        <div class="column is-half is-offset-one-quarter">
          <h1 class="title">Login</h1>

          <b-field label="Username" type="is-success" message="This username is available">
            <b-input :value="user.username"></b-input>
          </b-field>

          <b-field label="Password">
            <b-input type="password" :value="user.password" password-reveal>
            </b-input>
          </b-field>

        </div>
        <div class="column"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: 'sikun',
        password: 'passwkwk'
      }
    }
  }
}
</script>

<style lang="scss">

</style>
