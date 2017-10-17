// dipanggil di modal pada Item Index.vue
<template>
  
  <form action="">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Tambahkan Tipe Sepatu</p>
      </header>
      <section class="modal-card-body">
        <b-field label="SKU">
          <b-input type="text" placeholder="Kode SKU" required>
          </b-input>
        </b-field>

        <b-field label="Nama Produk">
          <b-input type="text" required>
          </b-input>
        </b-field>

        <b-field label="Warna Produk">
          <b-input type="text" required>
          </b-input>
        </b-field>

        <b-field label="Ukuran Produk">
          <b-input type="text" required>
          </b-input>
        </b-field>

        <b-field label="Gender">
          <b-input type="text" required>
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

<style scoped>
.modal-card {
  width: 80ch;
}
</style>
