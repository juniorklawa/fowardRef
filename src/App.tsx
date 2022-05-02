import React, { FormEvent, useRef } from "react";
import Input from "./components/Input";
import Modal, { ModalHandles } from "./components/Modal";

function App() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const acceptTermsRef = useRef({ value: false });
  const modalRef = useRef<ModalHandles>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(nameInputRef.current?.value);
    console.log(acceptTermsRef.current?.value);
  };

  const handleOpenModal = () => {
    modalRef.current?.openModal();
  };

  const handleAcceptTerms = () => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input name="name" label="Nome completo" ref={nameInputRef} />

        <button type="submit" onClick={handleSubmit}>
          Enviar
        </button>

        <button onClick={handleAcceptTerms} type="button">
          Aceitar termos
        </button>
      </form>

      <button onClick={handleOpenModal}>Abrir Modal</button>

      <Modal ref={modalRef} />
    </div>
  );
}

export default App;
