<template>
  <div class="sidebar">
    <div class="flex items-center justify-center py-20">
      <img class="brand" src="/logo.png" />
    </div>
    <nav class="main-menu">
      <AppMenu :menus="routes" />
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppSidebar',
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  }
}
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
