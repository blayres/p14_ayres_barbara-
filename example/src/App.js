import React, { useState } from 'react'
import Modal from 'react-modal'

/**
 * Main application component.
 */
const App = () => {
  const [showModal, setShowModal] = useState(false)

  /**
   * Function to hide the modal.
   */
  const hideModal = () => showModal && setShowModal(false)

  return (
    <div>
      <button
        style={{
          width: '200px',
          display: 'block',
          margin: '0 auto',
          padding: '10px',
          background: 'none',
          border: 'none',
          backgroundColor: '#eee',
          fontSize: '20px',
          cursor: 'pointer'
        }}
        onClick={() => setShowModal(true)}
      >
        Show Modal
      </button>
      <Modal show={showModal} onClickCloseBtn={hideModal}>
        <h1
          style={{
            fontSize: '18px'
          }}
        >
          I am a modal
        </h1>
      </Modal>
    </div>
  )
}

export default App
