import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { BookingModalProvider } from "@/components/BookingModalContext";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://cuttlesdoggrooming.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cuttles Dog Grooming & Boutique | Oakville, ON",
    template: "%s | Cuttles Dog Grooming & Boutique",
  },
  description:
    "Calm, careful dog grooming and a curated pet boutique in Oakville, Ontario. Full grooming, bath & brush, nail trims and more from certified pet stylists — plus bandanas, leashes and spa products to take home.",
  keywords: [
    "dog grooming Oakville",
    "dog groomer Oakville",
    "pet grooming near me",
    "pet boutique Oakville",
    "dog boutique Ontario",
  ],
  openGraph: {
    title: "Cuttles Dog Grooming & Boutique | Oakville, ON",
    description:
      "Calm, careful dog grooming and a curated pet boutique in Oakville, Ontario. Certified pet stylists and premium results for every breed.",
    url: siteUrl,
    siteName: "Cuttles Dog Grooming & Boutique",
    locale: "en_CA",
    type: "website",
    images: [{ url: "/images/hero-dog-grooming.jpg", width: 1600, height: 900 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuttles Dog Grooming & Boutique | Oakville, ON",
    description:
      "Calm, careful dog grooming and a curated pet boutique in Oakville, Ontario.",
    images: ["/images/hero-dog-grooming.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <BookingModalProvider>{children}</BookingModalProvider>
      </body>
    </html>
  );
}
