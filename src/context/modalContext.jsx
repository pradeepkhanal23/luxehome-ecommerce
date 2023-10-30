import React from "react";
import { createContext, useContext } from "react";
import { useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        modalOpen,
        setModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};
