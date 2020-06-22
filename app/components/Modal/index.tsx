import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  ModalWrapper,
  ModalContent,
  ModalBody,
  CloseModalButton
} from './style';

import { IModalProps } from 'interfaces/components/modal';

import ModalPortal from './ModalPortal';
import { toggleModal } from 'store/common/actions';

const Modal: React.FC<IModalProps> = props => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const dispatch = useDispatch();

  const modal = useSelector(state => state.common.modal);

  const { nameProp, children } = props;

  useEffect(() => {
    if (window) {
      setIsClient(true);
    }
  }, []);

  function closeModal(e) {
    e.preventDefault();
    const { name } = modal;
    dispatch(toggleModal({ name, open: false }));
  }

  return (
    <>
      {isClient ? (
        <ModalWrapper isOpen={modal.name === nameProp && modal.open}>
          {modal.name === nameProp && modal.open && (
            <ModalContent isOpen={modal.open}>
              <CloseModalButton onClick={closeModal} />
              <ModalBody>{children}</ModalBody>
            </ModalContent>
          )}
        </ModalWrapper>
      ) : null}
    </>
  );
};

export { ModalPortal };
export default Modal;
