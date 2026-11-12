import { useEffect } from "react";

import { FOCUS_RING } from "./styles";

type ToastMessageProps = {
  message: string | null;
  onClose: () => void;
};

const HIDE_DELAY_MS = 3000;

export default function ToastMessage({ message, onClose }: ToastMessageProps) {
  useEffect(() => {
    if (message === null) {
      return;
    }
    const timer = setTimeout(onClose, HIDE_DELAY_MS);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  return (
    <div
      role="status"
      className="fixed right-4 bottom-4 left-4 z-20 flex justify-end sm:left-auto"
    >
      {message !== null && (
        <div className="flex items-center gap-4 border border-ink bg-tooltip px-4 py-3 text-ink shadow-raised">
          <span>{message}</span>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className={`cursor-pointer px-2 ${FOCUS_RING}`}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
