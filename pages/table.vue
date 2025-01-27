<template>
  <AppDataTable :values="users" :columns scrollHeight="calc(100vh - 240px)" :filters :totalRecords="1000"
    v-on:sort="onSort" v-on:filters="onFilterChange" v-on:page="onPage">
    <template #approvalOn="{ data }">
      {{ formatDate(data.approvalOn) }}
    </template>
    <template #profiles="{ data }">
      {{ aggregate(data.profiles) }}
    </template>
    <template #profilesFilter="{ filterModel }">
      <Select v-model="filterModel.value" :options="profiles" optionLabel="name" placeholder="Filter by Profile" />
    </template>
    <template #userTypes="{ data }">
      {{ aggregate(data.userTypes) }}
    </template>
    <template #createdOn="{ data }">
      {{ formatDate(data.createdOn) }} by {{ data.createdBy }}
    </template>
  </AppDataTable>
</template>

<script setup>
import users from './users.json';
import { FilterMatchMode } from '@primevue/core/api';

for (const user of users) {
  user.modified = `${formatDate(user.modifiedOn)} by ${user.modifiedBy}`;
}

const profiles = [{ name: 'Gaffer', code: 'Gaffer' }, { name: 'Admin', code: 'Admin' }, { name: 'User', code: 'User' }];

const columns = [
  { field: 'username', header: 'Username', sortable: true, filter: true },
  { field: 'firstName', header: 'First Name', sortable: true, filter: true },
  { field: 'lastName', header: 'Last Name', sortable: true, filter: true },
  { field: 'profiles', header: 'Profiles' },
  { field: 'userTypes', header: 'User Types' },
  { field: 'email', header: 'Email', sortable: true, filter: true },
  { field: 'phoneNumber', header: 'Phone Number', sortable: true, filter: true },
  { field: 'createdOn', header: 'Created', sortable: true },
  { field: 'modified', sortField: 'modifiedOn', header: 'Last Modified', sortable: true },
  { field: 'approvalBy', header: 'Approval By', sortable: true, filter: true, hidden: true },
  { field: 'approvalOn', header: 'Approval On', sortable: true },
  { field: 'approvalReferenceNo', header: 'Approval Reference No', sortable: true, filter: true, hidden: true }
];

const filters = {
  username: { value: null, matchMode: FilterMatchMode.CONTAINS },
  firstName: { value: null, matchMode: FilterMatchMode.CONTAINS },
  lastName: { value: null, matchMode: FilterMatchMode.CONTAINS },
  profiles: { value: null, matchMode: FilterMatchMode.IN },
  email: { value: null, matchMode: FilterMatchMode.CONTAINS },
  phoneNumber: { value: null, matchMode: FilterMatchMode.CONTAINS },
  approvalBy: { value: null, matchMode: FilterMatchMode.CONTAINS },
  approvalReferenceNo: { value: null, matchMode: FilterMatchMode.CONTAINS }
};

const onSort = (event) => {
  console.log(event);
};

const onFilterChange = (filters) => {
  console.log(filters);
};

const onPage = (event) => {
  console.log(event);
};

function aggregate(values) {
  return values.join(', ');
}

function formatDate(date, format = 'M/D/YYYY') {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }

  if (!(date instanceof Date)) {
    return date;
  }

  const options = {
    YYYY: date.getFullYear(),
    MM: String(date.getMonth() + 1).padStart(2, '0'),
    M: String(date.getMonth() + 1),
    DD: String(date.getDate()).padStart(2, '0'),
    D: String(date.getDate()),
    HH: String(date.getHours()).padStart(2, '0'),
    mm: String(date.getMinutes()).padStart(2, '0'),
    ss: String(date.getSeconds()).padStart(2, '0')
  };

  return format.replace(/YYYY|MM|M|DD|D|HH|mm|ss/g, (match) => options[match]);
}

// store
// {
//   filters:{},
//   users:[],
//   page:1,
//   sort:{},
//   users:{1:[],2:[],3:[]},
//   totalRecords:0
// }
</script>
