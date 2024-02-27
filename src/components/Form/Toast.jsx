import { Toast } from "react-bootstrap";

/* eslint-disable react/prop-types */
export const ToastError = ({ title, message, Close }) => {
  const handleClose = () => {
    Close(false);
  };
  return (
    <Toast onClose={handleClose} className="position-fixed top-0 end-0 ">
      <Toast.Header className="text-primary-emphasis">
        <strong>{title}</strong>
      </Toast.Header>
      <Toast.Body className="bg-body-tertiary"> {message}</Toast.Body>
    </Toast>
  );
};
