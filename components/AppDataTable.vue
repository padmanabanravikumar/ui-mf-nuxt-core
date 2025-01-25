<template>
  <DataTable :value="values" :removableSort :scrollable :stripedRows :showGridlines :paginator :size :rows
    :filterDisplay :scrollHeight :globalFilterFields :filters v-on:update:filters="onFilterChange" :lazy>
    <Column v-for="column of columns" :key="column.field" v-bind="column">
      <template v-if="column.filter" #filter="{ filterModel, filterCallback }">
        <AppInputText v-model="filterModel.value" @input="filterCallback()" size="small" placeholder="Search by name" />
      </template>
    </Column>
  </DataTable>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
  name: 'AppDataTable',
  emits: ['update:filters'],
  props: {
    values: {
      type: Array,
      default: () => []
    },
    removableSort: {
      type: Boolean,
      default: true
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    stripedRows: {
      type: Boolean,
      default: true
    },
    showGridlines: {
      type: Boolean,
      default: true
    },
    paginator: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'small'
    },
    rows: {
      type: Number,
      default: 25
    },
    filterDisplay: {
      type: String,
      default: 'row'
    },
    scrollHeight: {
      type: String,
      default: undefined
    },
    globalFilterFields: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    filters: {
      type: Object,
      default: () => ({})
    },
    lazy: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onFilterChange(filters) {
      this.$emit('update:filters', filters);
    }
  },
  components: {
    DataTable,
    Column
  }
}
</script>
