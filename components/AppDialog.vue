<template>
  <Dialog v-bind:visible="visible" :modal :closeOnEscape :draggable :closable :header :style
    v-on:update:visible="updateVisible">
    <slot />
  </Dialog>
</template>
<script>
import Dialog from 'primevue/dialog';
export default {
  name: 'AppDialog',
  components: {
    Dialog
  },
  emits: ['close'],
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    modal: {
      type: Boolean,
      default: true
    },
    closeOnEscape: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: true
    },
    header: {
      type: String,
      default: ''
    },
    style: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    updateVisible(value) {
      if (!value) {
        this.$emit('close');
      }
    }
  },
  components: {
    Dialog
  }
};
</script>
