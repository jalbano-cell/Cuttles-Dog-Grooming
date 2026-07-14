"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { BookingModal } from "@/components/BookingModal";

type BookingModalContextValue = {
  isOpen: boolean;
  openBookingModal: () => void;
  closeBookingModal: () => void;
};

const BookingModalContext = createContext<BookingModalContextValue | null>(null);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BookingModalContext.Provider
      value={{
        isOpen,
        openBookingModal: () => setIsOpen(true),
        closeBookingModal: () => setIsOpen(false),
      }}
    >
      {children}
      <BookingModal open={isOpen} onClose={() => setIsOpen(false)} />
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return ctx;
}
