import { Toast } from "react-bootstrap";

/* eslint-disable react/prop-types */
export const ToastError = ({ title, message, Close }) => {
  const handleClose = () => {
    Close(false);
  };
  return (
    <Toast
      onClose={handleClose}
      className="position-fixed text-bg-warning bottom-0 end-0 "
    >
      <Toast.Header className="">
        <strong>{title}</strong>
      </Toast.Header>
      <Toast.Body> {message}</Toast.Body>
    </Toast>
  );
};
