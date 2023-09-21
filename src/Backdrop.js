import React from 'react'
 
/**
 * Styles for the Backdrop component.
 */
const backdropStyles = {
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.472)'
}
 
/**
 * Backdrop component to create a dark background behind the modal.
 *
 * @param {object} props - Component properties.
 * @param {function} props.onClick - Function called when clicking the backdrop.
 * @returns {JSX.Element} The Backdrop component.
 */
const Backdrop = ({ onClick }) => {
  return <div onClick={onClick} style={backdropStyles} />
}
 
export default Backdrop