<script>
import { ToggleSwitch } from "primevue";

export default {
  name: "AppToggleSwitch",
  extends: ToggleSwitch,
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "",
    },
  },
  computed: {
    labelClasses() {
      return [this.size].filter(Boolean);
    },
    generatedInputId() {
      return `${this.name}${this.ariaLabel?.replace(/ /g, "")}`;
    },
    $formValue() {
      return this.$pcForm?.states?.[this.name]?.value;
    },
  },
  watch: {
    $formValue: {
      immediate: true,
      handler(newValue) {
        if (
          this.name !== undefined &&
          this.$pcForm?.states?.[this.name] &&
          newValue !== this.d_value
        ) {
          this.d_value = newValue;
        }
      },
    },
  },
  methods: {
    updateModelValue(value) {
      this.d_value = value;
      this.$emit("update:modelValue", value);
    },
  },
};
</script>

<template>
    <div class="flex items-center gap-8">
      <ToggleSwitch
        :inputId="generatedInputId"
        :modelValue="d_value"
        v-bind="$attrs"
        @update:modelValue="updateModelValue"
      />
      <label v-if="label" :class="labelClasses" :for="inputId">
        {{ label }}
      </label>
    </div>
    <!-- Error Message -->
    <Message
      v-if="$field?.invalid"
      severity="error"
      size="small"
      variant="simple"
    >
      {{ $field.error?.message }}
    </Message>
</template>
