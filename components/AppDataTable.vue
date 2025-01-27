<template>
  <DataTable :value="values" :removableSort :scrollable :stripedRows :showGridlines :paginator :size :rows
    :filterDisplay :scrollHeight :globalFilterFields :resizableColumns :filters :totalRecords :dataKey :rowHover
    :loading v-on:update:filters="onFilter" v-on:sort="onSort" v-on:page="onPage" :lazy>
    <Column v-for="column of d_columns" :key="column.field" v-bind="column">
      <template v-if="$slots[column.filterSlot]" #filter="slotProps">
        <slot :name="column.filterSlot" v-bind="slotProps" />
      </template>
      <template v-else-if="column.filter" #filter="{ filterModel, filterCallback }">
        <AppInputText v-model="filterModel.value" @input="filterCallback()" size="small" placeholder="Search by name" />
      </template>
      <template v-if="$slots[column.field]" #body="slotProps">
        <slot :name="column.field" v-bind="slotProps" />
      </template>
    </Column>
  </DataTable>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { useDebounceFn } from '@vueuse/core';

export default {
  name: 'AppDataTable',
  emits: ['filters', 'sort', 'page'],
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
    },
    resizableColumns: {
      type: Boolean,
      default: true
    },
    totalRecords: {
      type: Number,
      default: 0
    },
    dataKey: {
      type: [String, Function],
      default: null
    },
    rowHover: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    d_columns() {
      return this.columns.map(column => {
        return {
          ...column,
          showFilterMenu: column.showFilterMenu || false,
          filterSlot: `${column.field}Filter`
        }
      });
    }
  },
  methods: {
    onPage(event) {
      const { page } = event;
      this.$emit('page', { ...event, page: page + 1 });
    },
    onSort(event) {
      const { sortOrder } = event;
      this.$emit('sort', {
        ...event,
        sortOrder: sortOrder === 1 ? 'asc' : sortOrder === -1 ? 'desc' : null
      });
    },
    onFilter: useDebounceFn(function (filters) {
      this.$emit('filters', filters);
    }, 500)
  },
  components: {
    DataTable,
    Column
  }
}
</script>
