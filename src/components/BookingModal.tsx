"use client";

import { useEffect, useState } from "react";
import { X, CalendarCheck, CheckCircle2 } from "lucide-react";
import { business } from "@/data/business";
import { services } from "@/data/services";

export function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    onClose();
    setSubmitted(false);
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book an appointment"
      className="fixed inset-0 z-[80] flex items-center justify-center bg-stone-800/70 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative w-full max-w-md border border-sand-dark bg-white p-7">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-stone-500 transition-colors hover:bg-sand hover:text-stone-800"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center py-6 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-600">
              <CheckCircle2 size={28} />
            </span>
            <h3 className="mt-5 text-xl font-medium text-stone-800">Request received</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              This is a demo booking form — no request was actually sent. On the real site
              we&rsquo;ll confirm your dog&rsquo;s appointment by phone within one business day.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-6 rounded-md bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="mb-1 flex items-center gap-2 text-primary-600">
              <CalendarCheck size={18} />
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">Book Appointment</p>
            </div>
            <h3 className="text-xl font-medium text-stone-800">Request a time at {business.shortName}</h3>
            <p className="mt-1.5 text-sm text-stone-600">
              Demo form — submitting will not send a real request or email.
            </p>

            <form
              className="mt-6 flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid grid-cols-2 gap-3">
                <label className="flex flex-col gap-1.5 text-sm font-medium text-stone-700">
                  Your name
                  <input
                    type="text"
                    required
                    placeholder="Jamie Rivera"
                    className="rounded-md border border-sand-dark bg-cream px-3.5 py-2.5 text-sm text-stone-800 outline-none transition-colors focus:border-primary-500"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-stone-700">
                  Dog&rsquo;s name
                  <input
                    type="text"
                    required
                    placeholder="Biscuit"
                    className="rounded-md border border-sand-dark bg-cream px-3.5 py-2.5 text-sm text-stone-800 outline-none transition-colors focus:border-primary-500"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-1.5 text-sm font-medium text-stone-700">
                Phone number
                <input
                  type="tel"
                  required
                  placeholder="(905) 555-0142"
                  className="rounded-md border border-sand-dark bg-cream px-3.5 py-2.5 text-sm text-stone-800 outline-none transition-colors focus:border-primary-500"
                />
              </label>

              <label className="flex flex-col gap-1.5 text-sm font-medium text-stone-700">
                Service
                <select
                  required
                  defaultValue=""
                  className="rounded-md border border-sand-dark bg-cream px-3.5 py-2.5 text-sm text-stone-800 outline-none transition-colors focus:border-primary-500"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option key={service.slug} value={service.slug}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-1.5 text-sm font-medium text-stone-700">
                Preferred date
                <input
                  type="date"
                  className="rounded-md border border-sand-dark bg-cream px-3.5 py-2.5 text-sm text-stone-800 outline-none transition-colors focus:border-primary-500"
                />
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-700"
              >
                <CalendarCheck size={16} />
                Request Appointment
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
