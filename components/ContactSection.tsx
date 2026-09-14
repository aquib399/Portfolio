"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../data/portfolio";
import { ContactFormData } from "../types/portfolio";
import { SpineTab } from "./SpineTab";
import {
  IconGitHub,
  IconLinkedIn,
  IconTwitter,
  IconMail,
  IconPhone,
  IconSend,
  IconCheck
} from "./Icons";

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    query: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.query.trim()
    ) {
      setErrorMessage("Please provide your name, email, and query message.");
      return;
    }

    // Basic email check
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    // Simulate brief network submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", query: "" });
    }, 800);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "github":
        return <IconGitHub size={22} />;
      case "linkedin":
        return <IconLinkedIn size={22} />;
      case "twitter":
        return <IconTwitter size={22} />;
      case "email":
        return <IconMail size={22} />;
      default:
        return <IconMail size={22} />;
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#E53826] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex border-3 border-[#111111] bg-[#F4EFEA] shadow-[8px_8px_0px_0px_#111111]">
          {/* Vertical Spine Tab */}
          <SpineTab label="CONTACT // INQUIRIES" theme="cream" side="left" />

          {/* Main Contact Body (Duotone Red Poster Homage) */}
          <div className="relative flex-1 overflow-hidden bg-[#E53826] p-6 text-[#F4EFEA] sm:p-10 md:p-14">
            {/* Halftone Texture Overlay */}
            <div className="halftone-dots pointer-events-none absolute inset-0 opacity-20" />

            <div className="relative z-10">
              {/* Top Banner */}
              <div className="mb-10 border-b-2 border-white pb-6">
                <span className="font-mono text-xs font-bold tracking-widest text-[#F4EFEA]/80 uppercase">
                  SECTION 06 // DIRECT DISPATCH & SOCIAL ARCHIVE
                </span>
                <h2 className="mt-2 text-4xl leading-none tracking-tight text-white sm:text-6xl md:text-7xl">
                  INITIATE DIALOGUE
                </h2>
                <p className="mt-2 max-w-2xl font-mono text-xs font-semibold tracking-wider text-[#F4EFEA]/90 uppercase sm:text-sm">
                  HAVE A COMPLEX ARCHITECTURE TO BUILD, A PRODUCT TO LAUNCH, OR
                  A COLLABORATION TO PROPOSE? SEND A DIRECT DISPATCH.
                </p>
              </div>

              {/* Grid: Left Column is Social Links & Duotone Portrait, Right Column is Interactive Form */}
              <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
                {/* Left Column: Direct Contacts & Duotone Visual Poster */}
                <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
                  {/* Duotone Portrait Poster Mockup */}
                  <div className="border-2 border-white bg-[#111111] p-3 shadow-[4px_4px_0px_0px_#111111]">
                    <div className="relative h-56 w-full overflow-hidden border border-white/40 sm:h-64">
                      <Image
                        src="/site/08-ipad-mockup-outro-contact.png"
                        alt="Aquib Alam Duotone Red Contact Poster"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute bottom-2 left-2 bg-[#E53826] px-2 py-0.5 font-mono text-[10px] tracking-wider text-white uppercase">
                        DISPATCH TERMINAL
                      </div>
                    </div>

                    <div className="px-1 pt-3">
                      <h4 className="font-display-condensed text-3xl leading-none text-white sm:text-4xl">
                        {PERSONAL_INFO.name}
                      </h4>
                      <p className="font-mono text-[11px] tracking-wider text-white/80 uppercase">
                        {PERSONAL_INFO.role} • {PERSONAL_INFO.location}
                      </p>
                    </div>
                  </div>

                  {/* Social Channel Directory */}
                  <div className="space-y-2.5">
                    <span className="mb-2 block font-mono text-[11px] font-bold tracking-widest text-white uppercase">
                      DIRECT CHANNELS:
                    </span>
                    {SOCIAL_LINKS.map((link) => (
                      <a
                        key={link.id}
                        href={link.url}
                        target={
                          link.url.startsWith("http") ? "_blank" : "_self"
                        }
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between border-2 border-[#111111] bg-[#F4EFEA] p-3 text-[#111111] shadow-[2px_2px_0px_0px_#111111] transition-all hover:translate-x-1.5 hover:bg-white"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[#E53826] transition-transform group-hover:scale-110">
                            {getSocialIcon(link.platform)}
                          </span>
                          <div>
                            <span className="font-display-condensed block text-lg leading-none">
                              {link.label}
                            </span>
                            {link.handle && (
                              <span className="font-mono text-[10px] text-[#78716c]">
                                {link.handle}
                              </span>
                            )}
                          </div>
                        </div>

                        <span className="font-mono text-xs font-bold text-[#E53826]">
                          CONNECT →
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Right Column: Interactive Contact Form */}
                <div className="flex flex-col justify-between border-2 border-white bg-[#F4EFEA] p-6 text-[#111111] shadow-[6px_6px_0px_0px_#111111] sm:p-8 md:p-10 lg:col-span-7">
                  <div>
                    <div className="mb-6 flex items-baseline justify-between border-b-2 border-[#111111] pb-3">
                      <span className="font-display-condensed text-2xl tracking-wide text-[#111111] sm:text-3xl">
                        TRANSMIT INQUIRY
                      </span>
                      <span className="font-mono text-xs font-bold text-[#E53826]">
                        [FORM SPEC: 04 INPUTS]
                      </span>
                    </div>

                    {submitted ? (
                      <div className="my-6 space-y-3 border-2 border-emerald-600 bg-emerald-50 p-6 text-emerald-950">
                        <div className="flex items-center gap-2 text-xl text-emerald-800">
                          <IconCheck size={24} className="text-emerald-700" />
                          <span>TRANSMISSION RECEIVED</span>
                        </div>
                        <p className="font-mono text-xs leading-relaxed">
                          Thank you for reaching out! Your query has been
                          successfully logged. I will review your message and
                          reply via email within 24 business hours.
                        </p>
                        <button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="mt-2 bg-emerald-700 px-3 py-1.5 font-mono text-xs tracking-wider text-white uppercase transition-colors hover:bg-emerald-800"
                        >
                          TRANSMIT ANOTHER MESSAGE
                        </button>
                      </div>
                    ) : (
                      <form
                        onSubmit={handleSubmit}
                        className="space-y-4 font-mono"
                      >
                        {errorMessage && (
                          <div className="border-2 border-red-600 bg-red-100 p-3 text-xs font-bold text-red-900">
                            ⚠️ {errorMessage}
                          </div>
                        )}

                        {/* Name Field */}
                        <div>
                          <label
                            htmlFor="name"
                            className="mb-1 block text-xs font-bold tracking-wider text-[#111111] uppercase"
                          >
                            YOUR NAME <span className="text-[#E53826]">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="e.g. Maya Chen"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border-2 border-[#111111] bg-white p-2.5 font-mono text-xs text-[#111111] placeholder:text-[#78716c]/50 focus:ring-2 focus:ring-[#E53826] focus:outline-none"
                          />
                        </div>

                        {/* Email Field */}
                        <div>
                          <label
                            htmlFor="email"
                            className="mb-1 block text-xs font-bold tracking-wider text-[#111111] uppercase"
                          >
                            YOUR EMAIL <span className="text-[#E53826]">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="e.g. maya@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border-2 border-[#111111] bg-white p-2.5 font-mono text-xs text-[#111111] placeholder:text-[#78716c]/50 focus:ring-2 focus:ring-[#E53826] focus:outline-none"
                          />
                        </div>

                        {/* Phone Field (Optional) */}
                        <div>
                          <label
                            htmlFor="phone"
                            className="mb-1 block text-xs font-bold tracking-wider text-[#111111] uppercase"
                          >
                            PHONE NUMBER{" "}
                            <span className="font-normal text-[#78716c]">
                              (OPTIONAL)
                            </span>
                          </label>
                          <div className="relative">
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              placeholder="e.g. +91 98765 43210"
                              value={formData.phone || ""}
                              onChange={handleChange}
                              className="w-full border-2 border-[#111111] bg-white p-2.5 font-mono text-xs text-[#111111] placeholder:text-[#78716c]/50 focus:ring-2 focus:ring-[#E53826] focus:outline-none"
                            />
                            <span className="absolute top-3 right-3 text-[#78716c]">
                              <IconPhone size={14} />
                            </span>
                          </div>
                        </div>

                        {/* Query / Message Field */}
                        <div>
                          <label
                            htmlFor="query"
                            className="mb-1 block text-xs font-bold tracking-wider text-[#111111] uppercase"
                          >
                            QUERY / MESSAGE{" "}
                            <span className="text-[#E53826]">*</span>
                          </label>
                          <textarea
                            id="query"
                            name="query"
                            rows={4}
                            required
                            placeholder="Tell me about your project, timeline, architecture needs, or collaboration idea..."
                            value={formData.query}
                            onChange={handleChange}
                            className="w-full resize-y border-2 border-[#111111] bg-white p-2.5 font-mono text-xs text-[#111111] placeholder:text-[#78716c]/50 focus:ring-2 focus:ring-[#E53826] focus:outline-none"
                          />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={loading}
                            className="font-display-condensed flex w-full cursor-pointer items-center justify-center gap-2 border-2 border-[#111111] bg-[#E53826] px-6 py-3 text-xl tracking-wider text-white shadow-[3px_3px_0px_0px_#111111] transition-colors hover:bg-[#111111] disabled:opacity-50"
                          >
                            {loading ? (
                              <span>TRANSMITTING...</span>
                            ) : (
                              <>
                                <span>SEND DISPATCH</span>
                                <IconSend size={18} />
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    )}
                  </div>

                  <div className="mt-6 flex justify-between border-t border-[#111111]/20 pt-6 font-mono text-[11px] text-[#78716c]">
                    <span>SECURITY: SSL ENCRYPTED</span>
                    <span>RESPONSE TIME: &lt; 24 HOURS</span>
                  </div>
                </div>
              </div>

              {/* Bottom Colophon / Thank You Homage */}
              <div className="mt-14 border-t-2 border-white pt-8 text-center">
                <div className="font-display-condensed mb-2 text-5xl leading-none tracking-tight text-white sm:text-7xl md:text-8xl">
                  THANK YOU
                </div>
                <p className="font-mono text-xs tracking-widest text-[#F4EFEA]/80 uppercase">
                  PORTFOLIO DESIGN & CODE BY {PERSONAL_INFO.name} • ALL RIGHTS
                  RESERVED © {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
