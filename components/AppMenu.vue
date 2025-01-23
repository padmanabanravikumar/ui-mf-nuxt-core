<template>
  <ul class="layout-menu">
    <template v-for="(item, index) in menus" :key="index">
      <AppMenuItem :menuItem="item" />
    </template>
  </ul>
</template>

<script>
export default {
  name: 'AppMenu',
  props: {
    menus: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.layout-menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
