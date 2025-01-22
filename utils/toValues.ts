import isObject from './isObject';

export const toValues = (value: any, name?: string) => {
  if (isObject(value) && value.hasOwnProperty(name)) {
    return value;
  }

  return name ? { [name]: value } : value;
};
