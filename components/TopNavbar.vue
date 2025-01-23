<template>
  <div class="px-16 py-4 sticky-header" :class="{ scrolled: isScrolled }">
    <div class="flex justify-between items-center">
      <h1 class="m-0">HealPros Project Engage</h1>
      <div class="flex items-center gap-8">
        <Button variant="text" rounded severity="info" class="p-button-icon-only">
          <span class="material-symbols-sharp">notifications</span>
        </Button>
        <Button variant="text" rounded severity="info" class="p-button-icon-only">
          <span class="material-symbols-sharp">settings</span>
        </Button>
        <Button variant="text" rounded severity="contrast" class="flex items-center gap-4">
          <Avatar icon="pi pi-user" class="mr-2" shape="circle" />
          <span>John Doe</span>
          <span class="material-symbols-sharp">arrow_drop_down</span>
        </Button>
      </div>
    </div>
  </div>
</template>


<script setup>
defineProps({
  isScrolled: {
    type: Boolean,
    default: false
  }
});
</script>
