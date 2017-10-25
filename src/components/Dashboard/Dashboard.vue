<template>
  <section class="hero is-info is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-10 has-text-centered">
            <h1 class="title">Dashboard</h1>
            <div class="columns is-multiline">
              <div class="column is-2 has-text-white has-text-centered">
                <router-link to="/item" tag="div" style="cursor: pointer" class="icon box box-item" title="Item">
                  <b-icon
                    icon="cube"
                    size="is-large"
                    type="is-white"
                    title="Item">
                  </b-icon>
                </router-link>
                  <br>Item
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-body {
  align-items: flex-start !important;
}
.box {
  padding: 45px;
  margin: auto;
  border-radius: 16px;
}
.box-item {
  background-color: rgb(243, 156, 18);
}
</style>

