import { useEffect, useRef } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import styled, { keyframes } from "styled-components";

type ModalProps = {
  /** Id for the title element, used as the accessible name. */
  titleId: string;
  title: string;
  onClose: () => void;
  children: ReactNode;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const appear = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.sizes.zDialog};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding: ${({ theme }) => theme.space.md};
  background: ${({ theme }) => theme.colors.backdrop};
`;

const Panel = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.dialog};
  max-height: 100%;
  overflow-y: auto;
  background: ${({ theme }) => theme.gradients.card};
  backdrop-filter: ${({ theme }) => theme.effects.glassFilter};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadows.raised};

  @media (prefers-reduced-motion: no-preference) {
    animation: ${appear} ${({ theme }) => theme.durations.fast} ease-out;
  }
`;

const Heading = styled.h2`
  padding: ${({ theme }) => theme.space.md};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  border-bottom: ${({ theme }) => theme.sizes.border} solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.gradients.dialogTitle};
  color: ${({ theme }) => theme.colors.titleText};
  text-shadow: ${({ theme }) => theme.effects.titleGlow};
`;

const Body = styled.div`
  padding: ${({ theme }) => theme.space.md};
`;

/**
 * An accessible modal dialog: focus moves in, Tab stays inside, Escape closes,
 * and focus returns to the opener (or to the page title if the opener is gone).
 */
export default function Modal({
  titleId,
  title,
  onClose,
  children,
}: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    if (panel && !panel.contains(document.activeElement)) {
      panel.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    }
    return () => {
      const target = opener?.isConnected
        ? opener
        : document.getElementById("app-title");
      target?.focus();
    };
  }, []);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.stopPropagation();
      onClose();
      return;
    }
    if (event.key !== "Tab" || !panelRef.current) {
      return;
    }
    const focusable = panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <Backdrop
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <Panel
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onKeyDown={handleKeyDown}
      >
        <Heading id={titleId}>{title}</Heading>
        <Body>{children}</Body>
      </Panel>
    </Backdrop>
  );
}
