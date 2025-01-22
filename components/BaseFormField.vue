<script>
import BaseComponent from '@primevue/core/basecomponent';
import FormFieldStyle from './FormFieldStyle';

export default {
  name: 'BaseFormField',
  extends: BaseComponent,
  style: FormFieldStyle,
  props: {
    name: {
      type: String,
      default: undefined
    },
    resolver: {
      type: Function,
      default: undefined
    },
    initialValue: {
      type: null,
      default: undefined
    },
    validateOnValueUpdate: {
      type: Boolean,
      default: undefined
    },
    validateOnBlur: {
      type: Boolean,
      default: undefined
    },
    validateOnMount: {
      type: Boolean,
      default: undefined
    },
    validateOnSubmit: {
      type: Boolean,
      default: undefined
    },
    as: {
      type: [String, Object],
      default: 'DIV'
    },
    asChild: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: undefined
    },
    required: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: undefined
    },
    horiz: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: undefined
    }
  },
  provide() {
    return {
      $pcFormField: this,
      $parentInstance: this
    };
  }
};
</script>
