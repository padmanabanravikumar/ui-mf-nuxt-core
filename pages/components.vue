<template>
  <div>
    <div class="flex justify-between items-center">
      <h2 class="m-0">Services Administration</h2>
      <div class="flex gap-16">
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText placeholder="Search Services" />
        </IconField>
        <Button rounded label="Create Service" />
        <Button rounded label="Login" />
      </div>
    </div>
    <Card class="mt-16">
      <template #title>
        <h3 class="m-0">Create Service</h3>
      </template>
      <template #content>
        <AppFormField label="Name" name="name" required>
          <AppInputText type="text" name="name" placeholder="Name" />
        </AppFormField>
      </template>
    </Card>
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Card from 'primevue/card';
</script>
