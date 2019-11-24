import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ title, content, action, onDismiss }) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={onDismiss}>
      <div
        className="ui standard modal visible active"
        onClick={e => e.stopPropagation()}
      >
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">{action}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
