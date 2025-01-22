<template>
  <ul class="layout-menu">
    <template v-for="menuItemProps in menu" :key="item">
      <app-menu-item :menuItemProps app-menu-item />
    </template>
  </ul>
</template>

<script setup lang="ts">
import type { RouteDto } from '~/shared/types';

withDefaults(defineProps<{ menu: RouteDto[] }>(), {
  menu: () => [] as RouteDto[]
})

</script>

<style scoped>
.layout-menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
