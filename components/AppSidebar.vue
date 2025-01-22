<template>
  <div class="sidebar">
    <div class="flex items-center justify-center py-20">
      <img class="brand" src="/logo.png" />
    </div>
    <nav class="main-menu">
      <AppMenu :menu="routes" />
    </nav>
  </div>
</template>

<script setup lang="ts">
import type { NavbarDto } from '@/shared/types';

withDefaults(defineProps<NavbarDto>(), {
  routes: () => [] as NavbarDto['routes']
});

</script>

<style>
.brand {
  width: 144px;
}

.sidebar {
  box-shadow: -8px 0 16px rgba(0, 0, 0, 0.3);
  width: 200px;
  background-color: white;
}
</style>
