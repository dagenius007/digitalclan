"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-brand-bright mb-4">
              Contact
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-cream leading-tight mb-6">
              Let&apos;s build
              <br />
              something great.
            </h2>
            <p className="text-muted leading-relaxed mb-10">
              Tell us about your project and we&apos;ll get back to you within
              one business day with a clear next step.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-3 text-sm text-muted">
                <Mail size={16} className="text-teal shrink-0" />
                hello@digitalclan.africa
              </div>
              <div className="flex items-center gap-3 text-sm text-muted">
                <MapPin size={16} className="text-teal shrink-0" />
                Africa — serving clients across the continent
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-start justify-center h-full py-10">
                <div className="w-10 h-10 rounded-full bg-brand-bright/10 flex items-center justify-center mb-6">
                  <ArrowRight size={18} className="text-brand-bright" />
                </div>
                <h3 className="text-2xl font-light text-cream mb-3">
                  Message received.
                </h3>
                <p className="text-muted text-sm">
                  We&apos;ll review your project and follow up within one
                  business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-muted mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Your name"
                      className="w-full bg-dark-card border border-dark-border rounded-sm px-4 py-3 text-sm text-cream placeholder-muted/50 focus:outline-none focus:border-brand-bright/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@company.com"
                      className="w-full bg-dark-card border border-dark-border rounded-sm px-4 py-3 text-sm text-cream placeholder-muted/50 focus:outline-none focus:border-brand-bright/40 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-muted mb-2">
                    Service of Interest
                  </label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    className="w-full bg-dark-card border border-dark-border rounded-sm px-4 py-3 text-sm text-cream focus:outline-none focus:border-brand-bright/40 transition-colors appearance-none"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="software-development">
                      Software Development
                    </option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="full-consultancy">Full Consultancy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-muted mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    rows={4}
                    placeholder="What are you trying to achieve?"
                    className="w-full bg-dark-card border border-dark-border rounded-sm px-4 py-3 text-sm text-cream placeholder-muted/50 focus:outline-none focus:border-brand-bright/40 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-bright text-white text-sm font-semibold rounded-sm hover:bg-brand-light transition-colors duration-200"
                >
                  Send Message
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
