import { useEffect, useRef } from "react";
import type { KeyboardEvent, ReactNode } from "react";

import { TITLE_BAR } from "./styles";

type ModalProps = {
  /** Id for the title element, used as the accessible name. */
  titleId: string;
  title: string;
  onClose: () => void;
  children: ReactNode;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

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
    <div
      className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto bg-backdrop p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onKeyDown={handleKeyDown}
        className="max-h-full w-full max-w-lg overflow-y-auto bg-surface-raised p-1 shadow-raised"
      >
        <h2 id={titleId} className={`${TITLE_BAR} text-base`}>
          {title}
        </h2>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
