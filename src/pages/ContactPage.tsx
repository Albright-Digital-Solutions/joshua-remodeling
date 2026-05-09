import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import {
  User, Phone, Mail, MapPin, Wrench, MessageSquare,
  Send, CheckCircle, AlertCircle, ChevronDown
} from "lucide-react";
import { TexturedSection } from "../components/TexturedSection";

const SERVICES = [
  "Drywall Repair & Painting",
  "Minor Plumbing Repairs",
  "Fixture Installation",
  "Carpentry & Woodwork",
  "Rental Make-Ready",
  "Window & Door Repair",
  "General Handyman / Other",
];

interface FormData {
  firstName: string;
  lastName:  string;
  phone:     string;
  email:     string;
  address:   string;
  service:   string;
  message:   string;
  smsOptIn:  boolean;
}

const EMPTY: FormData = {
  firstName: "", lastName: "", phone: "", email: "",
  address: "", service: "", message: "", smsOptIn: false,
};

type Status = "idle" | "submitting" | "success" | "error";

function Field({
  label, icon, required = false,
  children,
}: {
  label: string; icon: React.ReactNode; required?: boolean; children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
        <span className="text-orange-500">{icon}</span>
        {label}{required && <span className="text-orange-500">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 " +
  "focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-shadow text-sm";

export function ContactPage() {
  const [form,   setForm]   = useState<FormData>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const set = (key: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(prev => ({ ...prev, [key]: e.target.value }));

  const validate = (): boolean => {
    const errs: typeof errors = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required";
    if (!form.lastName.trim())  errs.lastName  = "Last name is required";
    if (!form.phone.trim())     errs.phone     = "Phone number is required";
    if (!form.email.trim())     errs.email     = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.service)          errs.service   = "Please select a service";
    if (!form.message.trim())   errs.message   = "Please describe your project";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    // Submit to Formspree (free, no backend needed) or replace with your own endpoint
    try {
      const res = await fetch("https://formspree.io/f/xpwpbkdo", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          "First Name":  form.firstName,
          "Last Name":   form.lastName,
          "Phone":       form.phone,
          "Email":       form.email,
          "Address":     form.address,
          "Service":     form.service,
          "Message":     form.message,
          "SMS Opt-In":  form.smsOptIn ? "Yes — consented" : "No",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm(EMPTY);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <TexturedSection className="min-h-screen">
      {/* ── Hero ── */}
      <section className="bg-gray-900 pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(249,115,22,0.18) 0%, transparent 60%)" }} />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 font-bold uppercase tracking-widest text-sm mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight"
          >
            Request a Free<br />
            <span className="text-orange-500">Estimate</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Fill out the form below and Joshua's team will reach out within one business day.
          </motion.p>

          {/* Quick contact strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <a href="tel:+12109925170"
              className="flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-full font-bold transition-colors">
              <Phone className="w-4 h-4" /> (210) 992-5170
            </a>
            <a href="mailto:Joshsanguineti@gmail.com"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-full font-semibold transition-colors">
              <Mail className="w-4 h-4" /> Email Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-14 text-center"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-5" />
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Message Sent!</h2>
              <p className="text-gray-500 text-lg mb-8">
                Thanks for reaching out. Joshua's team will contact you within one business day.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-xl font-bold transition-colors"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 space-y-6"
              noValidate
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Project Details</h2>
                <p className="text-gray-500 text-sm">All fields marked <span className="text-orange-500 font-semibold">*</span> are required.</p>
              </div>

              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="First Name" icon={<User className="w-3.5 h-3.5" />} required>
                  <input
                    type="text" value={form.firstName} onChange={set("firstName")}
                    placeholder="Joshua" className={inputCls}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.firstName}</p>}
                </Field>
                <Field label="Last Name" icon={<User className="w-3.5 h-3.5" />} required>
                  <input
                    type="text" value={form.lastName} onChange={set("lastName")}
                    placeholder="Sanguineti" className={inputCls}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.lastName}</p>}
                </Field>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Phone Number" icon={<Phone className="w-3.5 h-3.5" />} required>
                  <input
                    type="tel" value={form.phone} onChange={set("phone")}
                    placeholder="(210) 555-0100" className={inputCls}
                  />
                  {errors.phone && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
                </Field>
                <Field label="Email Address" icon={<Mail className="w-3.5 h-3.5" />} required>
                  <input
                    type="email" value={form.email} onChange={set("email")}
                    placeholder="you@example.com" className={inputCls}
                  />
                  {errors.email && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                </Field>
              </div>

              {/* Address */}
              <Field label="Property Address" icon={<MapPin className="w-3.5 h-3.5" />}>
                <input
                  type="text" value={form.address} onChange={set("address")}
                  placeholder="1234 Oak Lane, San Antonio, TX 78201" className={inputCls}
                />
              </Field>

              {/* Service Dropdown */}
              <Field label="Service Needed" icon={<Wrench className="w-3.5 h-3.5" />} required>
                <div className="relative">
                  <select
                    value={form.service}
                    onChange={set("service")}
                    className={`${inputCls} appearance-none pr-10 cursor-pointer`}
                  >
                    <option value="">— Select a service —</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
                {errors.service && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.service}</p>}
              </Field>

              {/* Message */}
              <Field label="Tell Us About Your Project" icon={<MessageSquare className="w-3.5 h-3.5" />} required>
                <textarea
                  value={form.message} onChange={set("message")}
                  rows={5}
                  placeholder="Describe what you need done, approximate size, timeline, or any special requirements..."
                  className={`${inputCls} resize-none leading-relaxed`}
                />
                {errors.message && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
              </Field>

              {/* SMS Opt-In */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <div className="relative mt-0.5 flex-shrink-0">
                    <input
                      type="checkbox"
                      checked={form.smsOptIn}
                      onChange={e => setForm(prev => ({ ...prev, smsOptIn: e.target.checked }))}
                      className="sr-only peer"
                      id="sms-opt-in"
                    />
                    <div className="w-5 h-5 rounded border-2 border-orange-300 peer-checked:bg-orange-600 peer-checked:border-orange-600 transition-colors flex items-center justify-center">
                      {form.smsOptIn && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-gray-600 leading-relaxed">
                    <strong className="text-gray-800">SMS / Text Message Opt-In (Optional):</strong>{" "}
                    I agree to receive text messages from Joshua's Remodeling &amp; Repairs at the phone
                    number provided above. Messages may include estimate updates, appointment reminders,
                    and promotional offers. Message &amp; data rates may apply. Message frequency varies.
                    Reply <strong>STOP</strong> to unsubscribe at any time. Reply <strong>HELP</strong> for
                    help. By opting in you agree to our{" "}
                    <Link to="/terms" className="text-orange-600 hover:underline font-semibold">Terms &amp; Conditions</Link>
                    {" "}and{" "}
                    <Link to="/privacy" className="text-orange-600 hover:underline font-semibold">Privacy Policy</Link>.
                  </span>
                </label>
              </div>

              {/* Error banner */}
              {status === "error" && (
                <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  Something went wrong. Please call us directly at <a href="tel:+12109925170" className="font-bold underline">(210) 992-5170</a>.
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 disabled:bg-orange-300 text-white font-bold text-lg py-4 rounded-2xl transition-colors shadow-lg shadow-orange-200"
              >
                {status === "submitting" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send My Request
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                By submitting this form you agree to our{" "}
                <Link to="/terms" className="text-orange-500 hover:underline">Terms &amp; Conditions</Link>
                {" "}and{" "}
                <Link to="/privacy" className="text-orange-500 hover:underline">Privacy Policy</Link>.
              </p>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          {[
            { icon: <Phone className="w-5 h-5 text-orange-600" />, label: "Call or Text", value: "(210) 992-5170", href: "tel:+12109925170" },
            { icon: <Mail className="w-5 h-5 text-orange-600" />, label: "Email", value: "Joshsanguineti@gmail.com", href: "mailto:Joshsanguineti@gmail.com" },
            { icon: <MapPin className="w-5 h-5 text-orange-600" />, label: "Service Area", value: "San Antonio & Bexar County", href: undefined },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center"
            >
              <div className="flex justify-center mb-2">{item.icon}</div>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-1">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="text-sm font-bold text-gray-900 hover:text-orange-600 transition-colors">{item.value}</a>
              ) : (
                <p className="text-sm font-bold text-gray-900">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </TexturedSection>
  );
}
