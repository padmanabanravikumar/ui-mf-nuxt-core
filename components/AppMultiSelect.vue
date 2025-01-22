<template>
  <MultiSelect
    v-bind="inputProps"
    :modelValue="d_value"
    @update:modelValue="updateModelValue"
    @change="onChange"
    :filter="true"
    @filter="onFilter"
  />
</template>

<script>
import { MultiSelect } from "primevue";

export default {
  name: "AppMultiSelect",
  extends: MultiSelect,
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [Array, String, Number],
      default: () => [],
    },
    inputProps: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      d_value: this.modelValue,
    };
  },
  watch: {
    $formValue: {
      immediate: true,
      deep: true,
      handler(newValue) {
        if (
          this.name !== undefined &&
          this.$pcForm?.states?.[this.name] &&
          newValue !== this.d_value
        ) {
          this.d_value = newValue;
        }
      }
    },
    modelValue: {
      immediate: true,
      handler(newValue) {
        this.d_value = newValue;
      },
    },
    d_value: {
      handler(newValue) {
        if (newValue !== this.modelValue) {
          this.$emit("update:modelValue", newValue);
        }
      },
    },
  },
  methods: {
    updateModelValue(value) {
      this.d_value = value;
      this.$emit("update:modelValue", value);
    },
    onChange(event) {
      const value = event.value;
      this.updateModelValue(value);
      this.$emit("change", value);
    },
    onFilter(event) {
      console.log("Filter applied:", event.filter);
    },
  },
};
</script>
