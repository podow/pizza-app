import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const ModalPortal = ({ children }) => {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // @ts-ignore
    ref.current = document.querySelector('#modal');
    setMounted(true);
  }, []);

  // @ts-ignore
  return mounted ? createPortal(children, ref.current) : null;
};

export default ModalPortal;
