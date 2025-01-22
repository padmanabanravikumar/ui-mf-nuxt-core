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
        <AppFormField label="Email" name="email" required>
          <AppInputText type="email" name="email" placeholder="Email" />
        </AppFormField>
        <AppFormField label="Age" name="age" required>
          <AppInputNumber name="age" placeholder="Age" />
        </AppFormField>
        <AppFormField label="Address" name="address">
          <AppTextArea name="address" placeholder="Address" disabled />
        </AppFormField>
        <AppFormField label="City" name="city" required>
          <AppSelect name="city" placeholder="City" :options="cities" optionLabel="name" />
        </AppFormField>
        <AppFormField name="acceptTerms">
          <AppCheckbox name="acceptTerms" ariaLabel="Accept Terms" />
        </AppFormField>
        <AppFormField label="Gender" name="gender" aria-label="Gender">
          <AppRadioButton name="gender" :options="radioOptions" aria-label="Gender" />
        </AppFormField>
        <AppFormField name="rememberMe">
          <AppToggleSwitch name="rememberMe" label="Remember Me" aria-label="Remember Me" />
        </AppFormField>
        <AppFormField label="Date of Service" name="dateOfService" required>
          <AppDatePicker showIcon dateFormat="mm/dd/yy" iconDisplay="input" placeholder="Date of Service" fluid />
        </AppFormField>
        <AppFormField label="Cities" name="cities" required>
          <AppMultiSelect ariaLabel="Cities" class="w-full md:w-80" name="cities" :inputProps="{
            options: cities,
            optionLabel: 'name',
            optionvalue: 'code',
            placeholder: 'Select Cities',
            showToggleAll: false,
            filter: true,
            maxSelectedLabels: 3,
          }" />
        </AppFormField>
      </template>
    </Card>
    <div hidden>
      <Checkbox />
      <RadioButton />
      <ToggleSwitch />
    </div>
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import RadioButton from 'primevue/radiobutton';
import ToggleSwitch from 'primevue/toggleswitch';

const radioOptions = [
  { value: "male", ariaLabel: "Male" },
  { value: "female", ariaLabel: "Female" },
  { value: "other", ariaLabel: "Other" },
];

const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Los Angeles", code: "LA" },
  { name: "Chicago", code: "CHI" },
  { name: "Houston", code: "HOU" },
  { name: "Phoenix", code: "PHX" },
  { name: "San Diego", code: "SD" },
  { name: "Dallas", code: "DAL" },
  { name: "San Jose", code: "SJ" },
  { name: "Austin", code: "ATX" },
  { name: "San Francisco", code: "SF" },
]);
</script>
