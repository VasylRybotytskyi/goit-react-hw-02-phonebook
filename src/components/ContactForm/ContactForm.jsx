import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { Component } from 'react';
import * as yup from 'yup';
import { StyledForm } from './ContactForm.styled';

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
          <StyledForm>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" id="name" />
            <ErrorMessage name="name" />
            <label htmlFor="number">Number</label>
            <Field type="tel" name="number" id="number" />
            <ErrorMessage name="number" />
            <button type="submit">Add contact</button>
          </StyledForm>
        </Formik>
      </>
    );
  }
}
