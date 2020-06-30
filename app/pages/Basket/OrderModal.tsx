import React from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import { ModalForm } from './styles';

import { Field, Formik } from 'formik';
import Modal, { ModalPortal } from 'app/components/Modal';
import { FormField, InputPhone, TextArea } from 'app/components/Form';
import { Button } from 'app/components/Buttons';

const OrderModal = ({ name, onSubmit }) => {
  const user = useSelector(state => state.auth.data);
  const initialValues = {
    name: '',
    address: '',
    phone: user.phone || '',
    comment: ''
  };

  const validation = Yup.object().shape({
    name: Yup.string().required(),
    address: Yup.string().required(),
    phone: Yup.string()
      .required()
      .test('phone', 'field value is incorrect', value =>
        /\d{2}-\d{3}-\d{3}-\d{3}/.test(value)
      ),
    comment: Yup.string()
  });

  return (
    <ModalPortal>
      <Modal nameProp={name}>
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validation}
          render={props => (
            <ModalForm onSubmit={props.handleSubmit}>
              <h2>Delivery order</h2>
              <Field
                component={FormField}
                placeholder="Name"
                name="name"
                isFullWidth
              />
              <Field
                component={FormField}
                placeholder="Address"
                name="address"
                isFullWidth
              />
              <Field
                component={InputPhone}
                placeholder="Phone"
                name="phone"
                isFullWidth
              />
              <Field
                component={TextArea}
                placeholder="Comment for order"
                name="comment"
                isFullWidth
              />
              <footer>
                <Button type="submit" size="sm">
                  Submit
                </Button>
              </footer>
            </ModalForm>
          )}
        />
      </Modal>
    </ModalPortal>
  );
};

export default OrderModal;
