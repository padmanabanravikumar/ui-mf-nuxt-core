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
        <Button rounded label="Login" @click="login" />
      </div>
    </div>
    <Card class="mt-16">
      <template #title>
        <h3 class="m-0">Create Service</h3>
      </template>
      <template #content>
        <AppForm class="inline-flex flex-column gap-16 mt-16" :initialValues="initialValues" :resolver
          @submit="onSubmit" v-slot="{ reset }">
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
          <AppFormField label="Upload Document(s)">
            <!-- <Toast /> -->
            <AppInputFile :uploadedFiles="previouslyUploadedFiles" @upload-progress="handleUploadProgress"
              @update:files="handleFilesUpdate" @file-removed="handleFileRemoval" />
          </AppFormField>
          <div class="flex gap-16">
            <Button type="submit" rounded label="Submit" />
            <Button rounded label="Reset" severity="secondary" @click="resetForm(reset)" />
            <Button rounded label="Delete" severity="danger" />
          </div>
        </AppForm>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import AppCheckbox from "~/components/AppCheckbox.vue";
import { sampleSchema } from "~/utils/validation";
// import { useToast } from "primevue/usetoast";
// const toast = useToast();

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

const login = () => {
  $post('/api/account/login', {
    body: {
      username: 'bar@foo.com',
      password: 'foobar'
    }
  });
};

const resolver = ref(sampleSchema);

const fetchServiceData = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "",
        email: "",
        age: null,
        city: null,
        address: "123 Main St",
        gender: null,
        acceptTerms: false,
        rememberMe: false,
        cities: [],
        dateOfService: null,
      });
    }, 100);
  });
};

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

const serviceData = await fetchServiceData("123");
Object.assign(initialValues, serviceData);

const previouslyUploadedFiles = reactive([
  {
    name: 'Fruit.png',
    url: "https://fastly.picsum.photos/id/674/300/300.jpg?hmac=VfiUNKIvgDHvUHdYMaz7o1kmDNEFCRNm7ng9EA_W5DE"
  },
]);

const uploadedFiles = ref([...previouslyUploadedFiles]);
const uploadProgress = ref(0);
const uploadFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    // const response = await $fetch('/api/upload', {
    //   method: 'POST',
    //   body: formData,
    //   onUploadProgress: (progressEvent) => {
    //     const percentCompleted = Math.round(
    //       (progressEvent.loaded * 100) / progressEvent.total
    //     );
    //     uploadProgress.value = percentCompleted;
    //   }
    // });

    // Show success toast
    // toast.add({
    //   severity: 'success',
    //   summary: 'Success',
    //   detail: 'File uploaded successfully',
    //   life: 3000
    // });

    // return response;
  } catch (error) {
    uploadedFiles.value = uploadedFiles.value.filter(f => f.name !== file.name);
    // Show error toast
    // toast.add({
    //   severity: 'error',
    //   summary: 'Error',
    //   detail: 'Failed to upload file',
    //   life: 3000
    // });
    // throw error;
  }
};

const handleFilesUpdate = async (files) => {
  uploadedFiles.value = files;

  for (const file of files) {
    if (!previouslyUploadedFiles.some(f => f.name === file.name)) {
      try {
        await uploadFile(file);
      } catch (error) {
        console.error('Error uploading file:', error);
        uploadedFiles.value = uploadedFiles.value.filter(f => f.name !== file.name);
      }
    }
  }
};

const handleUploadProgress = (progress) => {
  uploadProgress.value = progress;
};


const handleFileRemoval = async (file) => {
  try {
    await $fetch(`/api/upload/${encodeURIComponent(file.name)}`, {
      method: 'DELETE'
    });
    uploadedFiles.value = uploadedFiles.value.filter((f) => f.name !== file.name);
    // toast.add({
    //   severity: 'success',
    //   summary: 'Success',
    //   detail: 'File removed successfully',
    //   life: 3000
    // });
  } catch (error) {
    // toast.add({
    //   severity: 'error',
    //   summary: 'Error',
    //   detail: 'Failed to remove file',
    //   life: 3000
    // });
    console.error('Error removing file:', error);
  }
};

const onSubmit = async ({ valid }) => {
  if (valid) {
    // do something
  }
};

const resetForm = (reset) => {
  reset();
};
</script>
