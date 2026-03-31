import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Navigation route mapping for all languages
const NAV_ROUTES = {
  // English
  "Home": "/",
  "About": "/about",
  "Projects": "/project",
  "Blogs": "/blog",
  "Contact": "/contact",
  // Igbo
  "Ụlọ": "/",
  "Gbasara": "/about",
  "Oru": "/project",
  "Kpọtụrụ": "/contact",
  // Yoruba
  "Ile": "/",
  "Nipa": "/about",
  "Iṣẹ": "/project",
  "Olubasọrọ": "/contact",
  // French
  "Accueil": "/",
  "À propos": "/about",
  "Projets": "/project",
};

function Landing() {
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [underlineStyle, setUnderlineStyle] = useState({});
  const [activeTab, setActiveTab] = useState("donate");
  const [language, setLanguage] = useState("English");
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [activeAboutTab, setActiveAboutTab] = useState("aboutus");
  const [isVisible, setIsVisible] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const sectionRef = useRef(null);

  const translations = {
    English: {
      nav: ["Home", "About", "Projects", "Blogs", "Contact"],
      hero: {
        title: "Building A Sustainable Future",
        titleBreak: "Together",
        subtitle: "Protecting our planet through education, conservation, and community action",
        donate: "Donate",
        volunteer: "Volunteer",
      },
    },
    Igbo: {
      nav: ["Ụlọ", "Gbasara", "Oru", "Blogs", "Kpọtụrụ"],
      hero: {
        title: "Ịwulite Ọdịnihu Na-aga N'ihu",
        titleBreak: "Ọnụ",
        subtitle: "Ichekwa ụwa anyị site na mmụta, nchekwa, na omume obodo",
        donate: "Nye onyinye",
        volunteer: "Bụrụ onye ọrụ afọ ofufo",
      },
    },
    Yoruba: {
      nav: ["Ile", "Nipa", "Iṣẹ", "Blogs", "Olubasọrọ"],
      hero: {
        title: "Kikọ Ọjọ Iwaju Ti O Duro",
        titleBreak: "Papọ",
        subtitle: "Aabo aye wa nipasẹ ẹkọ, itọju, ati iṣe agbegbe",
        donate: "Ṣetọrẹ",
        volunteer: "Jẹ oluranlọwọ",
      },
    },
    French: {
      nav: ["Accueil", "À propos", "Projets", "Blogs", "Contact"],
      hero: {
        title: "Construire Un Avenir Durable",
        titleBreak: "Ensemble",
        subtitle: "Protéger notre planète par l'éducation, la conservation et l'action communautaire",
        donate: "Faire un don",
        volunteer: "Devenir bénévole",
      },
    },
  };

  const t = translations[language];
  const navLinks = t.nav;

  const images = [
    "/assets/landing-hero-image3.jpg",
    "/assets/landing-hero-image2.jpg",
    "/assets/landing-hero-image1.jpg",
  ];

  const projects = [
    {
      category: "Environment",
      title: "Plant Tree, Save Earth & Lives Secure the Future",
      description:
        "Tree planting is an essential action in combating deforestation and climate change. Every tree we plant helps absorb carbon dioxide, purifies the air, and supports wildlife habitats. By taking small steps to protect and restore our planet, we are investing in a healthier, more sustainable future for generations to come.",
      raised: 4000,
      goal: 16000,
      percentage: 45,
      image: "/assets/afforestation-2.jpg",
    },
    {
      category: "Volunteering",
      title: "Advocating for School Farms: Educating the Grassroots for a Sustainable Future",
      description:
        "School farms are powerful tools for educating students about sustainable agriculture, food systems, and environmental stewardship. By advocating for and supporting school farm programs, we can empower the next generation with hands-on learning experiences that foster a deeper connection to nature, promote healthy eating habits, and inspire future leaders in sustainability.",
      raised: 6000,
      goal: 10000,
      percentage: 68,
      image: "/assets/school-farming.jpg",
    },
    {
      category: "Water",
      title: "People that Need Clean Drinking Water",
      description:
        "Access to clean drinking water is a basic human right, yet millions around the world still lack this vital resource. Contaminated water leads to preventable diseases and countless lives lost every year. By improving water infrastructure and supporting sustainable water management practices, we can ensure safe water for all, safeguarding health and fostering communities' growth and well-being.",
      raised: 10000,
      goal: 12000,
      percentage: 90,
      image: "/assets/water-from-river-nigeria.jpg",
    },
  ];

  const getProgressColor = (percentage) => {
    if (percentage < 50) return "bg-red-500";
    if (percentage < 80) return "bg-amber-500";
    return "bg-green-500";
  };

  // Preload images
  useEffect(() => {
    const imagePromises = images.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });
    Promise.all(imagePromises).then(() => setImagesLoaded(true));
  }, []);

  // Start carousel
  useEffect(() => {
    if (!imagesLoaded) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [imagesLoaded]);

  // Update underline position
  useEffect(() => {
    const updateUnderline = () => {
      if (!navRef.current) return;
      const activeLi = navRef.current.querySelector(`[data-link="${activeLink}"]`);
      if (activeLi) {
        const rect = activeLi.getBoundingClientRect();
        setUnderlineStyle({
          width: `${rect.width}px`,
          transform: `translateX(${rect.left + rect.width / 2 - navRef.current.offsetLeft - rect.width / 10}px)`,
        });
      }
    };
    setTimeout(updateUnderline, 0);
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [activeLink, language]);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">

      {/* ========== HERO + NAV ========== */}
      <div className="w-full min-h-screen flex flex-col bg-gray-900/50">

        {/* Navigation */}
        <nav className="w-full bg-gray-800 px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
                <img src="/assets/s-f-logo.png" alt="Logo" className="w-full h-full" />
              </div>
              <p className="text-white font-semibold text-sm md:text-base lg:text-lg">Speed Foundation</p>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center">
              <ul ref={navRef} className="flex space-x-6 xl:space-x-8 relative">
                {navLinks.map((link) => (
                  <li key={link} data-link={link} className="relative">
                    <Link
                      to={NAV_ROUTES[link] || "/"}
                      onClick={() => setActiveLink(link)}
                      className={`cursor-pointer pb-2 block transition-colors whitespace-nowrap ${
                        activeLink === link ? "text-white" : "text-gray-400 hover:text-gray-300"
                      }`}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
                <span
                  className="absolute bottom-0 left-[-50px] h-0.5 bg-green-500 transition-all duration-300 ease-out"
                  style={underlineStyle}
                ></span>
              </ul>
            </div>

            {/* Language + Mobile Menu */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className="flex items-center gap-1 md:gap-2 bg-gray-700 text-white px-2 md:px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <span className="text-xs md:text-sm font-medium hidden sm:inline">{language}</span>
                </button>
                {showLanguageMenu && (
                  <div className="absolute top-full right-0 mt-2 bg-gray-700 rounded-md shadow-lg overflow-hidden z-50 min-w-[120px]">
                    {Object.keys(translations).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => { setLanguage(lang); setShowLanguageMenu(false); setActiveLink(translations[lang].nav[0]); }}
                        className={`w-full text-left px-4 py-2 text-white hover:bg-gray-600 transition-colors text-sm ${language === lang ? "bg-gray-600" : ""}`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  }
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4">
              <ul className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <li key={link}>
                    <Link
                      to={NAV_ROUTES[link] || "/"}
                      onClick={() => { setActiveLink(link); setMobileMenuOpen(false); }}
                      className={`block py-2 px-4 rounded transition-colors ${
                        activeLink === link ? "bg-green-600 text-white" : "text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>

        {/* Hero Carousel */}
        <div className="relative flex-1 min-h-[500px] md:min-h-[600px] lg:min-h-[700px] w-full overflow-hidden flex justify-center items-center">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"}`}
              style={{ backgroundImage: `url('${image}')` }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-white/1 to-transparent backdrop-blur-[2px]"></div>

          <div className="relative z-10 w-full max-w-[90%] md:max-w-[80%] lg:max-w-5xl px-4 text-center">
            <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4 md:mb-6">
              {t.hero.title} <br />{t.hero.titleBreak}
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium mb-8 md:mb-12 px-2">
              {t.hero.subtitle}
            </p>

            {/* Toggle Buttons */}
            <div className="flex items-center justify-center">
              <div className="flex items-center bg-white/20 backdrop-blur-md rounded-full p-1 shadow-lg border border-white/30">
                <Link
                  to="/donate"
                  onClick={() => setActiveTab("donate")}
                  className={`flex items-center gap-1 md:gap-2 px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 ${
                    activeTab === "donate" ? "bg-white/90 text-green-600 shadow-md" : "bg-transparent text-white"
                  }`}
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="font-semibold text-xs sm:text-sm md:text-base">{t.hero.donate}</span>
                </Link>
                <Link
                  to="/volunteer"
                  onClick={() => setActiveTab("volunteer")}
                  className={`flex items-center gap-1 md:gap-2 px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 ${
                    activeTab === "volunteer" ? "bg-white/90 text-green-600 shadow-md" : "bg-transparent text-white"
                  }`}
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="font-semibold text-xs sm:text-sm md:text-base">{t.hero.volunteer}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
            {[30, 60, 100].map((opacity, idx) => (
              <svg key={idx} className={`w-6 h-6 md:w-8 md:h-8 text-white ${idx > 0 ? "-mt-2 md:-mt-3" : ""}`} style={{ opacity: opacity / 100 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* ========== WHO WE ARE ========== */}
      <div className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

            {/* Images */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1 space-y-4">
                  <img src="/assets/Regreening-nigeria.jpg" alt="Regreening nigeria" className="w-full h-48 md:h-64 object-cover rounded-lg" />
                  <img src="/assets/water-help.webp" alt="Water Help" className="w-full h-48 md:h-64 object-cover rounded-lg" />
                </div>
                <div className="col-span-1 flex items-center">
                  <img src="/assets/pollution-2.jpg" alt="Pollution" className="w-full h-64 md:h-80 object-cover rounded-lg" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 mb-6 text-center lg:text-left">Who We Are?</h2>

              <div className="bg-white p-4 md:p-6 rounded-lg ">
                {/* Tabs */}
                <div className="flex mb-6 border-b-2 border-gray-200 relative">
                  {[
                    { label: "About Us", key: "aboutus" },
                    { label: "Mission", key: "mission" },
                    { label: "Vision", key: "vision" },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveAboutTab(tab.key)}
                      className={`font-semibold transition-colors duration-300 relative pb-3 w-[120px] h-[50px] flex items-center justify-center ${
                        activeAboutTab === tab.key ? "text-white z-10" : "text-gray-700"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                  <span
                    className="absolute bottom-0 h-[50px] bg-green-600 transition-all duration-300 ease-out"
                    style={{
                      width: "120px",
                      left: activeAboutTab === "aboutus" ? "5px" : activeAboutTab === "mission" ? "120px" : "240px",
                    }}
                  ></span>
                </div>

                {/* Tab Content */}
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
                    {activeAboutTab === "aboutus" && "About Us"}
                    {activeAboutTab === "mission" && "Our Mission"}
                    {activeAboutTab === "vision" && "Our Vision"}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {activeAboutTab === "aboutus" &&
                      "Speed Foundation exists because nigeria's land, water, and people are quietly asking for help. Across the country, climate change, pollution, environmental loss, and water scarcity are threatening lives and livelihoods. We believe caring for nigeria's environment is a shared responsibility to today's communities and future generations. Driven by compassion and urgency, we restore ecosystems and protect the land and water people depend on. Through reforestation, water conservation, and climate-resilient solutions, we help communities adapt and endure. At Speed Foundation, we are nurturing a healthier, more resilient nigeria—together."}
                    {activeAboutTab === "mission" &&
                      "We protect and restore ecosystems by partnering with communities, governments, and conservation groups to preserve habitats and biodiversity. We promote green, inclusive economic growth through sustainable livelihoods like eco-tourism, organic farming, and responsible forestry. Through education, outreach, and policy advocacy, we empower individuals and stakeholders to adopt sustainable practices and support environmental protection. We lead reforestation and land rehabilitation projects, advance research on innovative sustainability solutions, and tackle pollution and waste to create healthier, resilient communities for future generations."}
                    {activeAboutTab === "vision" &&
                      "We envision a world where communities live in harmony with nature—where economic progress does not come at the cost of environmental destruction, and where future generations inherit a planet that is resilient, diverse, and full of opportunity. Our commitment is long-term. Our approach is collaborative. And our impact is rooted in empowering people to protect the environment not just because they must—but because they understand its value to their lives, livelihoods, and future."}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/donate" className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all animate-bounce text-center">
                    DONATE NOW
                  </Link>
                  <Link to="/about" className="text-green-600 font-semibold hover:text-green-700 transition-colors flex items-center justify-center gap-2">
                    Learn More
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== OUR IMPACT ========== */}
      <div className="w-full bg-green-800 py-12 md:py-16 lg:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-2/5">
              <img src="/assets/second-section.png" alt="Our Impact" className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg" />
            </div>
            <div className="w-full lg:w-3/5">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Our Impact</h2>
              <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">
                Since our founding, Speed Foundation has planted over 1 million trees, restored 10,000 hectares of degraded land, and provided clean water access to 50,000 people across nigeria. Our community-led conservation projects have protected critical habitats for endangered species and improved biodiversity. Through education and advocacy, we've empowered thousands of individuals to adopt sustainable practices and advocate for stronger environmental policies. Our work has helped communities adapt to climate change impacts, build resilience, and create sustainable livelihoods that protect the environment for future generations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { number: "5000", unit: "tons", desc: "Recycled over 5000 tons of waste materials, preventing them from polluting our land and waterways" },
                  { number: "12,000", desc: "Trained 12,000 community members in sustainable agriculture and disaster preparedness" },
                  { number: "1,694", desc: "Volunteers from around the world help realize our help" },
                  { number: "830", desc: "Launched 830 pilot programs focused on sustainable energy and water solutions" },
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-white">
                      <div className="text-xl md:text-2xl font-bold">
                        {stat.number}
                        {stat.unit && <span className="text-sm ml-1">{stat.unit}</span>}
                      </div>
                      <p className="text-xs md:text-sm opacity-90">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== OUR CAUSES ========== */}
      <div className="w-full bg-white py-12 md:py-16 lg:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              <span className="text-green-500">Our</span> Causes
            </h2>
            <p className="text-gray-500 text-sm uppercase tracking-wider">We Listen And Advise</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="overflow-hidden h-48 md:h-56">
                <img src="/assets/climate-change1.jpg" alt="Sustainable Resource" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 bg-white group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">Sustainable Resource Management</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  We advocate for the responsible use of natural resources, focusing on water conservation and sustainable agriculture. Our programs aim to reduce waste and promote eco-friendly practices that ensure the availability of resources for future generations. Through education and awareness, we empower communities to adopt practices that protect vital resources.
                </p>
              </div>
            </div>

            {/* Card 2 - Featured */}
            <div className="group cursor-pointer border-4 border-green-500 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="overflow-hidden h-48 md:h-56">
                <img src="/assets/polution-1.jpeg" alt="Biodiversity" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 bg-green-500 group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">Biodiversity Conservation</h3>
                <p className="text-sm leading-relaxed text-white">
                  Our efforts focus on protecting and restoring ecosystems to support biodiversity. We work on afforestation projects, safeguarding water sources, and preserving critical habitats to protect endangered species. By collaborating with local communities, we aim to enhance biodiversity and maintain ecological balance for a sustainable future.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="overflow-hidden h-48 md:h-56">
                <img src="/assets/afforestation.jpg" alt="Climate Change" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 bg-white group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">Climate Change Adaptation</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  We help communities adapt to the impacts of climate change by promoting sustainable agriculture, renewable energy, and water management practices. Our reforestation initiatives play a key role in restoring degraded lands and increasing carbon sequestration. These efforts empower communities to build resilience, reduce environmental risks, and secure sustainable livelihoods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== ONGOING PROJECTS ========== */}
      <div ref={sectionRef} className="w-full bg-green-800 py-12 md:py-16 lg:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-white text-xl md:text-2xl lg:text-3xl uppercase tracking-wider mb-2">
              Ongoing <span className="text-yellow-400">Projects</span>
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              You Can Help Lots of People by<br className="hidden md:block" /> Donating Little
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
                <div className="relative h-48 md:h-56">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <span className="absolute bottom-4 left-4 bg-teal-500 text-white px-4 py-1 rounded text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-700 font-semibold">Raised ${project.raised.toLocaleString()}</span>
                      <span className="text-gray-700 font-semibold">Goal ${project.goal.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`${getProgressColor(project.percentage)} h-2.5 rounded-full transition-all duration-1500`}
                        style={{ width: isVisible ? `${project.percentage}%` : "0%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 text-right">{project.percentage}%</p>
                  </div>
                  <Link to="/donate" className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded text-center transition-colors flex items-center justify-center gap-2">
                    Donate Now
                    <img src="/assets/volunteer-icon2.png" alt="Volunteer Icon" className="w-7 h-7" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== DISCOVER / BLOG ========== */}
      <div className="w-full bg-white py-12 md:py-16 lg:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Discover how we're making a <span className="text-green-600">difference</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[700px]">

            {/* Text Content */}
            <div className="lg:col-span-5 bg-white flex flex-col justify-center p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                Working towards a future where our planet thrives, and all ecosystems are protected for generations to come.
              </h2>
              <p className="text-gray-500 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                We are dedicated to creating lasting environmental change through sustainable practices, community empowerment, and biodiversity conservation. Our work focuses on restoring balance between people and nature, ensuring a resilient planet for generations to come.
              </p>
              <Link to="/about" className="bg-green-800 text-white px-6 md:px-8 py-3 rounded-full w-fit hover:bg-teal-900 transition-all">
                MORE ABOUT US
              </Link>
            </div>

            {/* Top Right - Large Image Card */}
            <div className="lg:col-span-7 bg-teal-800 flex flex-col justify-between p-6 md:p-10 relative overflow-hidden min-h-[300px] md:min-h-[400px]">
              <img src="/assets/blog4.jpeg" alt="Mother and child" className="absolute inset-0 w-full h-full object-cover opacity-70" />
              <div className="absolute inset-0 bg-teal-800/40"></div>
              <div className="relative z-10">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-4">Restoring Ecosystems Through Reforestation</h3>
                <p className="text-white/80 text-sm md:text-base">We restore degraded lands and enhance biodiversity through reforestation projects that help build a resilient planet.</p>
              </div>
              <Link to="/blog" className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-full w-fit hover:bg-white hover:text-teal-800 transition-all relative z-10">
                LEARN MORE
              </Link>
            </div>

            {/* Bottom Left - Teal Card */}
            <div className="lg:col-span-4 bg-teal-800 flex flex-col justify-between p-6 md:p-10 relative overflow-hidden min-h-[300px]">
              <img src="/assets/blog3.webp" alt="blog image" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <div className="relative z-10">
                <h3 className="text-white text-lg md:text-xl font-bold mb-3 md:mb-4">Empowering Communities to Adapt to Climate Change</h3>
                <p className="text-white/80 text-sm">We provide education and resources to help communities build resilience against climate change impacts, ensuring a sustainable future for all.</p>
              </div>
              <Link to="/blog" className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-full w-fit hover:bg-white hover:text-teal-800 transition-all relative z-10 text-sm md:text-base">
                EXPLORE OUR BLOGS
              </Link>
            </div>

            {/* Bottom Middle - Green Card */}
            <div className="lg:col-span-4 bg-green-600 flex flex-col justify-between p-6 md:p-10 relative overflow-hidden min-h-[300px]">
              <img src="/assets/blog2.jpg" alt="blog image" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <div className="relative z-10">
                <h3 className="text-white text-lg md:text-xl font-bold mb-3 md:mb-4">Protecting Biodiversity for Future Generations</h3>
                <p className="text-white/80 text-sm">We work to restore habitats and protect endangered species, ensuring biodiversity is preserved for future generations.</p>
              </div>
              <Link to="/blog" className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-full w-fit hover:bg-white hover:text-green-600 transition-all relative z-10 text-sm md:text-base">
                LEARN MORE
              </Link>
            </div>

            {/* Bottom Right - Orange Card */}
            <div className="lg:col-span-4 bg-orange-600 flex flex-col justify-between p-6 md:p-10 relative overflow-hidden min-h-[300px]">
              <img src="/assets/blog1.jpg" alt="Disaster support" className="absolute inset-0 w-full h-full object-cover opacity-50" />
              <div className="relative z-10">
                <h3 className="text-white text-lg md:text-xl font-bold mb-3 md:mb-4">Advocating for Stronger Environmental Policies</h3>
                <p className="text-white/80 text-sm">We work with policymakers to create laws that promote sustainability and environmental protection.</p>
              </div>
              <Link to="/blog" className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-full w-fit hover:bg-white hover:text-orange-600 transition-all relative z-10 text-sm md:text-base">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========== NEWSLETTER ========== */}
      <div className="w-full relative overflow-hidden min-h-[300px] md:min-h-[400px]">
        <div className="absolute inset-0">
          <img src="/assets/hands+plants.png" alt="Newsletter" className="w-full h-full object-cover" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-white text-base md:text-lg mb-6 md:mb-8 max-w-2xl">
            Stay updated with our latest projects, impact stories, and ways you can make a difference in communities around the world.
          </p>
          <div className="w-full max-w-xl">
            <div className="flex flex-col sm:flex-row bg-white rounded-[10px] overflow-hidden">
              <input type="email" placeholder="Enter your email address" className="flex-1 px-4 md:px-6 py-3 md:py-4 focus:outline-none" />
              <button className="bg-green-600 text-white font-bold px-6 md:px-8 py-3 md:py-4 whitespace-nowrap hover:bg-green-700 transition-colors">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* ========== FOOTER ========== */}
      <footer className="w-full bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">

            {/* Logo */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/assets/s-f-logo.png" alt="Logo" className="w-12 h-12" />
                <span className="text-xl md:text-2xl font-bold">Speed Foundation</span>
              </div>
              <p className="text-gray-400 text-sm md:text-base">Together for a greener tomorrow</p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Home</h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  { label: "About Us", to: "/about" },
                  { label: "Projects", to: "/project" },
                  { label: "Blog", to: "/blog" },
                  { label: "Contact", to: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Contact</h3>
              <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
                <li className="flex items-start gap-2 md:gap-3 text-gray-400">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  123 Green Street, Lagos City, EC 12345
                </li>
                <li className="flex items-center gap-2 md:gap-3 text-gray-400">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-2 md:gap-3 text-gray-400">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@speedfoundation.org
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Follow Us</h3>
              <div className="flex gap-3 md:gap-4 mb-4 md:mb-6">
                {/* Social icons */}
                <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-slate-700 hover:bg-slate-600 rounded flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-slate-700 hover:bg-slate-600 rounded flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-slate-700 hover:bg-slate-600 rounded flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-slate-700 hover:bg-slate-600 rounded flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
              <Link to="/donate" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-6 md:px-8 py-2 md:py-3 rounded-lg transition-colors text-sm md:text-base">
                Donate
              </Link>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-6">
            <p className="text-center text-gray-400 text-sm md:text-base">© 2026 Speed Foundation. All rights reserved.</p>
          </div>
        </div>

        {/* Scroll to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-50"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </footer>
    </div>
  );
}

export default Landing;