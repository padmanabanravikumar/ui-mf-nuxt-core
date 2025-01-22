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
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
</script>
