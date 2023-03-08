import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import React from 'react';

import TextInput from '../TextInput';
import TextArea from '../TextArea';
import Button from '../Button';
import styles from './MessageForm.module.scss';

const cn = classNames.bind(styles);

export default function MessageForm({ text }) {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const { name, email, message } = text;

  const handleOnSubmit = () => {
    // submit function
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleOnSubmit}
    >
      {(handleSubmit) => (
        <Form ref={form} className={cn('contact-form')}>
          <TextInput
            name="name"
            autoComplete="given-name"
            type="text"
            placeholder={name.placeholder}
          />
          <TextInput
            name="email"
            autoComplete="email"
            type="text"
            placeholder={email.placeholder}
          />
          <TextArea name="message" placeholder={message.placeholder} />
          <div className={cn('contact-form__button-wrapper')}>
            <Button onClick={handleSubmit} btnType="submit">
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

MessageForm.proptTypes = {
  text: PropTypes.object.isRequired,
};
