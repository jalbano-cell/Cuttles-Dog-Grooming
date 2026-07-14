"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/content";
import { business } from "@/data/business";
import { Container } from "@/components/ui/Container";
import { StarRating } from "@/components/ui/StarRating";

export function Reviews() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section id="reviews" className="bg-primary-700 py-20 text-white lg:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="mb-3 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-100">
            <span className="inline-block h-0.5 w-7 bg-white" />
            Reviews
          </p>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            What {business.address.city} pet parents are saying
          </h2>
          <div className="mt-5 flex items-center gap-2">
            <StarRating rating={business.rating.value} />
            <span className="text-sm font-medium text-primary-100">
              {business.rating.value} average from {business.rating.count}+ Google reviews
            </span>
          </div>
        </div>

        <div className="border-l-2 border-white/30 pl-6 sm:pl-10">
          <span className="font-display text-6xl italic leading-none text-primary-300">&ldquo;</span>
          <div className="-mt-6 min-h-[140px]">
            <p className="text-xl leading-relaxed sm:text-2xl">{testimonials[index].quote}</p>
            <div className="mt-6 flex items-center gap-3">
              <StarRating rating={testimonials[index].rating} />
              <p className="text-sm font-semibold text-primary-100">
                {testimonials[index].name} &middot; {testimonials[index].source}
              </p>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous review"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next review"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              <ChevronRight size={16} />
            </button>
            <div className="flex items-center gap-1.5">
              {testimonials.map((t, i) => (
                <button
                  key={t.name + i}
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-playful-400" : "w-1.5 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
