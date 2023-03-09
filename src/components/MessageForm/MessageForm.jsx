import classNames from 'classnames/bind';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../Button';
import Checkbox from '../Checkbox';
import TextArea from '../TextArea';
import TextInput from '../TextInput';
import styles from './MessageForm.module.scss';
import { validationSchema } from './validation/validationSchema';

const cn = classNames.bind(styles);

export default function MessageForm({ text, checkboxText }) {
  const btnWrapperCustomClass = checkboxText
    ? 'contact-form__button-wrapper--with-checkbox'
    : 'contact-form__button-wrapper';

  const initialValues = {
    name: '',
    email: '',
    message: '',
    privacy: false,
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
        <Form className={cn('contact-form')}>
          <div className={cn('contact-form__container')}>
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
          </div>
          <TextArea name="message" placeholder={message.placeholder} />
          {checkboxText && (
            <Checkbox
              name="privacy"
              label={checkboxText}
              className={cn('contact-form__checkbox')}
            />
          )}
          <div className={cn(btnWrapperCustomClass)}>
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
  checkboxText: PropTypes.string,
};
