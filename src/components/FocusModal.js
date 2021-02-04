import React from 'react'
import useModalContext from '../contexts/modal'

const CollectionModal = () => {
  const { modal, clearModal } = useModalContext()

  return (
    modal && (
      <div className="focus-modal">
        <div
          className="focus-modal__close-overlay"
          onClick={clearModal}
          aria-hidden
        />
        {modal}
      </div>
    )
  )
}

export default CollectionModal
