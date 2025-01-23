<template>
  <li class="menu-item">
    <div v-if="isDropdown" class="menu-dropdown">
      <div class="menu-dropdown-header" :title="menuItem.label" @click="itemClick">
        <div class="menu-dropdown-header-left">
          <i v-if="menuItem.icon" :class="menuItem.icon"></i>
          <span class="menu.dropdown-header-text">
            {{ menuItem.label }}
          </span>
        </div>
        <i :class="dropdownIcon"></i>
      </div>
      <ul class="menu-dropdown-content-container" :class="dropdownClass">
        <AppMenuItem v-for="(submenuItem, index) in menuItem.submenus" :key="index" :menuItem="submenuItem" />
      </ul>
    </div>
    <NuxtLink class="menu-link" :title="menuItem.label" activeClass="menu-link-active" v-else :to="menuItem.path">
      <i v-if="menuItem.icon" :class="menuItem.icon"></i>
      <span>{{ menuItem.label }}</span>
    </NuxtLink>
  </li>
</template>

<script>
export default {
  name: 'AppMenuItem',
  props: {
    menuItem: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    itemClick() {
      this.isOpen = !this.isOpen
    }
  },
  computed: {
    isDropdown() {
      return this.menuItem.submenus && this.menuItem.submenus.length
    },
    dropdownClass() {
      return {
        'menu-dropdown-content-container-open': this.isOpen
      }
    },
    dropdownIcon() {
      return this.isOpen ? 'pi pi-chevron-down' : 'pi pi-chevron-right'
    },
    isActive() {
      if (this.isDropdown) {
        return this.menuItem.submenus.some(submenu => this.$route.path === submenu.path);
      }

      return this.$route.path === this.menuItem.path;
    }
  },
  watch: {
    $route() {
      this.isOpen = this.isActive;
    }
  },
  beforeMount() {
    this.isOpen = this.isActive;
  }
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

.menu-item>.menu-dropdown>.menu-dropdown-header>.menu-dropdown-header-left {
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
