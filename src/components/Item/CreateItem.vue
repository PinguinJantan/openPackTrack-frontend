// dipanggil di modal pada Item Index.vue
<template>
  
  <form @submit.prevent="submitItem">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Tambahkan Tipe Sepatu</p>
      </header>
      <section class="modal-card-body">
        <b-field label="SKU">
          <b-input v-model="sku" type="text" placeholder="Kode SKU" required>
          </b-input>
        </b-field>

        <b-field label="Nama Produk">
          <b-input v-model="name" type="text" required>
          </b-input>
        </b-field>

        <b-field label="Warna Produk">
          <b-input v-model="color" type="text" required>
          </b-input>
        </b-field>

        <b-field label="Ukuran Produk">
          <b-input v-model="size" type="text" required>
          </b-input>
        </b-field>

        <b-field label="Gender">
          <b-input v-model="gender" type="text" required>
          </b-input>
        </b-field>

      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">Batal</button>
        <button class="button is-primary">Simpan</button>
      </footer>
    </div>
  </form>

</template>

<script>
export default {
  data() {
    return {
      sku: '',
      name: '',
      color: '',
      size: '',
      gender: ''
    }
  },
  methods: {
    submitItem () {
      this.axios({
        method: 'POST',
        url: this.$store.getters.apiUrl + '/api/item/create',
        headers: {'Authorization': 'Bearer ' + this.$store.getters.token},
        data: {
          sku: this.sku,
          name: this.name,
          color: this.color,
          size: this.size,
          gender: this.gender
        }
      }).then(response => {
        console.log('berhasil submit item: ', response.data)
        this.$parent.close()
      }).catch(error => {
        console.log('error on create item: ', error)
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
