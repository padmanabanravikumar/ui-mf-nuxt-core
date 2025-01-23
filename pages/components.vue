<template>
  <div>
    <div class="flex justify-between items-center">
      <h2 class="m-0">Components Example</h2>
      <div class="flex gap-16">
        <AppIconField>
          <AppInputIcon class="pi pi-search" />
          <AppInputText placeholder="Search Services" />
        </AppIconField>
        <AppButton label="Create Service" />
      </div>
    </div>
    <AppCard class="mt-16">
      <template #title>
        <h3 class="m-0">Create Service</h3>
      </template>
      <template #content>
        <AppForm class="inline-flex flex-column gap-16 mt-16" :initialValues="initialValues" :resolver>
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
          <AppFormField name="acceptTerms" label="Accept Terms" horiz>
            <AppCheckbox name="acceptTerms" />
          </AppFormField>
          <AppFormField label="Gender" name="gender">
            <AppRadioButtonGroup name="gender" :options="radioOptions" />
          </AppFormField>
          <AppFormField name="rememberMe" label="Remember Me" horiz>
            <AppToggleSwitch name="rememberMe" />
          </AppFormField>
          <AppFormField label="Date of Service" name="dateOfService" required>
            <AppDatePicker showIcon dateFormat="mm/dd/yy" iconDisplay="input" placeholder="Date of Service" fluid />
          </AppFormField>
          <AppFormField label="Cities" name="cities" required>
            <AppMultiSelect :options="cities" optionLabel="name" optionValue="code" placeholder="Select Cities"
              :maxSelectedLabels="3" :showToggleAll="false" />
          </AppFormField>
          <AppFormField label="Upload Document(s)">
            <AppInputFile :uploadedFiles="previouslyUploadedFiles" />
          </AppFormField>
          <div class="flex gap-16">
            <AppButton type="submit" label="Submit" v-on:click="save" />
            <AppButton label="Reset" severity="secondary" />
            <AppButton label="Delete" severity="danger" />
          </div>
        </AppForm>
      </template>
    </AppCard>
    <AppCard class="mt-16">
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
    </AppCard>
  </div>
</template>

<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { sampleSchema } from '~/utils/validation';
import { useToast } from '#imports';
const toast = useToast();

const save = () => {
  toast.add({
    severity: 'success',
    summary: 'Success Message',
    detail: 'Order submitted',
    life: 3000
  });
};

const resolver = ref(sampleSchema);

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
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
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
