<template>
  <section class="hero is-info is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-10 has-text-centered">
            <h1 class="title">Dashboard</h1>
            <div class="columns is-multiline">
              <div v-for="dashboardMenu in dashboardMenus" class="column is-2 has-text-white has-text-centered">
                <router-link :to="{name: dashboardMenu.name}" tag="div" :style="`cursor: pointer; background-color:${dashboardMenu.color}`" class="icon box box-item" :exact="dashboardMenu.name">
                  <b-icon
                    :icon="dashboardMenu.icon"
                    size="is-large"
                    type="is-white"
                    :title="dashboardMenu.name">
                  </b-icon>
                </router-link>
                  <br>{{dashboardMenu.name}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dashboardMenus: [
        { name: 'Item', icon: 'cube', color: 'rgb(243, 156, 18)' },
        { name: 'User', icon: 'user', color: '#f0f' },
        { name: 'Input Produk', icon: 'hand-pointer-o', color: '#fac' }
      ]
    }
  },
  computed: {

  }
}
</script>


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

