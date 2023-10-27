import * as yup from 'yup';

export const serviceManagerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  experience_years: yup.number().integer().required(),
  address: yup.string().required(),
  phone_number: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
