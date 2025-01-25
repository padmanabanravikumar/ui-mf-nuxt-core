<template>
  <AppDataTable :values="users" :columns scrollHeight="calc(100vh - 240px)" v-model:filters="filters" />
</template>

<script setup>
import users from './users.json';
import { FilterMatchMode } from '@primevue/core/api';

for (const user of users) {
  user.aggregateProfiles = aggregate(user.profiles);
  user.aggregateUserTypes = aggregate(user.userTypes);
  user.created = `${formatDate(user.createdOn)} by ${user.createdBy}`;
  user.modified = `${formatDate(user.modifiedOn)} by ${user.modifiedBy}`;
  user.approvalOnDate = formatDate(user.approvalOn);
}

const columns = [
  { field: 'username', header: 'Username', sortable: true, filter: true },
  { field: 'firstName', header: 'First Name', sortable: true, filter: true },
  { field: 'lastName', header: 'Last Name', sortable: true, filter: true },
  { field: 'aggregateProfiles', header: 'Profiles' },
  { field: 'aggregateUserTypes', header: 'User Types' },
  { field: 'email', header: 'Email', sortable: true, filter: true },
  { field: 'phoneNumber', header: 'Phone Number', sortable: true, filter: true },
  { field: 'created', header: 'Created', sortable: true },
  { field: 'modified', header: 'Last Modified', sortable: true },
  { field: 'approvalBy', header: 'Approval By', sortable: true, filter: true },
  { field: 'approvalOnDate', header: 'Approval On', sortable: true },
  { field: 'approvalReferenceNo', header: 'Approval Reference No', sortable: true, filter: true },
];

const filters = ref({
  username: { value: null, matchMode: FilterMatchMode.CONTAINS },
  firstName: { value: null, matchMode: FilterMatchMode.CONTAINS },
  lastName: { value: null, matchMode: FilterMatchMode.CONTAINS },
  email: { value: null, matchMode: FilterMatchMode.CONTAINS },
  phoneNumber: { value: null, matchMode: FilterMatchMode.CONTAINS },
  approvalBy: { value: null, matchMode: FilterMatchMode.CONTAINS },
  approvalReferenceNo: { value: null, matchMode: FilterMatchMode.CONTAINS }
});

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
</script>
