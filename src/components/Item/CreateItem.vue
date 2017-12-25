// dipanggil di modal pada Item Index.vue
<template>
  
  <form @submit.prevent="submitItem">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Tambahkan Tipe Sepatu</p>
      </header>
      <section class="modal-card-body">
        <b-field label="SKU">
          <b-input v-model="item.sku" type="text" placeholder="Kode SKU" required>
          </b-input>
        </b-field>

        <b-field label="Nama Produk">
          <b-input v-model="item.name" type="text" required>
          </b-input>
        </b-field>

        <b-field label="Warna Produk">
          <b-input v-model="item.color" type="text" required>
          </b-input>
        </b-field>

        <b-field label="Ukuran Produk">
          <b-input v-model="item.size" type="text" required>
          </b-input>
        </b-field>

        <b-field label="Gender">
          <b-input v-model="item.gender" type="text" required>
          </b-input>
        </b-field>

      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">Batal</button>
        <button class="button is-primary " :class="{ 'is-loading': isLoading }">Simpan</button>
      </footer>
    </div>
  </form>

</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      item: {
        sku: '',
        name: '',
        color: '',
        size: '',
        gender: ''
      }
    }
  },
  methods: {
    submitItem () {
      this.isLoading = true
      this.axios({
        method: 'POST',
        url: this.$store.getters.apiUrl + '/api/item/create',
        headers: {'Authorization': 'Bearer ' + this.$store.getters.token},
        data: {
          sku: this.item.sku,
          name: this.item.name,
          color: this.item.color,
          size: this.item.size,
          gender: this.item.gender
        }
      }).then(response => {
        console.log('berhasil submit item: ', response.data)
        this.$parent.close()
        this.$toast.open({
          message: 'Produk berhasil ditambahkan!',
          type: 'is-success'
        })
        this.isLoading = false
      }).catch(error => {
        console.log('error on create item: ', error)
        this.isLoading = false
      })
    }
  }
}
</script>


<style scoped>
.modal-card {
  width: 80ch;
}
</style>
