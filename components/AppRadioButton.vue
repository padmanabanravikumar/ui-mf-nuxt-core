<script>
import { RadioButton } from "primevue";

export default {
  name: "AppRadioButton",
  extends: RadioButton,
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Array],
      default: null,
    },
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
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
    <div class="flex items-center gap-2">
      <RadioButtonGroup :name="name" class="flex flex-wrap gap-8" :modelValue="d_value">
        <div
          v-for="option in options"
          :key="option.value"
          class="flex items-center gap-8"
        >
          <RadioButton
            v-bind="$attrs"
            :inputId="generatedInputId"
            :value="option.value"
          />
          <label v-if="option.ariaLabel" :for="generatedInputId">
            {{ option.ariaLabel }}
          </label>
        </div>
      </RadioButtonGroup>
    </div>
    <Message
      v-if="$field?.invalid"
      severity="error"
      size="small"
      variant="simple"
    >
      {{ $field.error?.message }}
    </Message>
</template>
