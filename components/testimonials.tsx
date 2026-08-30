"use client";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
const quotes = [
  {
    text: "Christian gave us a much clearer view of our finances and translated a complicated portfolio into a plan we could understand and follow.",
    name: "Amelia Hart",
    role: "Technology Executive",
  },
  {
    text: "The conversation was thoughtful from the beginning. We never felt rushed, and every recommendation was connected to what mattered to our family.",
    name: "Marcus Bennett",
    role: "Business Owner",
  },
  {
    text: "His calm perspective helped me make confident retirement decisions without being distracted by every change in the market.",
    name: "Eleanor Price",
    role: "Retired Educator",
  },
  {
    text: "Christian helped us think about the company and our personal wealth as one connected financial picture. That clarity has been enormously valuable.",
    name: "Chris Eklund",
    role: "Managing Director",
  },
  {
    text: "What stood out was the quality of communication. The strategy was rigorous, but it was always explained in straightforward, practical language.",
    name: "Sophie Laurent",
    role: "Medical Consultant",
  },
];
export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setI((value) => (value + 1) % quotes.length),
      6000,
    );
    return () => clearInterval(timer);
  }, []);
  const move = (amount: number) =>
    setI((i + amount + quotes.length) % quotes.length);
  return (
    <section id="testimonials" className="testimonials section">
      <div className="wrap testimonial-layout">
        <div className="section-heading testimonial-heading">
          <div>
            <span className="eyebrow">Client perspectives</span>
            <h2>
              Guidance people value.
              <br />
              <em>Relationships built to last.</em>
            </h2>
          </div>
          <div className="testimonial-count">
            <strong>{String(i + 1).padStart(2, "0")}</strong>
            <span>/ {String(quotes.length).padStart(2, "0")}</span>
          </div>
          <div className="slider-controls">
            <button onClick={() => move(-1)} aria-label="Previous testimonial">
              <ArrowLeft />
            </button>
            <button onClick={() => move(1)} aria-label="Next testimonial">
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="quote-stage">
          <div className="quote-card">
          <Quote />
          <p>“{quotes[i].text}”</p>
          <div>
            <b>{quotes[i].name}</b>
            <span>{quotes[i].role} ·</span>
          </div>
          </div>
          <div className="dots">
          {quotes.map((_, n) => (
            <button
              key={n}
              className={i === n ? "active" : ""}
              onClick={() => setI(n)}
              aria-label={`Show testimonial ${n + 1}`}
            />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
