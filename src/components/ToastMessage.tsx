import { useEffect } from "react";
import styled from "styled-components";

type ToastMessageProps = {
  message: string | null;
  onClose: () => void;
};

const HIDE_DELAY_MS = 3000;

const Region = styled.div`
  position: fixed;
  right: ${({ theme }) => theme.space.md};
  bottom: ${({ theme }) => theme.space.md};
  left: ${({ theme }) => theme.space.md};
  z-index: ${({ theme }) => theme.sizes.zToast};
  display: flex;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    left: auto;
    justify-content: flex-end;
  }
`;

const Toast = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.gradients.card};
  backdrop-filter: ${({ theme }) => theme.effects.glassFilter};
  border: ${({ theme }) => theme.sizes.border} solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadows.raised};
`;

const CloseButton = styled.button`
  padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.sm};
  background: transparent;
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer;
`;

export default function ToastMessage({ message, onClose }: ToastMessageProps) {
  useEffect(() => {
    if (message === null) {
      return;
    }
    const timer = setTimeout(onClose, HIDE_DELAY_MS);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  return (
    <Region role="status">
      {message !== null && (
        <Toast>
          <span>{message}</span>
          <CloseButton type="button" aria-label="Close" onClick={onClose}>
            ×
          </CloseButton>
        </Toast>
      )}
    </Region>
  );
}
