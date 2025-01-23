<template>
  <div>
    <div class="flex justify-between items-center">
      <h2 class="m-0">Components Example</h2>
      <div class="flex gap-16">
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText placeholder="Search Services" />
        </IconField>
        <Button rounded label="Create Service" />
      </div>
    </div>
    <Card class="mt-16">
      <template #title>
        <h3 class="m-0">Create Service</h3>
      </template>
      <template #content>
        <AppForm class="inline-flex flex-column gap-16 mt-16" :initialValues="initialValues">
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
          <AppFormField label="Upload Document(s)">
            <AppInputFile :uploadedFiles="previouslyUploadedFiles" />
          </AppFormField>
          <div class="flex gap-16">
            <Button type="submit" rounded label="Submit" />
            <Button rounded label="Reset" severity="secondary" />
            <Button rounded label="Delete" severity="danger" />
          </div>
        </AppForm>
      </template>
    </Card>
    <Card class="mt-16">
      <template #title>
        <h3 class="m-0">Products</h3>
      </template>
      <template #content>
        <DataTable :value="products" tableStyle="min-width: 50rem">
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
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
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const products = [{
  code: '001',
  name: 'Product 1',
  category: 'Category 1',
  quantity: 10
}, {
  code: '002',
  name: 'Product 2',
  category: 'Category 2',
  quantity: 20
}, {
  code: '003',
  name: 'Product 3',
  category: 'Category 3',
  quantity: 30
}, {
  code: '004',
  name: 'Product 4',
  category: 'Category 4',
  quantity: 40
}, {
  code: '005',
  name: 'Product 5',
  category: 'Category 5',
  quantity: 50
}];

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

const previouslyUploadedFiles = reactive([{
  name: 'Fruit.png',
  url: "https://fastly.picsum.photos/id/674/300/300.jpg?hmac=VfiUNKIvgDHvUHdYMaz7o1kmDNEFCRNm7ng9EA_W5DE"
}]);

const initialValues = reactive({
  email: "",
  name: "",
  age: 0,
  city: null,
  acceptTerms: false,
  disabled: "",
  address: "",
  gender: "male",
  rememberMe: true,
  cities: [],
  dateOfService: null,
});
</script>
