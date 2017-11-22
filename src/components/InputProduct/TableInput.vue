<template>
  <section>
    <b-table :data="item" striped narrowed :loading="isLoading" mobile-cards>

      <template scope="props">
        <b-table-column label="Jenis Sepatu">
          {{ props.row.sku }}
        </b-table-column>

        <b-table-column label="Ukuran">
          {{ props.row.name }}
        </b-table-column>

        <b-table-column label="Kode Unik">
          {{ props.row.color }}
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
      // dummy
      isLoading: false,
      item: [
        { sku: 'inisku', name: 'ini nama', color: 'merah' },
        { sku: 'inisku', name: 'ini nama', color: 'merah' },
        { sku: 'inisku', name: 'ini nama', color: 'merah' },
        { sku: 'inisku', name: 'ini nama', color: 'merah' }
      ]
    }
  }
};
</script>

