<template>
  <div :class="cx('root')" v-bind="ptmi('root')">
    <slot>
      <div class="flex items-center gap-2" v-for="option in options" :key="option.value">
        <AppRadioButton inputId="option.value" :value="option.value" />
        <label :for="option.value">{{ option.label }}</label>
      </div>
    </slot>
  </div>
</template>

<script>
import RadioButtonGroup from 'primevue/radiobuttongroup';
export default {
  name: 'AppRadioButtonGroup',
  extends: RadioButtonGroup,
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    $formValue() {
      return this.$pcForm?.states?.[this.$formName]?.value;
    },
  },
  watch: {
    $formValue: {
      immediate: false,
      handler(newValue) {
        if (
          this.$formName !== undefined &&
          this.$pcForm?.states?.[this.$formName] &&
          newValue !== this.d_value
        ) {
          this.d_value = newValue;
        }
      },
    },
  }
}
</script>
