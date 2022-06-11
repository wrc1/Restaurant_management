import React from 'react';
import style from './style';

export const Dialog = ({ handleClose, show, Component, callback, data }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <style.Dialog>
      <div className={showHideClassName}>
        <section className="modal-main">
          <Component callback={callback} formData={data} />
          <button className="btn close-btn" type="button" onClick={handleClose}>
            <i className="bi bi-x-circle"></i>
          </button>
        </section>
      </div>
    </style.Dialog>

  );
};