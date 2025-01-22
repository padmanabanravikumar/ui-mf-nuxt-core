<template>
  <div class="px-16 py-12 sticky-header" :class="{ scrolled: isScrolled }">
    <div class="flex justify-between items-center">
      <h1 class="m-0">HealPros Project Engage</h1>
      <div class="flex items-center gap-8">
        <Button variant="text" rounded severity="info" class="p-button-icon-only">
          <span class="material-symbols-sharp">notifications</span>
        </Button>
        <Button variant="text" rounded severity="info" class="p-button-icon-only">
          <span class="material-symbols-sharp">settings</span>
        </Button>
        <Button variant="text" @click="openProfile()" class="flex items-center gap-4">
          <Avatar icon="pi pi-user" class="mr-2" shape="circle" />
          <span>John Doe</span>
          <span class="material-symbols-sharp">arrow_drop_down</span>
        </Button>
        <DynamicDialog />
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import Profile from './Profile.vue';


defineProps({
  isScrolled: {
    type: Boolean,
    default: false
  }
});

  const dialog = useModal();

  const openProfile = () => {
    dialog.open(Profile, {
      props: {
        header: 'Profile'
      },
      confirmationProps: {
        header: 'Confirm',
        message: 'Are you sure you want to close profile form ?',
        accept: () => {
          // perform actions before accepting
        }
      },
      onClose: () => {
        // perform actions before close
      }
    });
  };

</script>
