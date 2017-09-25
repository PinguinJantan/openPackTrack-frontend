<template>
  <section class="hero is-success is-fullheight">
    <div class="columns is-mobile">
      <div class="hero-body">
        <div class="column is-half is-offset-one-quarter">
          <h1 class="title">Sign in</h1>

          <b-field label="Username" type="is-success" message="This username is available">
            <b-input value="johnsilver"></b-input>
          </b-field>

          <b-field label="Password">
            <b-input type="password" value="iwantmytreasure" password-reveal>
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
  
}
</script>

<style lang="scss">

</style>
