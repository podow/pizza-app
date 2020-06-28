import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';

import { AuthModalWrapper } from './style';

import { fetchAuthDone } from 'store/auth/actions';
import { toggleModal } from 'store/common/actions';

import Modal, { ModalPortal } from '../Modal';
import Tabs, { Tab } from '../Tabs';
import { Button } from '../Buttons';
import { FormField, InputPhone } from '../Form';

const AuthModal = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  // FIXME: Replace to saga
  useEffect(() => {
    if (isAuthenticated) {
      Router.push('/history');
    }
  }, [isAuthenticated]);

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

  // FIXME: connect to api
  const handleSubmit = values => {
    console.log(values);
    if (values.password === '123123123') {
      dispatch(fetchAuthDone({ username: 'firelog', phone: '777777777777' }));
      dispatch(toggleModal({ name: 'authModal', open: false }));
    }
  };

  return (
    <ModalPortal>
      <Modal nameProp="authModal">
        <AuthModalWrapper>
          <Tabs tabControlsTag="h3">
            <Tab label="Login">
              <Formik
                onSubmit={handleSubmit}
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
                onSubmit={handleSubmit}
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
