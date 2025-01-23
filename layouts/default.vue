<template>
  <div class="container">
    <div class="flex container">
      <AppSidebar :routes="routes" class="shrink-0" />
      <div class="content-container" ref="pageContainer" v-on:scroll="handleScroll">
        <TopNavbar :isScrolled="isScrolled" />
        <div class="main-container">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const routes = [
  {
    label: 'Home',
    icon: 'home',
    path: '/',
  },
  {
    label: 'Components',
    icon: 'cube',
    path: '/components',
  },
  {
    label: 'Administation',
    icon: 'cog',
    submenus: [
      {
        label: 'Users',
        icon: 'users',
        path: '/users/list',
      },
      {
        label: 'New User',
        icon: 'user-plus',
        path: '/users/new',
      },
    ]
  }
];

const isScrolled = ref(false);
const pageContainer = useTemplateRef('pageContainer');
const handleScroll = () => {
  isScrolled.value = pageContainer.value.scrollTop > 10;
}
</script>

<style scoped>
.content-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.main-container {
  padding: 16px;
  padding-top: 0;
}
</style>
