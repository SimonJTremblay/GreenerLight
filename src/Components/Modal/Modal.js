import React from 'react';
import './Modal.css';
import PropTypes from "prop-types";

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <div className="actions">
            <button onClick={handleClose}>close</button>
          </div>
        </section>
      </div>
    );
  };

  // This forces a handleClose function to be defined, otherwise the modal will not be able to close
  Modal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
  };

  export default Modal;