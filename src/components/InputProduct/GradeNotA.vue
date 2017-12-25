<template>
  <div class="section container">
    <div class="columns">
      <div class="column is-4">
        <form>
          <b-field label="Grade Produk">
            <b-select v-model="selectedCartonProfile" placeholder="Select a name" expanded>
              <option
              v-for="i in 11"
              :value="i"
              :key="i">
                  {{ i }}
              </option>
            </b-select>
          </b-field>
          <b-field label="Kode Produk">
            <b-input>
            </b-input>
          </b-field>
          <b-field label="Kode Unik">
            <b-input>
            </b-input>
          </b-field>
          <button class="button is-primary is-fullwidth" type="button">Tambah Sepatu</button>
        </form>
      </div>
      <div class="column is-8 has-text-centered">
        <h1 class="title">Bukan Grade A</h1>
        <p>GRADE B</p>
        <p>Lorem ipsum dolor</p>
        <b-icon
            icon="check"
            size="is-large">
        </b-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedCartonProfile: ''
    }
  }
}
</script>
