import * as yup from 'yup';
import { yupResolver } from '@primeuix/forms/resolvers/yup';

export const sampleSchema = yupResolver(yup.object().shape({
  email: yup.string().trim()
    .email('Invalid email format')
    .required('Email is required'),
  name: yup.string().trim().required('Name is required')
    .max(50, 'Only 50 chars')
    .matches(/^[a-zA-Z0-9]*$/, 'Name should not contain special characters'),
  city: yup.object()
    .shape({
      name: yup.string().required('City is required'),
      code: yup.string().required('City code is required'),
    })
    .required('City must be selected'),
  age: yup.number().required('Age is required')
    .min(18, 'You must be at least 18 years old')
    .max(100, 'You must be at most 100 years old'),
  address: yup.string().optional(),
  cities: yup
    .mixed()
    .required("Cities are required")
    .test(
      "array-min-length",
      "You must select at least 2 cities",
      (value) => {
        if (Array.isArray(value)) {
          return value.length >= 2;
        }
        return true;
      }
    ),
  dateOfService: yup.date().required('Date of service is required'),
  gender: yup.string().required('Gender is required'),
  rememberMe: yup.boolean()
}));

export const profileSchema = yupResolver(yup.object().shape({
  name: yup.string().trim().required('Name is required').max(50, 'Only 50 chars'),
  email: yup.string().trim().email('Invalid email format').required('Email is required'),
}));
