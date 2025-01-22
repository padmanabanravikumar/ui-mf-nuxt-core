<template>
  <li class="menu-item">
    <nuxt-link class="menu-link" :title="menuItemProps.label" active-class="menu-link-active" v-if="menuItemProps.path" :to="menuItemProps.path" :prefetch="shouldPrefetch">
      <i v-if="menuItemProps.icon" :class="menuItemProps.icon"></i>
      <span>{{ menuItemProps.label }}</span>
    </nuxt-link>
    <div v-else class="menu-dropdown">
      <div class="menu-dropdown-header" :title="menuItemProps.label" @click="() => itemClick()">
        <div class="menu-dropdown-header-left">
          <i v-if="menuItemProps.icon" :class="menuItemProps.icon"></i>
          <span class="menu.dropdown-header-text">
            {{ menuItemProps.label }}
          </span>
        </div>
        <i :class="isOpen ? 'pi pi-chevron-down' : 'pi pi-chevron-right'"></i>
      </div>
      <ul class="menu-dropdown-content-container" :class="isOpen ? 'menu-dropdown-content-container-open' : ''">
        <app-menu-item
          v-for="(submenuItem, index) in menuItemProps.submenus"
          :key="submenuItem.path + index"
          :menuItemProps="submenuItem"
        />
      </ul>
    </div>
  </li>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import type { RouteDto } from '@/shared/types';

const route = useRoute();

const props = withDefaults(defineProps<{ menuItemProps: RouteDto }>(), {
  menuItemProps: () => ({} as RouteDto)
});

const isOpen = ref(false);
const shouldPrefetch = false;

const isActivePath = () => props.menuItemProps.path ? props.menuItemProps.path === route.path : props.menuItemProps.submenus?.some((item) => item.path === route.path);

onBeforeMount(() => {
  isOpen.value = !!isActivePath();
})

watch(() => route.path, () => {
  isOpen.value = !!isActivePath();
})

function itemClick() {
    isOpen.value = !isOpen.value;
}
</script>

<style scoped>
  .menu-item {
    list-style: none;
    list-style-type: none;
  }
  .menu-item i {
    color: var(--p-primary-color);
  }
  .menu-item span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .menu-item .menu-item>.menu-link {
    padding-left: 30px;
  }
  .menu-item>.menu-link,
  .menu-item>.menu-dropdown>.menu-dropdown-header {
    cursor: pointer;
    user-select: none;
    padding: 14px 10px;
    max-width: 100%;
    text-decoration: none;
  }
  .menu-item>.menu-link {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    color: inherit;
  }
  .menu-item>.menu-link-active {
    font-weight: 600;
  }
  .menu-item>.menu-link:hover,
  .menu-item>.menu-dropdown .menu-dropdown-header:hover,
  .menu-item>.menu-link-active {
    background-color: var(--p-surface-100);
  }
  .menu-item>.menu-link:active {
    color: inherit;
    background-color: var(--p-surface-200);
  }
  .menu-item>.menu-link:visited {
    color: inherit;
  }
  .menu-item>.menu-dropdown {
    display: flex;
    flex-direction: column;
  }
  .menu-item>.menu-dropdown>.menu-dropdown-header {
    display: grid;
    grid-template-columns: 150px 20px;
    column-gap: 10px;
    align-items: center;
  }
  .menu-item >.menu-dropdown>.menu-dropdown-header>.menu-dropdown-header-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
  .menu-item>.menu-dropdown>.menu-dropdown-content-container {
    list-style-type: none;
    margin: 0;
    padding-left: 0;
    height: 0;
    overflow: hidden;
  }
  .menu-item>.menu-dropdown>.menu-dropdown-content-container-open {
    height: auto;
  }
</style>
