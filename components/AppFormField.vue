<template>
  <component v-if="!asChild" :is="as" class="flex flex-column gap-4" :class="cx('root')" v-bind="ptmi('root')">
    <div v-if="horiz" class="flex items-center" :class="alignClass">
      <label v-if="label" :class="size" :for="inputId">{{ label }} <span v-if="required" class="required">*</span></label>
      <slot :props="field.props" v-bind="fieldAttrs"></slot>
    </div>
    <template v-else>
      <label v-if="label" :class="size">{{ label }} <span v-if="required" class="required">*</span></label>
      <slot :props="field.props" v-bind="fieldAttrs"></slot>
    </template>
    <AppMessage v-if="fieldAttrs?.invalid" severity="error" size="small" variant="simple">
      {{ fieldAttrs.error?.message }}
    </AppMessage>
  </component>
  <slot v-else :class="cx('root')" :props="field.props" v-bind="fieldAttrs"></slot>
</template>

<script>
import BaseFormField from './BaseFormField.vue';

export default {
  name: 'AppFormField',
  extends: BaseFormField,
  inheritAttrs: false,
  inject: {
    $pcForm: {
      default: undefined
    }
  },
  watch: {
    formControl: {
      immediate: true,
      handler(newValue) {
        this.$pcForm?.register?.(this.name, newValue);
      }
    }
  },
  computed: {
    formControl() {
      return {
        name: this.name,
        resolver: this.resolver,
        initialValue: this.initialValue,
        validateOnValueUpdate: this.validateOnValueUpdate,
        validateOnBlur: this.validateOnBlur,
        validateOnMount: this.validateOnMount,
        validateOnSubmit: this.validateOnSubmit
      };
    },
    field() {
      return this.$pcForm?.fields?.[this.name] || {};
    },
    fieldAttrs() {
      return {
        ...this.field.props,
        ...this.field.states,
        props: {
          inputId: this.inputId
        }
      };
    },
    alignClass() {
      return this.align && `justify-${this.align}` || "";
    },
    inputId() {
      return `${this.name}${this.label?.replace(/ /g, '')}`;
    }
  }
};
</script>
