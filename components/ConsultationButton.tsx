"use client";
import { useContactModal } from "./ContactModalContext";

interface Props {
  variant?: "solid" | "outline";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export default function ConsultationButton({
  variant = "solid",
  fullWidth = false,
  children,
}: Props) {
  const { openModal } = useContactModal();

  const cls =
    variant === "outline"
      ? `btn btn-consultation-outline${fullWidth ? " btn-full" : ""}`
      : `btn btn-solid btn-consultation${fullWidth ? " btn-full" : ""}`;

  return (
    <button type="button" onClick={openModal} className={cls}>
      {children}
    </button>
  );
}
