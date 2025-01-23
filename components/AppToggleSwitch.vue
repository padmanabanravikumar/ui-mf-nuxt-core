<script>
import { ToggleSwitch } from "primevue";

export default {
  name: "AppToggleSwitch",
  extends: ToggleSwitch,
  inheritAttrs: false,
  computed: {
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
};
</script>
