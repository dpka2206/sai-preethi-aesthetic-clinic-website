import type { ButtonHTMLAttributes, ReactNode } from "react";
import { calBookingAttrs } from "@/lib/cal-booking";
import { cn } from "@/lib/utils";

type BookConsultationProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

/** Opens the Cal.com booking modal (element-click embed). */
export function BookConsultation({ className, children, type = "button", ...props }: BookConsultationProps) {
  return (
    <button type={type} {...calBookingAttrs} className={cn(className)} {...props}>
      {children}
    </button>
  );
}
