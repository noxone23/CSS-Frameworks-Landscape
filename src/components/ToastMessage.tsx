import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

type ToastMessageProps = {
  message: string | null;
  onClose: () => void;
};

export default function ToastMessage({ message, onClose }: ToastMessageProps) {
  return (
    <ToastContainer position="bottom-end" className="p-3 position-fixed">
      <Toast
        show={message !== null}
        onClose={onClose}
        autohide
        delay={3000}
        bg="success"
      >
        <Toast.Body className="d-flex justify-content-between align-items-center text-white">
          <span>{message}</span>
          <button
            type="button"
            className="btn-close btn-close-white"
            aria-label="Close"
            onClick={onClose}
          />
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
