import React, { forwardRef, Ref, useImperativeHandle, useState } from "react";

export interface ModalHandles {
  openModal: () => void;
}

const Modal = (props: any, ref: Ref<ModalHandles>) => {
  const [visible, setVisible] = useState(true);

  useImperativeHandle(ref, () => {
    return {
      openModal,
    };
  });

  const openModal = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div>
      Modal aberto
      <button onClick={handleCloseModal}>Fechar modal</button>
    </div>
  );
};

export default forwardRef(Modal);
