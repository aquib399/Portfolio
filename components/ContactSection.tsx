"use client";

import { sendContactForm } from "@/actions/contact";
import { ContactFormData } from "../types/query";
import { portfolio } from "../data/portfolio";
import React, { useState } from "react";
import { SpineTab } from "./SpineTab";
import Image from "next/image";
import Link from "next/link";
import {
  IconMail,
  IconPhone,
  IconSend,
  IconCheck,
  IconGitHub,
  IconTwitter,
  IconLinkedIn
} from "./Icons";

const data = portfolio.personal;
const socialLinks = portfolio.social;

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

  // Use a portrait from portfolio data instead of hardcoding an image.
  const contactMedia =
    data.media.portrait.find((media) => media.id.includes("b-w")) ??
    data.media.portrait[0];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.query.trim()
    ) {
      setErrorMessage("Please provide your name, email, and query message.");
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const resp = await sendContactForm(formData);

      if (resp.type === "error") {
        setErrorMessage(
          resp.message ||
            "An error occurred while submitting the form. Please try again."
        );
        return;
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        query: ""
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Error sending contact form:", error);

      setErrorMessage(
        "An error occurred while submitting the form. Please try again."
      );
    } finally {
      setLoading(false);
    }
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
      className="border-border bg-primary w-full border-b-2 px-4 py-16 transition-colors sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="border-border bg-secondary text-primary-foreground flex border-3 shadow-[8px_8px_0px_0px_var(--border)] transition-colors">
          <SpineTab
            label="CONTACT // INQUIRIES"
            theme="background"
            side="left"
          />
          {/* Main Education Body */}
          <div className="bg-card text-card-foreground relative flex-1 overflow-hidden p-6 sm:p-10 md:p-14">
            {/* Celestial Starry Night Background Pattern */}
            <div className="halftone-dots text-card-foreground pointer-events-none absolute inset-0 opacity-20" />
            <div className="relative z-10">
              {/* Header */}
              <div className="border-primary-foreground/80 mb-10 border-b-2 pb-6">
                <h2 className="text-foreground font-display-wide mt-2 text-4xl leading-none tracking-tight sm:text-6xl md:text-7xl">
                  Contact
                </h2>
              </div>

              <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
                {/* Left Column */}
                <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
                  {/* Personal Media */}
                  {contactMedia && (
                    <div className="border-primary-foreground/60 border-2 bg-black p-3 shadow-[4px_4px_0px_0px_var(--border)]">
                      <div className="border-primary-foreground/40 relative h-56 w-full overflow-hidden border sm:h-64">
                        <Image
                          src={contactMedia.url}
                          alt={contactMedia.alt}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />

                        <div className="bg-primary text-primary-foreground absolute bottom-2 left-2 px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider uppercase">
                          DISPATCH TERMINAL
                        </div>
                      </div>

                      <div className="px-1 pt-3">
                        <h4 className="font-display-condensed text-3xl leading-none text-white sm:text-4xl">
                          {data.name}
                        </h4>

                        <p className="font-mono text-[11px] tracking-wider text-white/80 uppercase">
                          {data.role} • {data.location}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Social Links */}
                  <div className="space-y-2.5">
                    {socialLinks.map((link) => (
                      <Link
                        key={link.id}
                        href={link.url}
                        target={
                          link.url.startsWith("http") ? "_blank" : "_self"
                        }
                        rel={
                          link.url.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group border-border bg-card text-card-foreground hover:bg-background flex items-center justify-between border-2 p-3 shadow-[2px_2px_0px_0px_var(--border)] transition-all hover:translate-x-1.5"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-primary transition-transform group-hover:scale-110">
                            {getSocialIcon(link.platform)}
                          </span>

                          <div className="leading-2">
                            <span className="font-display-condensed block text-lg leading-none">
                              {link.label}
                            </span>

                            {link.handle && (
                              <span className="text-muted-foreground font-mono text-[10px]">
                                {link.handle}
                              </span>
                            )}
                          </div>
                        </div>

                        <span className="text-primary font-mono text-xs font-bold">
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Contact Form */}
                <div className="border-primary bg-card text-card-foreground flex flex-col justify-between border-2 p-6 shadow-[6px_6px_0px_0px_var(--border)] sm:p-8 md:p-10 lg:col-span-7">
                  <div>
                    <div className="border-border mb-6 flex items-baseline justify-between border-b-2 pb-3">
                      <span className="font-display-condensed text-card-foreground text-2xl tracking-wide sm:text-3xl">
                        TRANSMIT INQUIRY
                      </span>
                    </div>

                    {submitted ? (
                      <div className="my-6 space-y-3 border-2 border-emerald-600 bg-emerald-50 p-6 text-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-200">
                        <div className="font-display-wide flex items-center gap-2 text-xl text-emerald-800 dark:text-emerald-300">
                          <IconCheck size={24} className="text-emerald-600" />

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
                          className="mt-2 cursor-pointer bg-emerald-700 px-3 py-1.5 font-mono text-xs tracking-wider text-white uppercase transition-colors hover:bg-emerald-800"
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
                          <div className="border-2 border-red-600 bg-red-100 p-3 text-xs font-bold text-red-900 dark:bg-red-950/40 dark:text-red-200">
                            {errorMessage}
                          </div>
                        )}

                        {/* Name */}
                        <div>
                          <label
                            htmlFor="name"
                            className="text-card-foreground mb-1 block text-xs font-bold tracking-wider uppercase"
                          >
                            YOUR NAME <span className="text-primary">*</span>
                          </label>

                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="e.g. Maya Chen"
                            value={formData.name}
                            onChange={handleChange}
                            className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-primary w-full border-2 p-2.5 font-mono text-xs focus:ring-2 focus:outline-none"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label
                            htmlFor="email"
                            className="text-card-foreground mb-1 block text-xs font-bold tracking-wider uppercase"
                          >
                            YOUR EMAIL <span className="text-primary">*</span>
                          </label>

                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="e.g. maya@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-primary w-full border-2 p-2.5 font-mono text-xs focus:ring-2 focus:outline-none"
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label
                            htmlFor="phone"
                            className="text-card-foreground mb-1 block text-xs font-bold tracking-wider uppercase"
                          >
                            PHONE NUMBER{" "}
                            <span className="text-muted-foreground font-normal">
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
                              className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-primary w-full border-2 p-2.5 font-mono text-xs focus:ring-2 focus:outline-none"
                            />

                            <span className="text-muted-foreground absolute top-3 right-3">
                              <IconPhone size={14} />
                            </span>
                          </div>
                        </div>

                        {/* Query */}
                        <div>
                          <label
                            htmlFor="query"
                            className="text-card-foreground mb-1 block text-xs font-bold tracking-wider uppercase"
                          >
                            QUERY / MESSAGE{" "}
                            <span className="text-primary">*</span>
                          </label>

                          <textarea
                            id="query"
                            name="query"
                            rows={5}
                            required
                            placeholder="Tell me about your project, timeline, architecture needs, or collaboration idea..."
                            value={formData.query}
                            onChange={handleChange}
                            className="border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-primary w-full resize-y border-2 p-2.5 font-mono text-xs focus:ring-2 focus:ring-offset-0 focus:outline-none"
                          />
                        </div>

                        {/* Submit */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={loading}
                            className="font-display-condensed border-border bg-primary text-primary-foreground hover:bg-foreground hover:text-background flex w-full cursor-pointer items-center justify-center gap-2 border-2 px-6 py-3 text-xl tracking-wider shadow-[3px_3px_0px_0px_var(--border)] transition-all active:translate-x-0.5 active:translate-y-0.5 disabled:opacity-50"
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

                  <div className="border-border/20 text-muted-foreground mt-6 flex justify-between border-t pt-6 font-mono text-[11px]">
                    <span>
                      {data.contactMeta?.security ?? "SECURITY: SSL ENCRYPTED"}
                    </span>
                    <span>
                      {data.contactMeta?.responseTime ??
                        "RESPONSE TIME: < 24 HOURS"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-primary-foreground/60 mt-14 border-t-2 pt-8 text-center">
                <div className="font-display-condensed text-foreground mb-2 text-5xl leading-none tracking-tight sm:text-7xl md:text-8xl">
                  THANK YOU
                </div>

                <p className="text-foreground/80 font-mono text-xs tracking-widest uppercase">
                  PORTFOLIO DESIGN & CODE BY {data.name} • ALL RIGHTS RESERVED ©{" "}
                  {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
