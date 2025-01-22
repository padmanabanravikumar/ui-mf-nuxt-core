<script>
import { Checkbox } from "primevue";

export default {
  name: "AppCheckbox",
  extends: Checkbox,
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [Boolean, Array],
      default: false,
    },
    binary: {
      type: Boolean,
      default: true,
    },
    name: {
      type: String,
      required: true,
    },
    ariaLabel: {
      type: String,
      default: "",
    },
  },
  computed: {
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
    <div class="flex gap-8 items-center">
      <Checkbox
        v-bind="$attrs"
        :binary="binary"
        :inputId="generatedInputId"
        :modelValue="d_value"
        @update:modelValue="updateModelValue"
      />
      <label v-if="ariaLabel" :for="inputId">
        {{ ariaLabel }}
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
