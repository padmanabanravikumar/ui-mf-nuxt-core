<script>
import { InputNumber } from "primevue";

export default {
  name: "AppInputNumber",
  extends: InputNumber,
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
};
</script>
