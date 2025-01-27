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
    <Toast />
  </div>
</template>

<script setup>
import Toast from 'primevue/toast';

const appConfig = useAppConfig();

const routes = Object.values(appConfig.routes).flat();

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
