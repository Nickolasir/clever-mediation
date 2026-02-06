"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Scroll listener for navbar
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-cinema-reveal");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-cloud-white overflow-x-hidden">
      {/* ===== NAVIGATION ===== */}
      <nav className="fixed top-0 w-full z-50 px-4 pt-4">
        <div
          className={`max-w-6xl mx-auto px-6 py-4 rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-warm-gray-200/50"
              : "bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-display text-warm-gray-900">
              Clever<span className="text-sage-600">Mediation</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="#about"
                className="animated-underline text-warm-gray-600 hover:text-warm-gray-900 transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="#services"
                className="animated-underline text-warm-gray-600 hover:text-warm-gray-900 transition-colors duration-300"
              >
                Services
              </Link>
              <Link
                href="#credentials"
                className="animated-underline text-warm-gray-600 hover:text-warm-gray-900 transition-colors duration-300"
              >
                Credentials
              </Link>
              <Link
                href="#process"
                className="animated-underline text-warm-gray-600 hover:text-warm-gray-900 transition-colors duration-300"
              >
                Process
              </Link>
              <a
                href="https://outlook.office.com/book/CleverMediation1@clevermediation.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sage-500 text-white px-6 py-2.5 rounded-full hover:bg-sage-600 transition-all duration-300 hover:shadow-lg hover:shadow-sage-500/25 btn-shine"
              >
                Book Now
              </a>
            </div>
            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-warm-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cloud-white via-cream to-sage-50">
          <div className="absolute inset-0 bg-mesh" />
        </div>

        {/* Morphing organic blobs */}
        <div className="absolute top-[10%] left-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-br from-sage-200/40 to-sage-300/20 animate-morph blur-3xl" />
        </div>
        <div
          className="absolute bottom-[15%] right-[8%] w-[28vw] h-[28vw] max-w-[400px] max-h-[400px]"
          style={{ animationDelay: "-3s" }}
        >
          <div className="absolute inset-0 bg-gradient-to-tl from-terracotta-200/30 to-gold-200/20 animate-morph blur-2xl" />
        </div>
        <div
          className="absolute top-[40%] right-[30%] w-[15vw] h-[15vw] max-w-[200px] max-h-[200px]"
          style={{ animationDelay: "-5s" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold-200/25 to-transparent animate-morph blur-xl" />
        </div>

        {/* Floating botanical element */}
        <div className="absolute top-[25%] right-[12%] w-16 h-16 animate-organic-float opacity-20">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <path
              d="M50 10 Q60 30 50 50 Q40 70 50 90"
              stroke="currentColor"
              strokeWidth="2"
              className="text-sage-600"
            />
            <path
              d="M50 30 Q70 35 80 50"
              stroke="currentColor"
              strokeWidth="2"
              className="text-sage-500"
            />
            <path
              d="M50 50 Q30 55 20 70"
              stroke="currentColor"
              strokeWidth="2"
              className="text-sage-500"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-50/80 backdrop-blur-sm border border-sage-200/50 animate-fade-in-down">
              <span className="w-2 h-2 rounded-full bg-sage-500 animate-gentle-pulse" />
              <span className="text-sm font-medium text-sage-700">
                Professional Mediation Services
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight text-warm-gray-900 animate-fade-in-up">
              Resolve Disputes with
              <span className="block gradient-accent">Clarity and Compassion</span>
            </h1>

            <p className="text-xl text-warm-gray-600 leading-relaxed max-w-xl animate-fade-in-up delay-200">
              Former federal litigator bringing courtroom expertise to the mediation table.
              Let&apos;s find your path to resolution.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up delay-300">
              <a
                href="https://outlook.office.com/book/CleverMediation1@clevermediation.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-sage-500 text-white rounded-full font-medium hover:bg-sage-600 transition-all duration-500 animate-gentle-pulse btn-shine"
              >
                Book Your Mediation
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <Link
                href="#about"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm border border-warm-gray-200 text-warm-gray-800 rounded-full font-medium hover:bg-white hover:border-sage-300 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Image Container */}
          <div className="lg:col-span-5 relative animate-fade-in-right delay-400">
            {/* Glassmorphic frame */}
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden glass-card p-3 shadow-2xl shadow-sage-500/10">
              <div className="relative h-full rounded-[1.5rem] overflow-hidden">
                <Image
                  src="/headshot.jpg"
                  alt="Professional Mediator"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>

              {/* Floating accent badge */}
              <div className="absolute -bottom-4 -left-4 px-5 py-3 glass-light rounded-full shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-gold-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-warm-gray-500">Undefeated in</div>
                    <div className="font-semibold text-warm-gray-900">10+ Jury Trials</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-sm text-warm-gray-500">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-warm-gray-300 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-sage-400 animate-scroll-bounce" />
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="relative py-24 lg:py-32 px-6 bg-cream overflow-hidden">
        {/* Organic shape accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sage-50 rounded-bl-[6rem] opacity-50" />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-6 scroll-animate opacity-0">
            <span className="text-sage-600 font-medium tracking-wide uppercase text-sm">
              About Your Mediator
            </span>
            <h2 className="font-display text-4xl lg:text-5xl text-warm-gray-900 leading-tight">
              Expertise Meets Empathy
            </h2>
            <div className="space-y-4 text-lg text-warm-gray-600 leading-relaxed">
              <p>
                As an experienced former attorney with extensive federal litigation experience and a proven track record
                in complex legal matters, I bring a unique perspective to mediation. My background includes
                serving as <span className="font-semibold text-sage-700">legal counsel for four Members of Congress</span> in
                complex federal litigation and achieving favorable outcomes through both litigation and negotiation.
              </p>
              <p>
                I understand that disputes can be stressful, time-consuming, and expensive. Mediation offers a
                faster, more cost-effective path to resolution while keeping you in control of the outcome.
              </p>
            </div>
          </div>

          {/* Decorative pull quote */}
          <div className="relative scroll-animate opacity-0" style={{ animationDelay: "200ms" }}>
            <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-sage-100 to-gold-50 p-10 lg:p-12 flex items-center">
              <blockquote className="font-display text-2xl lg:text-3xl text-warm-gray-800 leading-snug italic">
                &ldquo;Legal counsel for four Members of Congress in complex federal litigation&rdquo;
                <footer className="mt-6 text-base text-warm-gray-500 not-italic font-sans">
                  — Proven Experience
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CREDENTIALS SECTION ===== */}
      <section
        id="credentials"
        className="relative py-24 lg:py-32 px-6 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #446138 0%, #1E2A3A 100%)" }}
      >
        {/* Organic gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sage-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gold-500/15 rounded-full blur-[80px]" />

        {/* Topographic pattern overlay */}
        <div className="absolute inset-0 bg-topo opacity-30" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl text-white mb-4 scroll-animate opacity-0">
              Proven Track Record
            </h2>
            <p className="text-sage-200 text-lg scroll-animate opacity-0" style={{ animationDelay: "100ms" }}>
              Experience that sets us apart
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "10+", label: "Jury Trials", sublabel: "Zero Losses" },
              { number: "4", label: "Members of Congress", sublabel: "Represented as Counsel" },
              { number: "100%", label: "Confidential", sublabel: "Always" },
            ].map((stat, i) => (
              <div
                key={i}
                className="relative group p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500 scroll-animate opacity-0"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sage-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 text-center">
                  <div className="text-5xl lg:text-6xl font-display text-white mb-2 stat-number">
                    {stat.number}
                  </div>
                  <div className="text-lg text-sage-300 font-medium">{stat.label}</div>
                  <div className="text-sm text-slate-400 mt-1">{stat.sublabel}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Undefeated badge */}
          <div className="mt-16 text-center scroll-animate opacity-0" style={{ animationDelay: "400ms" }}>
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/10">
              <svg className="w-8 h-8 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xl font-semibold text-white">Undefeated in Jury Trials</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="py-24 lg:py-32 px-6 bg-cloud-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sage-600 font-medium tracking-wide uppercase text-sm scroll-animate opacity-0">
              Our Services
            </span>
            <h2 className="font-display text-4xl lg:text-5xl text-warm-gray-900 mt-4 scroll-animate opacity-0" style={{ animationDelay: "100ms" }}>
              Tailored Mediation Solutions
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Business Disputes */}
            <div className="rounded-3xl bg-sage-50 p-8 group hover-glow relative overflow-hidden scroll-animate opacity-0">
              <div className="absolute inset-0 bg-gradient-to-br from-sage-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-sage-100 flex items-center justify-center mb-5 group-hover:bg-sage-200 transition-colors">
                  <svg className="w-7 h-7 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-warm-gray-900 mb-3">Business Disputes</h3>
                <p className="text-warm-gray-600">
                  Commercial disputes, partnership conflicts, contract disagreements handled with discretion.
                </p>
              </div>
            </div>

            {/* Employment Conflicts */}
            <div className="rounded-3xl bg-terracotta-50 p-8 group hover-glow scroll-animate opacity-0" style={{ animationDelay: "100ms" }}>
              <div className="w-14 h-14 rounded-xl bg-terracotta-100 flex items-center justify-center mb-5 group-hover:bg-terracotta-200 transition-colors">
                <svg className="w-7 h-7 text-terracotta-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-warm-gray-900 mb-3">Employment Conflicts</h3>
              <p className="text-warm-gray-600">
                Workplace disputes, wrongful termination claims, discrimination matters resolved efficiently.
              </p>
            </div>

            {/* Family Law */}
            <div className="rounded-3xl bg-gold-50 p-8 group hover-glow scroll-animate opacity-0" style={{ animationDelay: "200ms" }}>
              <div className="w-14 h-14 rounded-xl bg-gold-100 flex items-center justify-center mb-5 group-hover:bg-gold-200 transition-colors">
                <svg className="w-7 h-7 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-warm-gray-900 mb-3">Family Law</h3>
              <p className="text-warm-gray-600">
                Divorce, custody, parenting plans resolved with sensitivity and care for all parties.
              </p>
            </div>

            {/* Civil Matters */}
            <div className="rounded-3xl bg-warm-gray-100 p-8 group hover-glow scroll-animate opacity-0" style={{ animationDelay: "300ms" }}>
              <div className="w-14 h-14 rounded-xl bg-warm-gray-200 flex items-center justify-center mb-5 group-hover:bg-warm-gray-300 transition-colors">
                <svg className="w-7 h-7 text-warm-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-warm-gray-900 mb-3">Civil Matters</h3>
              <p className="text-warm-gray-600">
                Contract disputes, property disagreements, insurance claims requiring neutral facilitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY MEDIATION SECTION ===== */}
      <section className="py-24 lg:py-32 px-6 bg-cream relative overflow-hidden">
        {/* Flowing top transition */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cloud-white to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 scroll-animate opacity-0">
              <h2 className="font-display text-4xl lg:text-5xl text-warm-gray-900">
                Why Choose Mediation?
              </h2>
              <p className="text-lg text-warm-gray-600">
                Litigation can drain your time, resources, and energy. Mediation offers a better path forward.
              </p>

              {/* Benefit cards */}
              <div className="space-y-4">
                {[
                  { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "Cost-Effective", description: "Fraction of the cost of traditional litigation" },
                  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "Faster Resolution", description: "Resolve disputes in days or weeks, not years" },
                  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "You Stay in Control", description: "Craft your own solution rather than having one imposed" },
                  { icon: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z", title: "Completely Confidential", description: "Keep sensitive matters private and out of public record" },
                ].map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-5 p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-white hover:bg-white transition-all duration-300 hover:shadow-lg hover:shadow-sage-500/10"
                  >
                    <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-warm-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-warm-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating accent card */}
            <div className="relative scroll-animate opacity-0" style={{ animationDelay: "200ms" }}>
              <div className="absolute -top-6 -right-6 w-full h-full bg-sage-100 rounded-3xl animate-morph opacity-30" style={{ animationDuration: "12s" }} />
              <div className="relative p-10 rounded-3xl bg-gradient-to-br from-sage-600 to-sage-700 text-white">
                <h3 className="font-display text-3xl mb-6">The Courtroom Advantage</h3>
                <p className="text-sage-100 leading-relaxed text-lg">
                  Having tried over 10 jury trials without a loss, I understand what makes cases succeed or fail.
                  This courtroom perspective helps parties see their positions clearly and find realistic paths to resolution.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-7 h-7 text-gold-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gold-200 font-semibold">100% Success Rate</div>
                    <div className="text-sage-200 text-sm">In Jury Trials</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section id="process" className="py-24 lg:py-32 px-6 bg-cloud-white relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-sage-600 font-medium tracking-wide uppercase text-sm scroll-animate opacity-0">
              How It Works
            </span>
            <h2 className="font-display text-4xl lg:text-5xl text-warm-gray-900 mt-4 scroll-animate opacity-0" style={{ animationDelay: "100ms" }}>
              Your Path to Resolution
            </h2>
          </div>

          {/* Organic flowing timeline */}
          <div className="relative">
            {/* SVG curved path connecting steps */}
            <svg
              className="absolute top-12 left-0 right-0 w-full h-4 pointer-events-none hidden md:block"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="timeline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C9D7C1" />
                  <stop offset="50%" stopColor="#8FA583" />
                  <stop offset="100%" stopColor="#C9D7C1" />
                </linearGradient>
              </defs>
              <path
                d="M 16.67 5 Q 33 8 50 5 T 83.33 5"
                stroke="url(#timeline-gradient)"
                strokeWidth="0.5"
                fill="none"
                strokeDasharray="2,2"
                className="opacity-60"
              />
            </svg>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { num: 1, title: "Preparation", description: "Both parties prepare and I review case materials in advance to understand the key issues." },
                { num: 2, title: "Mediation Session", description: "Facilitated discussion to identify interests, explore options, and work toward solutions." },
                { num: 3, title: "Agreement", description: "Written agreement documenting the resolution reached by all parties, ready for implementation." },
              ].map((step, i) => (
                <div
                  key={i}
                  className="relative text-center group scroll-animate opacity-0"
                  style={{ animationDelay: `${(i + 1) * 150}ms` }}
                >
                  {/* Step number with organic shape */}
                  <div className="relative mx-auto mb-8">
                    <div className="w-24 h-24 rounded-full bg-sage-50 flex items-center justify-center mx-auto group-hover:bg-sage-100 transition-colors border-2 border-sage-200">
                      <span className="font-display text-4xl text-sage-600">{step.num}</span>
                    </div>
                    {/* Pulse ring on hover */}
                    <div className="absolute inset-0 rounded-full border-2 border-sage-300 opacity-0 group-hover:opacity-100 group-hover:animate-ring-pulse" />
                  </div>
                  <h3 className="text-xl font-semibold text-warm-gray-900 mb-3">{step.title}</h3>
                  <p className="text-warm-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-24 lg:py-32 px-6 overflow-hidden">
        {/* Rich gradient background */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #567A4A 0%, #446138 40%, #1E2A3A 100%)" }}
        />

        {/* Organic shape overlays */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gold-400/10 rounded-full blur-[80px] animate-organic-float" />
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-terracotta-400/10 rounded-full blur-[100px] animate-organic-float"
          style={{ animationDelay: "-2s" }}
        />

        {/* Dot grid pattern overlay */}
        <div className="absolute inset-0 bg-dot-grid opacity-20" />

        <div className="max-w-4xl mx-auto text-center relative z-10 scroll-animate opacity-0">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Ready to Find Your Path to Resolution?
          </h2>
          <p className="text-xl text-sage-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Take the first step toward resolving your dispute.
            Book your confidential mediation session today.
          </p>

          <a
            href="https://outlook.office.com/book/CleverMediation1@clevermediation.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-10 py-5 bg-white text-sage-800 rounded-full text-lg font-semibold hover:bg-cream transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:scale-105 btn-shine"
          >
            Book Your Mediation
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <div className="mt-8 flex items-center justify-center gap-6 text-sage-300">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Confidential
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Professional
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Results-Driven
            </span>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-deep-navy text-white relative overflow-hidden">
        {/* Top gradient accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sage-500 via-gold-400 to-terracotta-400" />

        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand column */}
            <div className="md:col-span-2">
              <div className="font-display text-3xl mb-4">
                Clever<span className="text-sage-400">Mediation</span>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-md">
                Professional mediation services with federal litigation experience.
                Resolving disputes with clarity and compassion.
              </p>
            </div>

            {/* Services column */}
            <div>
              <h4 className="font-semibold text-sage-300 mb-4">Services</h4>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Business Disputes
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Employment Conflicts
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Family Law
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Civil Matters
                  </Link>
                </li>
              </ul>
            </div>

            {/* Schedule column */}
            <div>
              <h4 className="font-semibold text-sage-300 mb-4">Schedule</h4>
              <a
                href="https://outlook.office.com/book/CleverMediation1@clevermediation.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sage-600 text-white rounded-full hover:bg-sage-500 transition-colors btn-shine"
              >
                Book Online
              </a>
              <p className="mt-4 text-slate-400 text-sm">nas@clevermediation.com</p>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; 2026 CleverMediation. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-slate-500 text-sm">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
