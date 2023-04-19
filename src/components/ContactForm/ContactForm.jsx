import { Formik } from 'formik';
import React, { Component } from 'react';
import * as yup from 'yup';
import {
  FormContainer,
  FormInput,
  FormErrorMessage,
  SubmitButton,
} from './ContactForm.styled';

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
          <FormContainer>
            <label htmlFor="name">Name</label>
            <FormInput type="text" name="name" id="name" />
            <FormErrorMessage name="name" component="span" />
            <label htmlFor="number">Number</label>
            <FormInput type="tel" name="number" id="number" />
            <FormErrorMessage name="number" component="span" />
            <SubmitButton type="submit">Add contact</SubmitButton>
          </FormContainer>
        </Formik>
      </>
    );
  }
}
