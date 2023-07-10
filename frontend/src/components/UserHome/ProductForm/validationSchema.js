import * as yup from 'yup';

const schema = yup.object().shape({
  title: yup
    .string()
    .required(),
  description: yup
    .string()
    .required(),
  price: yup
    .number('The price is incorrect. Edit the field')
    .required('It is necessary to specify the price')
    .min(0, 'The price must be a positive number'),
  category: yup.string().required('This field is mandatory'),
  state: yup.string().required('This field is mandatory'),
});

export default schema;

