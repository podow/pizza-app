import React from 'react';

import { SuccessModalContent } from './styles';

import Modal, { ModalPortal } from 'app/components/Modal';

const OrderResultModal = ({ name, state: { success, failed } }) =>
  (success || failed) && (
    <ModalPortal>
      <Modal nameProp={name}>
        <SuccessModalContent>
          {success && <img src="/static/images/icons/success.svg" alt="" />}
          {failed && <img src="/static/images/icons/error.svg" alt="" />}
          <p>
            {success ? 'Order save success' : failed ? 'Order save failed' : ''}
          </p>
        </SuccessModalContent>
      </Modal>
    </ModalPortal>
  );

export default OrderResultModal;
