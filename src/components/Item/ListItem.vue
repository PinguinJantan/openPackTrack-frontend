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

      <template slot-scope="props">
        <b-table-column label="Kode Item">
          {{ props.row.code }}
        </b-table-column>

        <b-table-column label="Ukuran">
          {{ props.row.size }}
        </b-table-column>

        <b-table-column label="SKU">
          {{ props.row.sku.code }}
        </b-table-column>

        <b-table-column label="Nama">
          {{ props.row.sku.name }}
        </b-table-column>

        <b-table-column label="Kategori">
          {{ props.row.sku.category }}
        </b-table-column>

        <b-table-column label="Genre">
          {{ props.row.sku.gender }}
        </b-table-column>

        <b-table-column label="Warna">
          {{ props.row.sku.color }}
        </b-table-column>

        <b-table-column label="Masuk Pada" centered>
          {{ new Date(props.row.createdAt).toLocaleDateString() }}
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
    <section>
      <hr>
      <b-field grouped group-multiline>
          <b-field label="Items per page (10-50)">
              <b-input type="number" v-model="pagination.perPage"></b-input>
          </b-field>
      </b-field>
      <b-pagination
          :total="pagination.total"
          :current.sync="pagination.current"
          :order="pagination.order"
          :size="pagination.size"
          :simple="pagination.isSimple"
          :rounded="pagination.isRounded"
          @change="pageChange"
          :per-page="pagination.perPage">
      </b-pagination>
  </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      item: [],
      pagination: {
        total: 10,
        size: 'is-medium',
        order: 'is-centered',
        current: 1,
        perPage: 10,
        isRounded: false,
        isSimple: false
      }
    }
  },

  methods: {
    pageChange(page){
      this.fetchDataItem(page, this.pagination.perPage)
    },
    fetchDataItem (page=1, limit=10) {
      this.axios({
        method: 'get',
        url: this.$store.getters.apiUrl + '/api/item/all?page=' + page + '&limit=' + limit,
        headers: {'Authorization': 'Bearer ' + this.$store.getters.token}
      }).then((response) => {
        console.log('lalala : ', response.data)
        if(response.status != 200){
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
          this.item = response.data.item
          this.pagination.total = response.data.pagination.itemTotal
          this.pagination.current = response.data.pagination.currentPage

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
