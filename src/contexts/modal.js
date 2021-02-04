import { createContext, useContext, useState } from 'react'

export const useModal = () => {
  const [modal, setModal] = useState(null)

  const clearModal = () => {
    setModal(null)
  }

  return { modal, setModal, clearModal }
}

export const ModalContext = createContext()

const useModalContext = () => useContext(ModalContext)

export default useModalContext
