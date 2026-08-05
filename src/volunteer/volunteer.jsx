import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";
import Footer from "../components/footer";

// ── SVG Icons ──────────────────────────────────────────────────────────────
const ClimateIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
  </svg>
);
const ReforestationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M17 8C8 10 5.9 16.17 3.82 19.82" />
    <path d="M3.82 19.82A9.99 9.99 0 0 0 13 22c5.52 0 10-4.48 10-10C23 6 17 2 12 2" />
    <path d="M12 2C9 7 9 12 12 17" />
  </svg>
);
const ReformsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const AdvocacyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M3 11l19-9-9 19-2-8-8-2z" />
  </svg>
);
const EducationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);
const WaterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
);
const PinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const BriefcaseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);
const CheckIcon = () => (
  <svg width="26" height="26" fill="none" stroke="#16a34a" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// ── Data ───────────────────────────────────────────────────────────────────
const STATS = [
  { val: "Trees Planted",  label: "Reforesting degraded land" },
  { val: "Volunteers",     label: "Active across nigeria" },
  { val: "States Reached", label: "Communities we serve" },
  { val: "Funds Raised",   label: "Directed into programs" },
];

const AREAS = [
  { icon: <ClimateIcon />,       title: "Climate Change",        desc: "Mobilizing nationwide action to reduce carbon footprints and promote sustainable living practices through local initiatives." },
  { icon: <ReforestationIcon />, title: "Reforestation",         desc: "Restoring natural habitats by planting native trees and managing forest health in critical biodiversity zones." },
  { icon: <ReformsIcon />,       title: "Environmental Reforms", desc: "Collaborating with policymakers to implement greener laws and support legislative changes for the environment." },
  { icon: <AdvocacyIcon />,      title: "Advocacy",              desc: "Amplifying voices for Earth. We campaign for environmental justice and public awareness on critical issues." },
  { icon: <EducationIcon />,     title: "Education",             desc: "Sharing knowledge and tools with schools and local communities to foster a culture of environmental stewardship." },
  { icon: <WaterIcon />,         title: "Water & Sanitation",    desc: "Ensuring access to clean water through community-led sanitation projects and river cleanup drives." },
];

const ROLES = [
  { badge: "ON-SITE", onSite: true,  title: "Tree Planting Coordinator",  location: "Nairobi, Kenya / Amazon Basin", desc: "Lead local communities in reforestation events and maintain nursery health in our regional hubs." },
  { badge: "REMOTE",  onSite: false, title: "Policy Advocate",            location: "Nigeria / Remote",            desc: "Research environmental policies and help draft advocacy letters for local and international government bodies." },
  { badge: "REMOTE",  onSite: false, title: "Digital Educator",           location: "Nigeria / Remote",            desc: "Produce engaging content about climate change for our digital platforms and nigerian audience." },
  { badge: "ON-SITE", onSite: true,  title: "Water & Sanitation Officer", location: "Kano, Nigeria",                 desc: "Support communities with borehole projects, water purification systems, and hygiene education." },
  { badge: "ON-SITE", onSite: true,  title: "Community Farm Trainer",     location: "Enugu, Nigeria",                desc: "Train smallholder farmers in sustainable, climate-resilient agricultural practices." },
  { badge: "REMOTE",  onSite: false, title: "Research Volunteer",         location: "Nigeria / Remote",            desc: "Assist the impact team with data collection, environmental research, and annual reporting." },
];

// ── Apply Modal ────────────────────────────────────────────────────────────
function ApplyModal({ role, onClose }) {
  const [name,      setName]      = React.useState("");
  const [email,     setEmail]     = React.useState("");
  const [message,   setMessage]   = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = () => { if (name && email) setSubmitted(true); };
  const handleOverlay = (e) => { if (e.target === e.currentTarget) onClose(); };

  return (
    <div
      onClick={handleOverlay}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/55"
    >
      <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl px-7 pt-8 pb-10">
        {/* drag handle */}
        <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-6" />

        {!submitted ? (
          <>
            <div className="mb-5">
              <span className={`inline-block text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded mb-2 ${role.onSite ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                {role.badge}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                Apply for<br />{role.title}
              </h3>
              <p className="text-xs text-gray-400 mt-1">📍 {role.location}</p>
            </div>

            <div className="flex flex-col gap-3 mb-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-1.5">Full Name *</label>
                <input
                  type="text" placeholder="Amina Yusuf" value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-1.5">Email Address *</label>
                <input
                  type="email" placeholder="amina@mail.com" value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-1.5">
                  Why do you want to volunteer?{" "}
                  <span className="text-gray-400 normal-case tracking-normal font-normal">(optional)</span>
                </label>
                <textarea
                  rows={3} placeholder="Tell us a bit about yourself..." value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all resize-none"
                />
              </div>
            </div>

            <button
              onClick={handleSubmit} disabled={!name || !email}
              className="w-full bg-green-700 hover:bg-green-800 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-all text-sm"
            >
              Send Application
            </button>
            <button
              onClick={onClose}
              className="w-full mt-3 text-gray-400 text-sm hover:text-gray-600 transition-colors bg-transparent border-none cursor-pointer"
            >
              Cancel
            </button>
          </>
        ) : (
          <div className="text-center py-5">
            <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-500 flex items-center justify-center mx-auto mb-4">
              <CheckIcon />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Application sent!</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-1">
              Thanks, <strong>{name.split(" ")[0]}</strong>. We'll review your application and get back to you at <strong>{email}</strong> within 3–5 business days.
            </p>
            <p className="text-sm text-green-600 italic mb-6">Together we're making nigeria greener. 🌿</p>
            <button
              onClick={onClose}
              className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3.5 rounded-xl transition-all text-sm"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function Volunteer() {
  const [language,   setLanguage]   = React.useState("English");
  const [activeLink, setActiveLink] = React.useState("Volunteer");
  const [showAll,    setShowAll]    = React.useState(false);
  const [applying,   setApplying]   = React.useState(null);

  const visibleRoles = showAll ? ROLES : ROLES.slice(0, 3);

  return (
    <div className="w-full bg-[#f6f7f5] min-h-screen overflow-hidden">
      <Nav language={language} setLanguage={setLanguage} activeLink={activeLink} setActiveLink={setActiveLink} />

      {/* ── HERO ── */}
      <div className="relative" style={{ paddingBottom: "80px" }}>
        <div className="relative overflow-hidden" style={{ height: "76vh", minHeight: 520 }}>
          <img
            src="/assets/Environment-Day.jpg"
            alt="Volunteers"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 35%" }}
          />
          {/* overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(160deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.38) 60%, rgba(0,0,0,0.62) 100%)" }}
          />

          {/* Hero text */}
          <div className="absolute inset-0 flex flex-col justify-center px-[5vw] max-w-2xl">
            {/* pill */}
            <div className="inline-flex items-center gap-1.5 bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              Active Movement 2024
            </div>

            <h1
              className="text-white font-extrabold leading-none mb-4 tracking-tight"
              style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.2rem)" }}
            >
              Be the Change<br />
              <span className="text-green-400">the Earth Needs</span>
            </h1>

            <p
              className="text-white/80 leading-relaxed mb-7 max-w-md"
              style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)" }}
            >
              Join our volunteers across nigeria dedicated to climate action, reforestation, and advocacy. Your contribution matters.
            </p>

            <div className="flex gap-3 flex-wrap">
              <a
                href="#roles"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-700/30 no-underline"
              >
                Join the Movement
              </a>
              <Link
                to="/project"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/60 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all no-underline"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>

        {/* ── STATS CARD ── */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-2 sm:grid-cols-4"
          style={{ width: "calc(100% - 48px)", maxWidth: 860 }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="py-8 px-4 text-center">
              <div
                className="text-green-600 font-extrabold leading-none mb-2"
                style={{ fontSize: "clamp(1.05rem, 2.2vw, 1.4rem)" }}
              >
                {s.val}
              </div>
              <div className="text-gray-500 text-sm font-normal">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── AREAS OF IMPACT ── */}
      <div className="max-w-5xl mx-auto px-5 pt-16 pb-14">
        {/* Header */}
        <div className="flex justify-between items-end flex-wrap gap-3 mb-9">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-green-600 mb-2">
              What we work on
            </p>
            <h2
              className="font-extrabold text-gray-900 leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.3rem)" }}
            >
              Areas of Impact
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mt-2 max-w-sm">
              Choose where you want to make a difference. We have diverse initiatives covering every aspect of environmental conservation.
            </p>
          </div>
          <Link
            to="/project"
            className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 font-semibold text-sm no-underline transition-colors flex-shrink-0"
          >
            Learn more about our work 
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {AREAS.map(area => (
            <div
              key={area.title}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-green-500 hover:shadow-lg hover:shadow-green-600/10 hover:-translate-y-1 transition-all duration-200"
            >
              <div
                className="rounded-full bg-green-50 flex items-center justify-center mb-5"
                style={{ width: 52, height: 52 }}
              >
                {area.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">{area.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── COLLECTIVE IMPACT — dark band ── */}
      <div className="bg-[#0d1f12] py-14 px-5">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-white font-extrabold text-center mb-9"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
          >
            Our Collective Impact
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {[
              { val: "Trees Planted",     label: "Reforesting degraded land" },
              { val: "Active Volunteers", label: "Giving their time" },
              { val: "States Impacted",   label: "Communities we serve" },
              { val: "CO₂ Offset",        label: "Emissions absorbed" },
            ].map((s, i) => (
              <div
                key={s.label}
                className="py-7 px-5 text-center"
                style={{
                  borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}
              >
                <div
                  className="text-green-400 font-black leading-none"
                  style={{ fontSize: "clamp(1.1rem, 2.4vw, 1.5rem)" }}
                >
                  {s.val}
                </div>
                <div
                  className="text-white/40 font-bold uppercase tracking-widest mt-2"
                  style={{ fontSize: "0.68rem" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── OPEN ROLES ── */}
      <div id="roles" className="max-w-5xl mx-auto px-5 pt-16 pb-20">
        <div className="flex justify-between items-start flex-wrap gap-3 mb-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-2">
              Now Recruiting
            </p>
            <h2
              className="font-extrabold text-gray-900 leading-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
            >
              Open Volunteer Roles
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Find a position that matches your skills and passion.
            </p>
          </div>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center gap-1 bg-transparent border-none cursor-pointer transition-colors"
          >
            {showAll ? "Show Less" : "View All Openings →"}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleRoles.map(role => (
            <div
              key={role.title}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex justify-between items-center mb-3.5">
                <span
                  className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded ${
                    role.onSite ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {role.badge}
                </span>
                <BriefcaseIcon />
              </div>

              <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">
                {role.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-3">
                {role.desc}
              </p>

              <div className="flex items-center gap-1 text-gray-400 text-xs mb-5">
                <PinIcon />
                {role.location}
              </div>

              <button
                onClick={() => setApplying(role)}
                className="w-full bg-green-700 hover:bg-green-800 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-lg transition-all hover:-translate-y-px"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {/* ── APPLY MODAL ── */}
      {applying && <ApplyModal role={applying} onClose={() => setApplying(null)} />}
    </div>
  );
}