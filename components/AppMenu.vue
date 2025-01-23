<template>
  <ul class="layout-menu">
    <template v-for="menuItemProps in menu" :key="item">
      <AppMenuItem :menuItemProps />
    </template>
  </ul>
</template>

<script setup>
withDefaults(defineProps(), {
  menu: () => []
})

</script>

<style scoped>
.layout-menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
