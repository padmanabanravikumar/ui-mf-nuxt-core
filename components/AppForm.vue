<template>
  <form @submit.prevent="onSubmit" :class="cx('root')" v-bind="ptmi('root')">
    <slot :register :valid :reset :update v-bind="states" />
  </form>
</template>

<script>
import { omit } from '@primeuix/utils';
import { useForm } from '~/composables/use-form';
import BaseForm from './BaseForm.vue';

export default {
  name: 'AppForm',
  extends: BaseForm,
  inheritAttrs: false,
  emits: ['submit'],
  setup(props, { emit }) {
    const $form = useForm(props);

    const register = (field, options) => {
      const [, fieldProps] = $form.defineField(field, options);

      return fieldProps;
    };

    const onSubmit = $form.handleSubmit((e) => {
      emit('submit', e);
    });

    return {
      register,
      onSubmit,
      ...omit($form, ['handleSubmit'])
    };
  }
};
</script>
