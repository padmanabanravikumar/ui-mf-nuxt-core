<script>
import Button from 'primevue/button';

export default {
  name: 'AppButton',
  extends: Button,
  props: {
    rounded: {
      type: Boolean,
      default: true
    }
  }
}
</script>
