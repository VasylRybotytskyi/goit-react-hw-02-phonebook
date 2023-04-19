import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { Component } from 'react';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  //Функція яка передає дані в App
  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    this.setState({ name: '', number: '' });
    resetForm();
  };

  render() {
    return (
      <>
        <Formik
          initialValues={this.state}
          validationSchema={schema}
          onSubmit={this.handleSubmit}
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
      </>
    );
  }
}
