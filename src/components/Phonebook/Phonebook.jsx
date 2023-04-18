import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Contacts } from '../Contacts/Contacts';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

// const initialValues = {
//   name: '',
//   number: '',
// };
export const Phonebook = ({ contacts, onDeleteContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <ErrorMessage name="name" />
          <Field type="text" name="name" />
          <label htmlFor="number">Number</label>
          <ErrorMessage name="number" />
          <Field type="tel" name="number" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>

      <Contacts contacts={contacts} onDeleteContact={onDeleteContact} />
    </>
  );
};
