<template>
  <div class="flex items-center justify-between w-full py-16">
    <span class="p-dialog-title" data-pc-section="title">
      <slot name="header">{{ header }}</slot>
    </span>
    <Button variant="text" icon="pi pi-times" rounded severity="secondary" @click="closeModal()" />
    <ConfirmDialog v-if="confirmBeforeClose" />
  </div>
  <slot name="content" :onClose="closeModal"></slot>
</template>

<script setup lang="ts">
import type { DialogRefDto } from '~/shared/types/ModalDto';

  const props = defineProps<{
    onClose?: (dialogRef?: DialogRefDto) => void,
    header?: string,
    confirmBeforeClose?: boolean
  }>();

  const dialogRef = inject<DialogRefDto>('dialogRef');

  const closeModal = () => {
    props.onClose?.(dialogRef);
  }
</script>
