import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { useI18n } from "../i18n/LanguageContext";

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body, * { font-family: 'DM Sans', sans-serif; }
  h1, h2, h3 { font-family: 'Lora', serif; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fillBar {
    from { width: 0; }
    to   { width: var(--w); }
  }
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes popIn {
    from { opacity: 0; transform: scale(0.94); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes stepIn {
    from { opacity: 0; transform: translateX(18px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes stepOut {
    from { opacity: 0; transform: translateX(-18px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  .fu   { animation: fadeUp 0.7s ease both; }
  .d1   { animation-delay: 0.12s; }
  .d2   { animation-delay: 0.24s; }
  .d3   { animation-delay: 0.36s; }
  .d4   { animation-delay: 0.48s; }
  .bar  { animation: fillBar 1.8s cubic-bezier(0.4,0,0.2,1) 0.3s both; }
  .pop  { animation: popIn 0.4s cubic-bezier(0.34,1.56,0.64,1) both; }
  .slide{ animation: slideDown 0.35s ease both; }
  .step-fwd  { animation: stepIn 0.3s ease both; }
  .step-back { animation: stepOut 0.3s ease both; }

  /* ── inputs ── */
  .field {
    border: 1.5px solid #d1d5db;
    border-radius: 8px;
    padding: 12px 14px;
    font-size: 0.92rem;
    color: #111;
    width: 100%;
    background: #fff;
    transition: border-color 0.2s, box-shadow 0.2s;
    font-family: 'DM Sans', sans-serif;
  }
  .field::placeholder { color: #9ca3af; }
  .field:focus {
    outline: none;
    border-color: #15803d;
    box-shadow: 0 0 0 3px rgba(21,128,61,0.1);
  }

  /* ── amount buttons ── */
  .amt {
    border: 1.5px solid #e5e7eb;
    border-radius: 8px;
    background: #fff;
    padding: 14px 10px;
    text-align: left;
    width: 100%;
    cursor: pointer;
    transition: border-color 0.18s, background 0.18s, box-shadow 0.18s, transform 0.15s;
  }
  .amt:hover {
    border-color: #15803d;
    box-shadow: 0 2px 8px rgba(21,128,61,0.1);
    transform: translateY(-1px);
  }
  .amt.on { border-color: #15803d; background: #15803d; }

  /* ── green button ── */
  .btn-green {
    background: #15803d;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    padding: 15px;
    width: 100%;
    font-family: 'DM Sans', sans-serif;
    letter-spacing: 0.01em;
    transition: background 0.2s, box-shadow 0.2s, transform 0.15s;
  }
  .btn-green:hover:not(:disabled) {
    background: #166534;
    box-shadow: 0 6px 24px rgba(21,128,61,0.28);
    transform: translateY(-1px);
  }
  .btn-green:active:not(:disabled) { transform: translateY(0); }
  .btn-green:disabled { opacity: 0.38; cursor: not-allowed; }

  /* ── frequency toggle ── */
  .freq-wrap { display: inline-flex; background: #f3f4f6; border-radius: 8px; padding: 4px; }
  .freq-btn {
    border: none; background: none; cursor: pointer;
    padding: 8px 18px; border-radius: 6px;
    font-size: 0.85rem; font-weight: 600;
    font-family: 'DM Sans', sans-serif;
    transition: all 0.2s;
    white-space: nowrap;
  }

  /* ── copy button ── */
  .copy-btn {
    border: 1.5px solid #d1d5db;
    border-radius: 6px;
    background: #fff;
    padding: 7px 14px;
    font-size: 0.8rem;
    font-weight: 600;
    color: #374151;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    transition: all 0.18s;
    flex-shrink: 0;
    white-space: nowrap;
  }
  .copy-btn:hover { border-color: #15803d; color: #15803d; background: #f0fdf4; }
  .copy-btn.copied { border-color: #15803d; color: #15803d; background: #f0fdf4; }

  /* ── back link ── */
  .back-link {
    background: none; border: none; padding: 0; cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem; font-weight: 500; color: #6b7280;
    display: inline-flex; align-items: center; gap: 6px;
    transition: color 0.15s; margin-bottom: 22px;
    text-decoration: none; letter-spacing: 0;
  }
  .back-link:hover { color: #111; }

  /* ── photo hover ── */
  .ph { overflow: hidden; }
  .ph img { transition: transform 0.5s ease; display: block; }
  .ph:hover img { transform: scale(1.04); }

  /* ── small label ── */
  .label-sm {
    font-size: 0.72rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.12em; color: #15803d;
    display: block;
  }

  /* ══════════════════════════════════
     RESPONSIVE LAYOUT CLASSES
  ══════════════════════════════════ */

  /* Main donate grid: stacked on mobile, side-by-side on desktop */
  .donate-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }
  @media (min-width: 860px) {
    .donate-grid { grid-template-columns: 1.1fr 0.9fr; gap: 28px; }
  }

  /* Amount button grid: 2 col mobile, 3 col desktop */
  .amt-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-bottom: 16px;
  }
  @media (min-width: 480px) {
    .amt-grid { grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
  }

  /* Name + email: stacked on mobile, side-by-side on tablet+ */
  .name-email-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    margin-bottom: 22px;
  }
  @media (min-width: 480px) {
    .name-email-grid { grid-template-columns: 1fr 1fr; }
  }

  /* Bank details: stacked on mobile, 2 col on tablet+ */
  .bank-meta-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    margin-bottom: 14px;
  }
  @media (min-width: 480px) {
    .bank-meta-grid { grid-template-columns: 1fr 1fr; }
  }

  /* Trust bar: scroll on mobile, 5-col grid on desktop */
  .trust-bar {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 0;
  }
  .trust-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 18px 16px;
    flex: 1 1 160px;
    min-width: 140px;
    border-right: 1px solid #f3f4f6;
  }
  .trust-item:last-child { border-right: none; }
  @media (max-width: 640px) {
    .trust-item { border-right: none; border-bottom: 1px solid #f3f4f6; flex: 1 1 45%; }
    .trust-item:last-child { border-bottom: none; }
  }

  /* Photo strip: 2 col on mobile, 4 col on desktop */
  .photo-strip {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 300px;
  }
  @media (min-width: 640px) {
    .photo-strip { grid-template-columns: repeat(4, 1fr); height: 220px; }
  }

  /* Impact grid: 2 col on mobile, 4 col on desktop */
  .impact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }
  @media (min-width: 640px) {
    .impact-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; }
  }

  /* Form card padding: tighter on mobile */
  .form-card {
    background: #fff;
    border-radius: 14px;
    border: 1px solid #e5e7eb;
    padding: 24px 20px;
  }
  @media (min-width: 480px) {
    .form-card { padding: 32px 28px; }
  }
  @media (min-width: 640px) {
    .form-card { padding: 36px 32px; }
  }

  /* Hero text sizing */
  .hero-title {
    font-size: clamp(1.9rem, 6vw, 4rem);
    line-height: 1.1;
    font-weight: 700;
    color: #fff;
    margin-bottom: 16px;
  }
  .hero-body {
    font-size: clamp(0.88rem, 2vw, 1.02rem);
    line-height: 1.75;
    color: rgba(255,255,255,0.78);
    margin-bottom: 24px;
  }

  /* Hero buttons */
  .hero-btns {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .hero-btn-primary {
    background: #15803d; color: #fff;
    padding: 12px 22px; border-radius: 8px;
    font-weight: 700; font-size: 0.9rem;
    text-decoration: none; white-space: nowrap;
  }
  .hero-btn-secondary {
    background: rgba(255,255,255,0.1); color: #fff;
    padding: 12px 22px; border-radius: 8px;
    font-weight: 500; font-size: 0.9rem;
    text-decoration: none; white-space: nowrap;
    border: 1px solid rgba(255,255,255,0.25);
  }

  /* Summary pill */
  .summary-pill {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 14px 18px;
    margin-bottom: 20px;
  }

  /* Section padding */
  .section-pad {
    padding: 48px 16px;
  }
  @media (min-width: 640px) {
    .section-pad { padding: 56px 24px; }
  }

  .give-pad {
    padding: 36px 16px 56px;
  }
  @media (min-width: 640px) {
    .give-pad { padding: 52px 24px 72px; }
  }
`;

const AMOUNTS = [
  { val: 5000,   display: "₦5,000",   tag: "Plants 2 trees" },
  { val: 10000,  display: "₦10,000",  tag: "Clean water for 5" },
  { val: 25000,  display: "₦25,000",  tag: "Feeds a family" },
  { val: 50000,  display: "₦50,000",  tag: "Trains a farmer" },
  { val: 100000, display: "₦100,000", tag: "Restores ½ hectare" },
  { val: 250000, display: "₦250,000", tag: "Solar for one home" },
];

const BANK = {
  name: "Speed Foundation NGO",
  bank: "GTBank",
  number: "0123456789",
};

const TRUST = [
  {
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    title: "Secure payments", sub: "256-bit SSL encrypted",
  },
  {
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: "CAC Registered", sub: "Verified non-profit",
  },
  {
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    title: "Fully audited", sub: "Annual public reports",
  },
  {
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    title: "Nationwide reach", sub: "Across nigeria",
  },
  {
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="4" x2="7" y2="20"/><line x1="17" y1="4" x2="17" y2="20"/><line x1="7" y1="4" x2="17" y2="20"/><line x1="4" y1="10" x2="20" y2="10"/><line x1="4" y1="14" x2="20" y2="14"/></svg>,
    title: "Programs first", sub: "Direct impact",
  },
];

export default function Donate() {
  const { t } = useI18n();
  const [freq, setFreq]             = React.useState("once");
  const [selected, setSelected]     = React.useState(null);
  const [custom, setCustom]         = React.useState("");
  const [step, setStep]             = React.useState(1);
  const [name, setName]             = React.useState("");
  const [email, setEmail]           = React.useState("");
  const [copied, setCopied]         = React.useState(false);
  const [confirmed, setConfirmed]   = React.useState(false);
  const [dir, setDir]               = React.useState("fwd");

  const amount     = custom ? Number(custom.replace(/\D/g, "")) : (selected || 0);
  const displayAmt = "₦" + (amount || 0).toLocaleString();
  const animClass  = dir === "fwd" ? "step-fwd" : "step-back";

  const handlePresetClick = (val) => {
    setSelected(val); setCustom("");
    setDir("fwd"); setStep(2);
  };

  const goBack = () => {
    setDir("back"); setStep(1); setConfirmed(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(BANK.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleComplete = () => setConfirmed(true);

  return (
    <>
      <style>{STYLES}</style>
      <div style={{ background: "#f7f7f5", minHeight: "100vh" }}>
        <Nav />

        {/* ── HERO ── */}
        <div style={{ position: "relative", height: "84vh", minHeight: 480, overflow: "hidden" }}>
          <img src="/assets/afforestation.jpg" alt="Reforestation"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.1) 100%)" }} />

          <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", alignItems: "center", padding: "0 5vw" }}>
            <div style={{ maxWidth: 560, width: "100%" }}>
              <span className="fu label-sm" style={{ color: "#86efac", marginBottom: 14, display: "block" }}>
                {t("Speed Foundation — Donate")}
              </span>
              <h1 className="fu d1 hero-title">{t("Help Us Heal")}<br />{t("nigeria's Land")}</h1>
              <p className="fu d2 hero-body" style={{ maxWidth: 420 }}>
                {t("We plant trees, restore water sources, and train communities across nigeria. Real, lasting change.")}
              </p>

              {/* fundraising bar */}
              <div className="fu d3" style={{ maxWidth: 380, marginBottom: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem" }}>{t("₦24,000 raised of ₦100,000 goal")}</span>
                  <span style={{ color: "#86efac", fontSize: "0.8rem", fontWeight: 700 }}>24%</span>
                </div>
                <div style={{ height: 5, background: "rgba(255,255,255,0.18)", borderRadius: 99, overflow: "hidden" }}>
                  <div className="bar" style={{ "--w": "24%", height: "100%", background: "#22c55e", borderRadius: 99 }} />
                </div>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", marginTop: 5 }}>{t("Generous donors giving towards this year's goal")}</p>
              </div>

              <div className="fu d4 hero-btns">
                <a href="#give" className="hero-btn-primary">{t("Donate Now")}</a>
                <Link to="/volunteer" className="hero-btn-secondary">{t("Volunteer Instead")}</Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── TRUST BAR ── */}
        <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 1060, margin: "0 auto", padding: "0 16px" }}>
            <div className="trust-bar">
              {TRUST.map((t) => (
                <div key={t(t.title)} className="trust-item">
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: "#f0fdf4", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {t.svg}
                  </div>
                  <div>
                    <p style={{ fontSize: "0.86rem", fontWeight: 700, color: "#111", marginBottom: 1 }}>{t(t.title)}</p>
                    <p style={{ fontSize: "0.72rem", color: "#6b7280" }}>{t(t.sub)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── MAIN FORM + SIDEBAR ── */}
        <div id="give" className="give-pad" style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div className="donate-grid">

            {/* LEFT: FORM */}
            <div className="form-card">
              <h2 style={{ fontSize: "clamp(40px, 3vw, 1.85rem)", color: "#111", marginBottom: 6, fontWeight: 700 }}>
                {t("Make a Donation")}
              </h2>
              <p style={{ color: "#6b7280", fontSize: "1.3rem", marginBottom: 24, lineHeight: 1.65 }}>
                {t("Choose an amount — or type your own. Every naira is traceable to real outcomes.")}
              </p>

              {/* STEP 1 */}
              {step === 1 && (
                <div key="s1" className={animClass}>
                  <div className="freq-wrap" style={{ marginBottom: 20 }}>
                    {[["once","Give Once"],["monthly","Give Monthly"]].map(([v,l]) => (
                      <button key={v} className="freq-btn" onClick={() => setFreq(v)}
                        style={{ background: freq===v?"#fff":"transparent", color: freq===v?"#111":"#6b7280", boxShadow: freq===v?"0 5px 9px rgba(0,0,0,0.1)":"none" }}>
                        {l}
                      </button>
                    ))}
                  </div>

                  <div className="amt-grid">
                    {AMOUNTS.map(a => (
                      <button key={t(a.val)} className={`amt ${selected===a.val&&!custom?"on":""}`}
                        onClick={() => handlePresetClick(a.val)}>
                        <div style={{ fontWeight: 500, fontSize: "1.40rem", marginBottom: 9, color: selected===a.val&&!custom?"#fff":"#111" }}>
                          {t(a.display)}
                        </div>
                        <div style={{ fontSize: "1rem", color: selected===a.val&&!custom?"rgba(255,255,255,0.72)":"#9ca3af" }}>
                          {t(a.tag)}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
                    <span style={{ fontSize: "1.46rem", color: "#9ca3af", fontWeight: 500, whiteSpace: "nowrap" }}>{t("or enter your own")}</span>
                    <div style={{ flex: 1, height: 2, background: "#e5e7eb" }} />
                  </div>

                  <div style={{ position: "relative", marginBottom: custom && amount > 0 ? 14 : 0 }}>
                    <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontWeight: 700, color: "#374151", fontSize: "0.9rem" }}>₦</span>
                    <input className="field" type="text" placeholder={t("Type an amount")}
                      value={custom} onChange={e => { setCustom(e.target.value); setSelected(null); }}
                      style={{ paddingLeft: 30 }} />
                  </div>

                  {custom && amount > 0 && (
                    <div className="slide">
                      <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, padding: "10px 14px", marginBottom: 12, display: "flex", gap: 8, alignItems: "center" }}>
                        <span>🌱</span>
                        <p style={{ fontSize: "0.83rem", fontWeight: 600, color: "#15803d" }}>
                          {displayAmt}{freq==="monthly"?"/mo":""} — {AMOUNTS.find(a=>a.val===amount)?.tag ?? `approx. ${Math.floor(amount/2500)} tree plantings`}
                        </p>
                      </div>
                      <button className="btn-green" onClick={() => { setDir("fwd"); setStep(2); }}>
                        Continue with {displayAmt}
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div key="s2" className={animClass}>
                  <button className="back-link" onClick={goBack}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5M12 5l-7 7 7 7"/>
                    </svg>
                    {t("Change amount")}
                  </button>

                  <div className="summary-pill">
                    <div>
                      <p style={{ fontSize: "0.68rem", color: "#9ca3af", marginBottom: 2, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em" }}>{t("Amount")}</p>
                      <p style={{ fontSize: "clamp(1.3rem, 4vw, 1.65rem)", fontWeight: 700, color: "#111", fontFamily: "Lora, serif", lineHeight: 1 }}>{displayAmt}</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p style={{ fontSize: "0.68rem", color: "#9ca3af", marginBottom: 2, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em" }}>{t("Frequency")}</p>
                      <p style={{ fontSize: "0.92rem", fontWeight: 700, color: "#374151" }}>{freq==="once"?"One-time":"Monthly"}</p>
                    </div>
                  </div>

                  <div className="name-email-grid">
                    <div>
                      <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, color: "#374151", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>{t("Full Name")}</label>
                      <input className="field" type="text" placeholder={t("Amina Yusuf")} value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, color: "#374151", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>{t("Email *")}</label>
                      <input className="field" type="email" placeholder={t("amina@mail.com")} value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                  </div>

                  {/* Bank details */}
                  <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 10, padding: "16px 18px", marginBottom: 18 }}>
                    <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "#374151", textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 14 }}>
                      {t("Transfer to this account")}
                    </p>
                    <div className="bank-meta-grid">
                      <div>
                        <p style={{ fontSize: "0.68rem", color: "#9ca3af", marginBottom: 3 }}>{t("Account Name")}</p>
                        <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "#111" }}>{t(BANK.name)}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: "0.68rem", color: "#9ca3af", marginBottom: 3 }}>{t("Bank")}</p>
                        <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "#111" }}>{BANK.bank}</p>
                      </div>
                    </div>
                    <div>
                      <p style={{ fontSize: "0.68rem", color: "#9ca3af", marginBottom: 5 }}>{t("Account Number")}</p>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#fff", border: "1.5px solid #d1d5db", borderRadius: 8, padding: "10px 14px" }}>
                        <span style={{ fontFamily: "monospace", fontSize: "clamp(0.95rem, 3vw, 1.12rem)", fontWeight: 700, color: "#111", letterSpacing: "0.1em", flex: 1 }}>
                          {BANK.number}
                        </span>
                        <button className={`copy-btn ${copied?"copied":""}`} onClick={handleCopy}>
                          {copied ? "✓ Copied" : "Copy"}
                        </button>
                      </div>
                    </div>
                    <p style={{ fontSize: "0.76rem", color: "#6b7280", marginTop: 10, lineHeight: 1.6 }}>
                      Transfer <strong style={{ color: "#15803d" }}>{displayAmt}</strong> {t("using your banking app, then tap the button below.")}
                    </p>
                  </div>

                  <button className="btn-green" onClick={handleComplete} disabled={!email}>
                    {t("I've made the transfer")}
                  </button>

                  {confirmed && (
                    <div className="pop" style={{ marginTop: 14, padding: "16px", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 10, textAlign: "center" }}>
                      <div style={{ fontSize: "1.6rem", marginBottom: 6 }}>🌳</div>
                      <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "#15803d", marginBottom: 4, fontFamily: "Lora, serif" }}>
                        Thank you{name ? `, ${name.split(" ")[0]}` : ""}
                      </p>
                      <p style={{ fontSize: "0.82rem", color: "#374151", lineHeight: 1.65, marginBottom: 4 }}>
                        {t("We'll confirm your transfer within 24 hours and send a receipt to")} <strong>{email || "your email"}</strong>.
                      </p>
                      <p style={{ fontSize: "0.78rem", color: "#16a34a", fontStyle: "italic" }}>
                        {t("Because of you, nigeria's land heals a little more today. 🌿")}
                      </p>
                    </div>
                  )}

                  {!confirmed && (
                    <p style={{ textAlign: "center", fontSize: "0.73rem", color: "#9ca3af", marginTop: 10 }}>
                      {t("🔒 256-bit SSL encrypted. Your details are safe.")}
                    </p>
                  )}
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div key="s3" className="pop" style={{ textAlign: "center", padding: "32px 0" }}>
                  <div style={{ width: 58, height: 58, borderRadius: "50%", background: "#f0fdf4", border: "2px solid #15803d", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
                    <svg width="25" height="25" fill="none" stroke="#15803d" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "Lora, serif", fontSize: "clamp(1.5rem, 4vw, 1.9rem)", color: "#111", marginBottom: 10, fontWeight: 700 }}>
                    Thank you{name ? `, ${name.split(" ")[0]}` : ""}!
                  </h3>
                  <p style={{ color: "#374151", marginBottom: 5, fontSize: "0.93rem" }}>
                    {t("Your donation of")} <strong>{displayAmt}</strong> {t("was received.")}
                  </p>
                  <p style={{ color: "#9ca3af", fontSize: "0.83rem", marginBottom: 8 }}>
                    {t("Receipt sent to")} <strong>{email}</strong>
                  </p>
                  <p style={{ fontSize: "0.84rem", color: "#15803d", fontStyle: "italic", marginBottom: 26 }}>
                    {t("Because of you, nigeria's land heals a little more today. 🌿")}
                  </p>
                  <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                    <button className="btn-green" style={{ width: "auto", padding: "11px 24px" }}
                      onClick={() => { setStep(1); setEmail(""); setName(""); setCustom(""); setSelected(null); setConfirmed(false); }}>
                      {t("Donate again")}
                    </button>
                    <Link to="/" style={{ padding: "11px 24px", borderRadius: 8, background: "#f3f4f6", color: "#374151", fontWeight: 600, textDecoration: "none", fontSize: "0.9rem" }}>
                      {t("Back to home")}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT: PHOTOS + STORIES */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div className="ph" style={{ borderRadius: 12, overflow: "hidden", position: "relative", height: 210 }}>
                <img src="/assets/water-help.webp" alt="Clean water project" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.62) 0%, transparent 55%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "14px 16px" }}>
                  <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.86rem", marginBottom: 2 }}>{t("Clean Water Project — Northern Nigeria")}</p>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.74rem" }}>{t("50,000 people now have access to safe water")}</p>
                </div>
              </div>

              <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", padding: "16px 18px" }}>
                <p style={{ color: "#374151", fontStyle: "italic", fontSize: "0.86rem", lineHeight: 1.72, marginBottom: 12 }}>
                  "My children no longer walk 5km every morning to fetch water. Speed Foundation changed our lives completely."
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#15803d", flexShrink: 0, fontSize: "0.8rem" }}>{t("AY")}</div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "0.83rem", color: "#111" }}>{t("Amina Yusuf")}</p>
                    <p style={{ fontSize: "0.72rem", color: "#15803d" }}>{t("Community Leader, Kano State")}</p>
                  </div>
                </div>
              </div>

              <div className="ph" style={{ borderRadius: 12, overflow: "hidden", position: "relative", height: 165 }}>
                <img src="/assets/school-farming.jpg" alt="Farmer training" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.58) 0%, transparent 55%)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "12px 14px" }}>
                  <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.84rem", marginBottom: 2 }}>{t("Farmer Training — Enugu State")}</p>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.72rem" }}>{t("20,000 farmers trained")}</p>
                </div>
              </div>

              <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", padding: "16px 18px" }}>
                <p style={{ fontWeight: 700, fontSize: "0.88rem", color: "#111", marginBottom: 14 }}>{t("Where your money goes")}</p>
                {[
                  { label: "Direct programs",   pct: 78, color: "#15803d" },
                  { label: "Community training", pct: 12, color: "#4ade80" },
                  { label: "Research",           pct: 6,  color: "#86efac" },
                  { label: "Operations",         pct: 4,  color: "#d1fae5" },
                ].map(b => (
                  <div key={t(b.label)} style={{ marginBottom: 10 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: "0.8rem", color: "#374151" }}>{t(b.label)}</span>
                      <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#111" }}>{b.pct}%</span>
                    </div>
                    <div style={{ height: 5, background: "#f3f4f6", borderRadius: 99, overflow: "hidden" }}>
                      <div className="bar" style={{ "--w": `${b.pct}%`, height: "100%", background: b.color, borderRadius: 99 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── PHOTO STRIP ── */}
        <div className="photo-strip">
          {[
            { src: "/assets/afforestation-2.jpg",         label: "Reforestation" },
            { src: "/assets/water-from-river-nigeria.jpg", label: "Water Conservation" },
            { src: "/assets/Regreening-nigeria.jpg",       label: "Land Restoration" },
            { src: "/assets/Environment-Day.jpg",         label: "Community Events" },
          ].map(img => (
            <div key={t(img.label)} className="ph" style={{ position: "relative", overflow: "hidden" }}>
              <img src={img.src} alt={t(img.label)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", padding: 12, background: "rgba(0,0,0,0)", transition: "background 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(0,0,0,0.42)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(0,0,0,0)"}>
                <span style={{ color: "#fff", fontSize: "0.78rem", fontWeight: 700 }}>{t(img.label)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── IMPACT NUMBERS ── */}
        <div className="section-pad" style={{ background: "#fff" }}>
          <div style={{ maxWidth: 1060, margin: "0 auto" }}>
            <span className="label-sm" style={{ marginBottom: 8 }}>{t("Real Results")}</span>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)", color: "#111", marginBottom: 28, fontWeight: 700 }}>
              {t("What your donations have achieved")}
            </h2>
            <div className="impact-grid">
              {[
                { stat: "Trees Planted",   label: "Restoring forests on degraded land",       img: "/assets/afforestation.jpg" },
                { stat: "Clean Water",     label: "Safe drinking water for rural communities", img: "/assets/water-help.webp" },
                { stat: "Farmers Trained", label: "Climate-smart agriculture skills",          img: "/assets/school-farming.jpg" },
                { stat: "States Reached",  label: "Projects running across nigeria",           img: "/assets/Regreening-nigeria.jpg" },
              ].map(item => (
                <div key={t(item.label)} style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #e5e7eb" }}>
                  <div className="ph" style={{ height: 100, overflow: "hidden" }}>
                    <img src={item.img} alt={t(item.label)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "12px 14px" }}>
                    <p style={{ fontSize: "clamp(1.05rem, 2.2vw, 1.35rem)", fontWeight: 700, color: "#15803d", fontFamily: "Lora, serif", marginBottom: 4 }}>{item.stat}</p>
                    <p style={{ fontSize: "0.8rem", color: "#374151" }}>{t(item.label)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img src="/assets/afforestation-2.jpg" alt=""
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.22)" }} />
          <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "56px 20px" }}>
            <span className="label-sm" style={{ color: "#86efac", marginBottom: 12 }}>{t("Join Our Donors")}</span>
            <h2 style={{ color: "#fff", fontSize: "clamp(1.5rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: 12, marginTop: 4 }}>
              {t("Be the reason a tree grows today")}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.62)", maxWidth: 400, margin: "0 auto 26px", lineHeight: 1.75, fontSize: "0.92rem" }}>
              {t("No amount is too small. Every naira is tracked and reported — you'll always know where it went.")}
            </p>
            <a href="#give" style={{ display: "inline-block", background: "#15803d", color: "#fff", padding: "13px 32px", borderRadius: 9, fontWeight: 700, fontSize: "0.95rem", textDecoration: "none" }}>
              {t("Donate Now")}
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}