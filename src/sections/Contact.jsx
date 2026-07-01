import { useState } from "react";
import { profile } from "../data/profile";
import Reveal from "../components/Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });

  const sectionClass = "section";
  const wrapClass = "glass rounded-3xl p-8 md:p-14 text-center relative overflow-hidden";
  const eyebrowClass = "font-mono text-sm text-[#1591DC] tracking-widest mb-3";
  const titleClass = "font-display text-display-lg font-semibold text-[#0F172A]";
  const subClass = "text-body text-[#475569] mt-4 max-w-md mx-auto";
  const btnWrapClass = "flex flex-wrap justify-center gap-4 mt-8";
  const primaryBtnClass = "px-6 py-3 rounded-2xl bg-[#1591DC] text-white text-sm font-medium hover:bg-[#0f76b8] transition-colors duration-200";
  const secondaryBtnClass = "px-6 py-3 rounded-2xl glass text-[#0F172A] text-sm font-medium hover:bg-white/80 transition-colors duration-200";
  const formClass = "mt-10 text-left space-y-4 max-w-md mx-auto";
  const inputClass = "w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-200 text-sm text-[#0F172A] focus:outline-none focus:border-[#1591DC]";
  const submitClass = "w-full px-6 py-3 rounded-xl bg-[#1591DC] text-white text-sm font-medium hover:bg-[#0f76b8] transition-colors duration-200";
  const externalRel = "noopener noreferrer";

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = "Portfolio contact from " + form.name;
    const body = form.message;
    window.location.href = "mailto:" + profile.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  };

  const updateName = (e) => setForm({ ...form, name: e.target.value });
  const updateMessage = (e) => setForm({ ...form, message: e.target.value });

  return (
    <section id="contact" className={sectionClass}>
      <Reveal className={wrapClass}>
        <span className="motif-frame w-40 h-40 -bottom-10 -left-10 hidden md:block" />

        <p className={eyebrowClass}>SYS.04 — CONTACT</p>
        <h2 className={titleClass}>Let's Build Something Useful</h2>
        <p className={subClass}>Open for collaboration, internship opportunities, or just a conversation about technology.</p>

        <div className={btnWrapClass}>
          {profile.email && <a href={"mailto:" + profile.email} className={primaryBtnClass}>Email</a>}
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel={externalRel} className={secondaryBtnClass}>LinkedIn</a>}
          {profile.github && <a href={profile.github} target="_blank" rel={externalRel} className={secondaryBtnClass}>GitHub</a>}
        </div>

        <form onSubmit={handleSubmit} className={formClass}>
          <input type="text" placeholder="Your name" value={form.name} onChange={updateName} className={inputClass} required />
          <textarea placeholder="Your message" rows={4} value={form.message} onChange={updateMessage} className={inputClass} required />
          <button type="submit" className={submitClass}>Send Message</button>
        </form>
      </Reveal>
    </section>
  );
}