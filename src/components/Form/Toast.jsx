import { Toast } from "react-bootstrap";

/* eslint-disable react/prop-types */
export const ToastError = ({ title, time, message, Close }) => {
  const handleClose = () => {
    Close(false);
  };
  return (
    <Toast onClose={handleClose} className="position-absolute bottom-0 end-0">
      <Toast.Header>
        <strong>{title}</strong>
        <small>{time}</small>
      </Toast.Header>
      <Toast.Body> {message}</Toast.Body>
    </Toast>
  );
};
