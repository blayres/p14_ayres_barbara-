import React, { Fragment } from 'react'
import Backdrop from './backdrop'

/**
 * Styles for the ModalWrapper component.
 */
const wrapperStyles = {
  width: '100%',
  position: 'absolute',
  left: 0,
  top: 0
}

/**
 * Styles for the Modal component.
 */
const modalStyles = {
  maxWidth: '500px',
  width: '100%',
  border: '1px solid #ddd',
  borderRadius: '5px',
  backgroundColor: 'white',
  margin: '100px auto 0',
  zIndex: 1,
  position: 'relative',
  padding: '10px 30px'
}

/**
 * Styles for the close button of the modal.
 */
const closeBtnStyles = {
  position: 'absolute',
  right: '-13px',
  top: '-13px',
  backgroundColor: 'indianred',
  border: 'none',
  borderRadius: '30px',
  fontSize: '13px',
  cursor: 'pointer',
  fontWeight: 'bold',
  color: 'white',
  padding: '6px 10px'
}

/**
 * Modal component for displaying content in a modal window.
 *
 * @param {object} props - Component properties.
 * @param {boolean} props.show - Controls the visibility of the modal.
 * @param {function} props.onClickCloseBtn - Function called when the close button is clicked.
 * @param {React.ReactNode} props.children - Modal content.
 * @returns {JSX.Element} The Modal component.
 */
const Modal = ({ children, show, onClickCloseBtn }) => {
  return (
    <Fragment>
      {show && (
        <div style={wrapperStyles}>
          <Backdrop onClick={onClickCloseBtn} />
          <div style={modalStyles}>
            <button onClick={onClickCloseBtn} style={closeBtnStyles}>
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default Modal