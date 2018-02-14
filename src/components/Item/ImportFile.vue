// dipanggil di modal pada Item Index.vue
<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Import CSV</p>
    </header>
    <section class="modal-card-body">
      <b-field>
          <b-upload v-model="fileCsv"
              drag-drop>
              <section class="section">
                  <div class="content has-text-centered">
                      <p>
                          <b-icon
                              icon="upload"
                              size="is-large">
                          </b-icon>
                      </p>
                      <p>Drag n Drop file ke sini atau klik untuk import CSV</p>
                  </div>
              </section>
          </b-upload>
      </b-field>

      <div class="tags">
          <span v-for="(file, index) in fileCsv"
              :key="index"
              class="tag is-primary" >
              {{file.name}}
              <button class="delete is-small"
                  type="button"
                  @click="deleteDropFile(index)">
              </button>
          </span>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">Batal</button>
      <button class="button is-primary " :class="{ 'is-loading': isLoading }" @click="uploadFile()">Import</button>
    </footer>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                fileCsv: [],
                isLoading: false
            }
        },
        methods: {
            deleteDropFile(index) {
                this.fileCsv.splice(index, 1)
            },
            uploadFile() {
              let self = this
              this.isLoading = true

              let formData = new FormData()
              formData.append('ItemCSV', this.fileCsv)

              this.axios({
                method: 'POST',
                url: self.$store.getters.apiUrl + '/api/item/import',
                headers: {
                  'Authorization': 'Bearer ' + this.$store.getters.token,
                  'Content-Type': 'multipart/form-data'
                },
                  formData
                // data: {
                // }
              }).then(response => {
                console.log('berhasil upload csv: code ' + response.status + '', response.data)
                if(response.data.success) {
                  self.$parent.close()
                  self.$toast.open({
                    message: 'File CSV berhasil diunggah!',
                    type: 'is-success'
                  })
                } else {
                  self.$toast.open({
                    message: response.data.message,
                    type: 'is-danger'
                  })
                }
                self.isLoading = false
              }).catch(function (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                  // http.ClientRequest in node.js
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
                console.log(error.config);
                self.isLoading = false
              });
            }
        }
    }
</script>
