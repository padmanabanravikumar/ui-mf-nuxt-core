<template>
  <ModalWrapper>
    <template #content="{ onClose }">
      <AppForm class="inline-flex flex-column gap-16 mt-16 w-full" :initialValues="initialValues" :resolver @submit="onSubmit">
        <AppFormField label="Username" name="name" required>
          <AppInputText type="text" name="name" placeholder="Name" />
        </AppFormField>
        <AppFormField label="Email" name="email" required>
          <AppInputText type="email" name="email"  placeholder="Email" />
        </AppFormField>
        <Button type="submit" rounded label="Update" />
        <Button @click="onClose()" rounded label="Close" />
      </AppForm>
    </template>
  </ModalWrapper>
</template>

<script setup lang="ts">
import { profileSchema } from '~/models/validation';
import type { DialogRefDto } from '~/shared/types/ModalDto';

  const dialogRef = inject<DialogRefDto>('dialogRef');

  const initialValues = reactive({
    name: "",
    email: "",
  });

const resolver = ref(profileSchema);

const onSubmit = ({ valid }: { valid: boolean }) => {
  if (valid) {
    // do something
    dialogRef?.value?.close(); // closes the modal directly skipping the confirmation
  }
}

</script>
