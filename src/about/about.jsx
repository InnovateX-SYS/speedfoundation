import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { useI18n } from "../i18n/LanguageContext";

// ✅ Data outside component
const leaders = [
  {
    id: 1,
    name: "Mrs. Ademola Charlotte",
    role: "Executive Director",
    location: "Lagos, Nigeria",
    photo: "/assets/mrs-ademola.jpeg",
    focus: "50% 42%",
    bio: "15+ years in environmental science and policy advocacy",
    skills: ["Climate Policy", "Strategic Planning", "Partnerships"],
  },
  {
    id: 2,
    name: "Ms. Medina Ojugbele",
    role: "Community Outreach Director",
    location: "Abuja, Nigeria",
    photo: "/assets/ms-medina.jpeg",
    focus: "50% 40%",
    bio: "Building bridges between local communities and conservation efforts",
    skills: ["Community Development", "Advocacy", "Education"],
  },
  {
    id: 3,
    name: "Mr. Ademola Williams",
    role: "Research Lead",
    location: "Enugu, Nigeria",
    photo: "/assets/mr-ademola.jpeg",
    focus: "50% 18%",
    bio: "Leading research on climate adaptation strategies",
    skills: ["Climate Science", "Data Analytics", "Innovation"],
  },
];

const About = () => {
  const { t } = useI18n();
  const [leaderPage, setLeaderPage] = React.useState(0);

  const totalPages = Math.ceil(leaders.length / 3);
  const visibleLeaders = leaders.slice(leaderPage * 3, leaderPage * 3 + 3);

  return (
    <div className="overflow-x-hidden">
      <Nav />

      {/* ========== HERO ========== */}
      <div
        className="w-full min-h-[480px] md:min-h-[520px] flex flex-col items-center justify-center text-center px-4 py-16 md:py-20 relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/landing-hero-image2.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-700/70 to-green-500/60"></div>

        {/* Content — ✅ removed fixed w-[1000px], now fluid */}
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {t("About Our Mission")}
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed">
            {t("Speed Foundation exists because nigeria's land, water, and people are quietly asking for help. Across the country, climate change, pollution, environmental loss, and water scarcity are threatening lives and livelihoods. We believe caring for nigeria's environment is a shared responsibility to today's communities and future generations. Driven by compassion and urgency, we restore ecosystems and protect the land and water people depend on.")}
          </p>
        </div>
      </div>

      {/* ========== VISION & MISSION ========== */}
      <div className="w-full bg-white py-14 md:py-20 lg:py-28 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section label */}
          <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
            <div className="h-px w-8 md:w-12 bg-green-500"></div>
            {/* ✅ Fixed huge text-[30px] — now responsive */}
            <span className="text-green-600 text-sm md:text-base font-bold uppercase tracking-widest">
              {t("Who We Are")}
            </span>
            <div className="h-px w-8 md:w-12 bg-green-500"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 text-center mb-10 md:mb-16 lg:mb-24">
            {t("What Drives Us Forward")}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* MISSION card */}
            <div className="relative rounded-3xl overflow-hidden group min-h-[420px] md:min-h-[480px]">
              <div className="absolute inset-0">
                <img
                  src="/assets/afforestation.jpg"
                  alt="Mission"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-900/60 to-green-900/20"></div>
              </div>
              <div className="relative z-10 p-6 md:p-10 lg:p-12 h-full flex flex-col justify-between">
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full w-fit">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
                  {t("Our Mission")}
                </div>
                <div className="mt-8">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    Act with <br />
                    {t("Purpose")}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                    {t("We protect and restore ecosystems by partnering with communities, governments, and conservation groups. Through reforestation, water conservation, and climate-resilient solutions, we help communities adapt, endure, and thrive — not just survive.")}
                  </p>
                  <div className="flex flex-col gap-3">
                    {[
                      "Restore degraded land and water systems",
                      "Empower communities with sustainable livelihoods",
                      "Advocate for stronger environmental policies",
                    ].map((point, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-white/90 text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* VISION card */}
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="relative rounded-3xl overflow-hidden group flex-1 min-h-[240px]">
                <div className="absolute inset-0">
                  <img
                    src="/assets/Regreening-nigeria.jpg"
                    alt="Vision"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                </div>
                <div className="relative z-10 p-6 md:p-8 min-h-[240px] flex flex-col justify-between">
                  <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full w-fit">
                    <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span>
                    {t("Our Vision")}
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
                      {t("A World in Harmony with Nature")}
                    </h3>
                    <p className="text-white/75 text-sm md:text-base leading-relaxed">
                      {t("We envision communities thriving alongside nature — where economic progress never comes at the cost of the environment, and future generations inherit a planet that is resilient, diverse, and full of opportunity.")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom two mini cards */}
              <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                <div className="bg-green-600 rounded-3xl p-5 md:p-6 lg:p-8 flex flex-col justify-between min-h-[180px] md:min-h-[200px]">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-3 md:mb-4">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg mb-1 md:mb-2">
                      {t("Nationwide Reach")}
                    </h4>
                    {/* ✅ Fixed text-bold (invalid) → font-medium */}
                    <p className="text-white/75 text-xs md:text-sm font-medium leading-relaxed">
                      {t("Operating across nigeria with local community partners")}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-3xl p-5 md:p-6 lg:p-8 flex flex-col justify-between min-h-[180px] md:min-h-[200px]">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-green-500/30 flex items-center justify-center mb-3 md:mb-4">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg mb-1 md:mb-2">
                      {t("Our Volunteers")}
                    </h4>
                    <p className="text-white/60 text-xs md:text-sm font-medium leading-relaxed">
                      {t("Volunteers across nigeria united by a passion for environmental change")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== MEET OUR LEADERSHIP ========== */}
      <div className="w-full bg-white py-14 md:py-20 lg:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            {/* ✅ Fixed text-4xl subtitle on mobile */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              {t("Meet Our Leadership")}
            </h2>
            <p className="text-base md:text-lg text-gray-500">
              {t("Experts driving environmental change")}
            </p>
          </div>

          {/* ✅ 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {visibleLeaders.map((leader) => (
              <div
                key={leader.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
              >
                <div className="bg-green-100 h-64 md:h-72 flex items-center justify-center relative group overflow-hidden">
                  {leader.photo && (
                    <img
                      src={leader.photo}
                      alt={t(leader.name)}
                      style={{ objectPosition: leader.focus || "50% 30%" }}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg px-3 py-2 flex items-center gap-2 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <svg
                      className="w-4 h-4 text-gray-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">
                      {leader.location}
                    </span>
                  </div>
                  {!leader.photo && (
                    <svg
                      className="w-20 h-20 md:w-24 md:h-24 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                      />
                      <circle cx="9" cy="7" r="4" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M23 21v-2a4 4 0 0 0-3-3.87"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 3.13a4 4 0 0 1 0 7.75"
                      />
                    </svg>
                  )}
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                    {t(leader.name)}
                  </h3>
                  <p className="text-green-600 font-semibold text-sm mb-3">
                    {t(leader.role)}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                    {t(leader.bio)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {leader.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs text-green-700 border border-green-200 bg-green-50 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination — only when leaders span more than one page */}
          {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setLeaderPage((prev) => Math.max(prev - 1, 0))}
              disabled={leaderPage === 0}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-green-50 hover:border-green-400 hover:text-green-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setLeaderPage(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  leaderPage === i ? "bg-green-600 w-6" : "bg-gray-300 w-2.5"
                }`}
              />
            ))}
            <button
              onClick={() =>
                setLeaderPage((prev) => Math.min(prev + 1, totalPages - 1))
              }
              disabled={leaderPage === totalPages - 1}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-green-50 hover:border-green-400 hover:text-green-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          )}
        </div>
      </div>

      {/* ========== JOIN OUR MISSION ========== */}
      <div className="relative w-full py-16 md:py-24 px-4 text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/assets/Environment-Day.jpg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-green-500/50"></div>
        <div className="relative z-10 py-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
            {t("Join Our Mission")}
          </h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8">
            {t("Be part of a global movement creating positive environmental change.")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/volunteer"
              className="bg-white text-green-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors min-w-[180px] text-center"
            >
              {t("Get Involved Today")}
            </Link>
            <Link
              to="/donate"
              className="bg-transparent text-white font-semibold px-8 py-3 rounded-lg border border-white hover:bg-white/10 transition-colors min-w-[180px] text-center"
            >
              {t("Make a Donation")}
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
