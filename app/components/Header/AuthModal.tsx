import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';

import { AuthModalWrapper } from './style';

import { fetchAuth } from 'store/auth/actions';
import { toggleModal } from 'store/common/actions';

import Modal, { ModalPortal } from '../Modal';
import Tabs, { Tab } from '../Tabs';
import { Button } from '../Buttons';
import { FormField, InputPhone } from '../Form';

const AuthModal = () => {
  const dispatch = useDispatch();

  const getInitialValues = isLogin =>
    isLogin
      ? { phone: '', password: '' }
      : { phone: '', password: '', repeatPassword: '' };

  const getValidationSchema = isLogin =>
    isLogin
      ? Yup.object().shape({
          phone: Yup.string()
            .required()
            .test('phone', 'field value is incorrect', value =>
              /\d{2}-\d{3}-\d{3}-\d{3}/.test(value)
            ),
          password: Yup.string()
            .required()
            .min(6)
            .trim()
        })
      : Yup.object().shape({
          phone: Yup.string()
            .required()
            .test('phone', 'field value is incorrect', value =>
              /\d{2}-\d{3}-\d{3}-\d{3}/.test(value)
            ),
          password: Yup.string()
            .required()
            .min(6)
            .trim(),
          repeatPassword: Yup.string()
            .oneOf([Yup.ref('password'), 'test'], 'Passwords must match')
            .required()
        });

  const handleSubmit = (values, type) => {
    const newValues = {
      ...values,
      phone: values.phone.replace(/-/g, '')
    };
    dispatch(fetchAuth({ data: newValues, type }));
    dispatch(toggleModal({ name: 'authModal', open: false }));
  };

  return (
    <ModalPortal>
      <Modal nameProp="authModal">
        <AuthModalWrapper>
          <Tabs tabControlsTag="h3">
            <Tab label="Login">
              <Formik
                onSubmit={values => handleSubmit(values, 'login')}
                initialValues={getInitialValues(true)}
                validationSchema={getValidationSchema(true)}
                render={props => (
                  <form onSubmit={props.handleSubmit}>
                    <Field
                      component={InputPhone}
                      placeholder="Phone"
                      name="phone"
                      isFullWidth
                    />
                    <Field
                      component={FormField}
                      placeholder="Password"
                      name="password"
                      type="password"
                      isFullWidth
                    />
                    <footer>
                      <Button size="sm" type="submit">
                        Log in
                      </Button>
                    </footer>
                  </form>
                )}
              />
            </Tab>

            <Tab label="Register">
              <Formik
                onSubmit={values => handleSubmit(values, 'register')}
                initialValues={getInitialValues(false)}
                validationSchema={getValidationSchema(false)}
                render={props => (
                  <form onSubmit={props.handleSubmit}>
                    <Field
                      component={InputPhone}
                      placeholder="Phone"
                      name="phone"
                      isFullWidth
                    />
                    <Field
                      component={FormField}
                      placeholder="Password"
                      name="password"
                      type="password"
                      isFullWidth
                    />
                    <Field
                      component={FormField}
                      placeholder="Repeat password"
                      name="repeatPassword"
                      type="password"
                      isFullWidth
                    />
                    <footer>
                      <Button size="sm" type="submit">
                        Register
                      </Button>
                    </footer>
                  </form>
                )}
              />
            </Tab>
          </Tabs>
        </AuthModalWrapper>
      </Modal>
    </ModalPortal>
  );
};

export default AuthModal;
