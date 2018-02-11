<template>
  <section>
    <b-table :data="item" striped narrowed :loading="isLoading" mobile-cards>

      <template slot-scope="props">
        <b-table-column label="Kode Produk">
          {{ props.row.type }}
        </b-table-column>

        <b-table-column label="Ukuran">
          {{ props.row.size }}
        </b-table-column>

        <b-table-column label="Kode Unik">
          {{ props.row.code }}
        </b-table-column>
      </template>

      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon icon="handshake-o" size="is-large">
              </b-icon>
            </p>
            <p>Kosong.</p>
          </div>
        </section>
      </template>
    </b-table>
  </section>
</template>

<script>
export default {
  props: ['item', 'isLoading'],
};
</script>
