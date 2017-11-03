<template>
  <section>
    <!-- <b-field grouped group-multiline>
      <div class="control">
        <b-switch v-model="isBordered">Bordered</b-switch>
      </div>
      <div class="control">
        <b-switch v-model="isNarrowed">Narrowed</b-switch>
      </div>
      <div class="control">
        <b-switch v-model="hasMobileCards">Mobile cards
          <small>(collapsed rows)</small>
        </b-switch>
      </div>
    </b-field> -->

    <b-table :data="item" striped narrowed :loading="isLoading" mobile-cards>

      <template scope="props">
        <b-table-column label="SKU">
          {{ props.row.sku }}
        </b-table-column>

        <b-table-column label="Nama">
          {{ props.row.name }}
        </b-table-column>

        <b-table-column label="Warna">
          {{ props.row.color }}
        </b-table-column>

        <b-table-column label="Ukuran">
          {{ props.row.size }}
        </b-table-column>

        <b-table-column label="Date" centered>
          {{ new Date(props.row.createdAt).toLocaleDateString() }}
        </b-table-column>

        <b-table-column label="Gender">
          {{ props.row.gender }}
        </b-table-column>
      </template>

      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon icon="handshake-o" size="is-large">
              </b-icon>
            </p>
            <p>Nothing here.</p>
          </div>
        </section>
      </template>
    </b-table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      item: []
    }
  },

  methods: {
    fetchDataItem () {
      this.axios({
        method: 'get',
        url: this.$store.getters.apiUrl + '/api/item/all',
        headers: {'Authorization': 'Bearer ' + this.$store.getters.token}
      }).then((response) => {
        console.log('lalala : ', response.data)
        if(!response.data.success){
                this.$snackbar.open({
                    message: response.data.message,
                    type: 'is-danger',
                    position: 'is-bottom-left',
                    actionText: 'Coba lagi',
                    onAction: () => {
                      this.fetchDataItem()
                      this.$toast.open('Mencoba memuat ulang')
                    }
                })
        } else {
          this.item = response.data
        }
        
        this.isLoading = false
      }).catch((err) => {
        console.log('error when get data item: ', err)
        this.isLoading = false
      })
    }
  },

  mounted () {
    this.fetchDataItem()
  }
}
</script>