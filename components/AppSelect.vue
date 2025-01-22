<script>
import { Select } from "primevue";

export default {
  name: "AppSelect",
  extends: Select,
  inheritAttrs: false,
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
  },
  methods: {
    onChange(event) {
      this.$emit("change", event.value);
    },
  },
};
</script>
