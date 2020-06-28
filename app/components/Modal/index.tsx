import React, { useEffect, useRef, useState } from 'react';
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
  const modalRef = useRef(null);

  const modal = useSelector(state => state.common.modal);

  const { nameProp, children, onClose } = props;

  useEffect(() => {
    if (window) {
      setIsClient(true);
    }
  }, []);

  const closeModal = e => {
    e.preventDefault();
    const { name } = modal;
    dispatch(toggleModal({ name, open: false }));
    onClose && onClose();
  };

  const handleClickOutside = e => {
    // @ts-ignore
    if (!modalRef.current?.contains(e.target)) {
      closeModal(e);
    }
  };

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);
  // }, []);

  return (
    <>
      {isClient ? (
        <ModalWrapper isOpen={modal.name === nameProp && modal.open}>
          {modal.name === nameProp && modal.open && (
            <ModalContent ref={modalRef} isOpen={modal.open}>
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
