<template>
  <section class="section is-fullheight">
    <b-tabs v-model="activeTab" type="is-boxed" expanded position="is-centered">
      <form>

        <b-tab-item label="1. Pilih Profil Karton">
          <div class="columns is-mobile">
            <div class="column is-half is-offset-one-quarter">
              <h1 class="title">Karton Box</h1>
              <b-field label="Profil Karton Box">
                <b-select v-model="selectedCartonProfile" placeholder="Select a name" expanded>
                  <option
                  v-for="cartonProfile in cartonProfiles"
                  :value="cartonProfile.id"
                  :key="cartonProfile.id">
                      {{ cartonProfile.name }}
                  </option>
                </b-select>
              </b-field>
              <b-field label="Kode Karton Box">
                <b-input :value="cartonCode" v-model="cartonCode">
                </b-input>
              </b-field>
              <button @click="activeTab = 1" class="button btn-long is-medium is-primary" type="button">Lanjut</button>
            </div>
          </div>
        </b-tab-item>
        <b-tab-item label="2. Inputkan Inner Box" disabled>
          <div class="container is-fluid">
            <div class="columns">
              <div class="column is-3 side-view">
                <div class="box">
                  <section class="section">
                    <p class="is-size-7">Profil</p>
                    <p class="is-size-5 has-text-weight-bold">{{ selectedCartonProfile }} </p>
                  </section>
                  <section class="section">
                    <p class="is-size-7">Kode Box</p>
                    <p class="is-size-5 has-text-weight-bold">{{ cartonCode }}</p>
                  </section>
                  <section class="section">
                    <b-field label="Kode Produk">
                      <b-input v-model="itemAdded.type">
                      </b-input>
                    </b-field>
                    <b-field label="Kode Unik">
                      <b-input id="input-produk-code" v-model="itemAdded.code">
                      </b-input>
                    </b-field>
                    <button @click="pushItems" :disabled="isAddBtnDisabled" class="button is-primary is-fullwidth" type="button">Tambah Sepatu</button>
                  </section>
                  <section class="section has-text-centered">
                    <p class="is-size-5">Sudah Diinputkan</p>
                    <p class="is-size-1">{{ itemsAdded }}</p>
                  </section>
                </div>
              </div>
              <div class="column is-9">
                <div class="box">
                  <button @click="clearItem()" class="button is-danger is-outlined" type="button">
                    <span>Kosongkan Inputan</span>
                    <span class="icon is-small">
                      <i class="fa fa-times"></i>
                    </span>
                  </button>
                  <table-input :item="items" :is-loading="isLoading"></table-input>

                </div>
                <button class="button btn-long is-primary is-medium is-pulled-right">Simpan</button>
              </div>
            </div>
          </div>
        </b-tab-item>

      </form>
    </b-tabs>
  </section>
</template>

<script>
import TableInput from './TableInput.vue'

export default {
  components: {
    TableInput
  },
  data() {
    return {
      // dummy
      isLoading: false,
      activeTab: 0,
      cartonCode: "hesoyam",
      selectedCartonProfile: '',
      inputFocus: false,
      itemAdded: {
        type: 'initype',
        size: 39,
        code: 'inicode'
      },
      items: [
      ],
      cartonProfiles: [
        { id: 1, name: "solid - 12" },
        { id: 2, name: "solid - 6" }
      ]
    }
  },
  computed: {
    itemsAdded() {
      return this.items.length
    },
    isAddBtnDisabled() {
      if(this.items.length >= 12){
        return true
      }
    },
    moveInputFocus() {
      if(this.itemAdded.type != null && this.itemAdded.type.length >= 12){
        return !this.inputFocus
      }
    }
  },
  watch: {
    'moveInputFocus': function(e) {
      document.getElementById("input-produk-code").focus()
      console.log('focus berganti')
    }
  },
  methods: {
    pushItems () {
      if(this.itemAdded.type && this.itemAdded.code) {
        this.items.push({type: this.itemAdded.type, size: this.itemAdded.size, code: this.itemAdded.code})
      } else {
        this.$toast.open({
          message: 'Inputan kosong!',
          type: 'is-danger',
          queue: false
        })
      }
      for(var props in this.itemAdded) {
        if(this.itemAdded.hasOwnProperty(props)) {
          this.itemAdded[props] = null
        }
      }      
    },
    clearItem() {
      this.items = []
    }
  }
};
</script>

<style scoped>
.is-fullheight {
  min-height: 90vh;
  padding-top: 1rem;
}
.box {
  margin: 2rem;
  border: 1.5px solid;
  box-shadow: none;
  min-height: 50vh;
}
.side-view .box {
  border: 0;
  margin-right: 0;
  padding: 0 !important;
}
.side-view .section {
  padding: 1rem 0 !important;
  padding-top: 0 !important;
}
.btn-long {
  margin-right: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>
