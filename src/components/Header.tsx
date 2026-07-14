"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Scissors } from "lucide-react";
import clsx from "clsx";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { useBookingModal } from "@/components/BookingModalContext";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#boutique", label: "Boutique" },
  { href: "#why-us", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openBookingModal } = useBookingModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-sand-dark/60 bg-cream/90 backdrop-blur-md"
          : "border-b border-transparent bg-cream/40 backdrop-blur-sm"
      )}
    >
      <Container className="flex h-18 items-center justify-between py-3">
        <Link href="#top" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
            <Scissors size={16} className="transition-transform duration-300 group-hover:animate-snip" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-tight text-stone-800">
              Cuttles
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-stone-500">
              Grooming &amp; Boutique
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-primary-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-stone-800 transition-colors hover:text-primary-600"
          >
            <Phone size={16} />
            {business.phone}
          </a>
          <button
            type="button"
            onClick={openBookingModal}
            className="rounded-xl bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-md"
          >
            Book Appointment
          </button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-stone-800 lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {menuOpen ? (
        <div className="border-t border-sand-dark/60 bg-cream lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-sand"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2 px-3">
              <a
                href={business.phoneHref}
                className="flex items-center justify-center gap-2 rounded-xl border border-primary-600 px-5 py-2.5 text-sm font-semibold text-primary-600"
              >
                <Phone size={16} />
                Call Now
              </a>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openBookingModal();
                }}
                className="rounded-xl bg-primary-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
              >
                Book Appointment
              </button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
