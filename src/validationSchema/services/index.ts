import * as yup from 'yup';

export const serviceValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  price: yup.number().integer().required(),
  mechanic_id: yup.string().nullable().required(),
  customer_id: yup.string().nullable().required(),
});
