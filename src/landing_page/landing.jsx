import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { useI18n } from "../i18n/LanguageContext";


function Landing() {
  const { t } = useI18n();
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("donate");
  const [activeAboutTab, setActiveAboutTab] = useState("aboutus");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      raised: 0,
      goal: 25000,
      percentage: 0,
      image: "/assets/afforestation-2.jpg",
    },
    {
      category: "Volunteering",
      title: "Advocating for School Farms: Educating the Grassroots for a Sustainable Future",
      description:
        "School farms are powerful tools for educating students about sustainable agriculture, food systems, and environmental stewardship. By advocating for and supporting school farm programs, we can empower the next generation with hands-on learning experiences that foster a deeper connection to nature, promote healthy eating habits, and inspire future leaders in sustainability.",
      raised: 0,
      goal: 15000,
      percentage: 0,
      image: "/assets/school-farming.jpg",
    },
    {
      category: "Water",
      title: "People that Need Clean Drinking Water",
      description:
        "Access to clean drinking water is a basic human right, yet millions around the world still lack this vital resource. Contaminated water leads to preventable diseases and countless lives lost every year. By improving water infrastructure and supporting sustainable water management practices, we can ensure safe water for all, safeguarding health and fostering communities' growth and well-being.",
      raised: 0,
      goal: 8000,
      percentage: 0,
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

        <Nav />

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
              {t("Building A Sustainable Future")} <br />{t("Together")}
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium mb-8 md:mb-12 px-2">
              {t("Protecting our planet through education, conservation, and community action")}
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
                  <span className="font-semibold text-xs sm:text-sm md:text-base">{t("Donate")}</span>
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
                  <span className="font-semibold text-xs sm:text-sm md:text-base">{t("Volunteer")}</span>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 mb-6 text-center lg:text-left">{t("Who We Are?")}</h2>

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
                      {t(tab.label)}
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
                    {t("DONATE NOW")}
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
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">{t("Our Impact")}</h2>
              <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">
                {t("Since our founding, Speed Foundation has planted trees, restored degraded land, and provided clean water access to communities across nigeria. Our community-led conservation projects have protected critical habitats for endangered species and improved biodiversity. Through education and advocacy, we've empowered thousands of individuals to adopt sustainable practices and advocate for stronger environmental policies. Our work has helped communities adapt to climate change impacts, build resilience, and create sustainable livelihoods that protect the environment for future generations.")}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Waste Recycling", desc: "Recycled waste materials, preventing them from polluting our land and waterways" },
                  { title: "Community Training", desc: "Trained community members in sustainable agriculture and disaster preparedness" },
                  { title: "Global Volunteers", desc: "Volunteers from around the world help realize our help" },
                  { title: "Pilot Programs", desc: "Launched pilot programs focused on sustainable energy and water solutions" },
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-white">
                      <div className="text-xl md:text-2xl font-bold">{t(stat.title)}</div>
                      <p className="text-xs md:text-sm opacity-90">{t(stat.desc)}</p>
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
              <span className="text-green-500">{t("Our")}</span> {t("Causes")}
            </h2>
            <p className="text-gray-500 text-sm uppercase tracking-wider">{t("We Listen And Advise")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="overflow-hidden h-48 md:h-56">
                <img src="/assets/climate-change1.jpg" alt="Sustainable Resource" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 bg-white group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">{t("Sustainable Resource Management")}</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {t("We advocate for the responsible use of natural resources, focusing on water conservation and sustainable agriculture. Our programs aim to reduce waste and promote eco-friendly practices that ensure the availability of resources for future generations. Through education and awareness, we empower communities to adopt practices that protect vital resources.")}
                </p>
              </div>
            </div>

            {/* Card 2 - Featured */}
            <div className="group cursor-pointer border-4 border-green-500 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="overflow-hidden h-48 md:h-56">
                <img src="/assets/polution-1.jpeg" alt="Biodiversity" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 bg-green-500 group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{t("Biodiversity Conservation")}</h3>
                <p className="text-sm leading-relaxed text-white">
                  {t("Our efforts focus on protecting and restoring ecosystems to support biodiversity. We work on afforestation projects, safeguarding water sources, and preserving critical habitats to protect endangered species. By collaborating with local communities, we aim to enhance biodiversity and maintain ecological balance for a sustainable future.")}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="overflow-hidden h-48 md:h-56">
                <img src="/assets/afforestation.jpg" alt="Climate Change" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 bg-white group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">{t("Climate Change Adaptation")}</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {t("We help communities adapt to the impacts of climate change by promoting sustainable agriculture, renewable energy, and water management practices. Our reforestation initiatives play a key role in restoring degraded lands and increasing carbon sequestration. These efforts empower communities to build resilience, reduce environmental risks, and secure sustainable livelihoods.")}
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
              Ongoing <span className="text-yellow-400">{t("Projects")}</span>
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              You Can Help Lots of People by<br className="hidden md:block" /> {t("Donating Little")}
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
                <div className="relative h-48 md:h-56">
                  <img src={project.image} alt={t(project.title)} className="w-full h-full object-cover" />
                  <span className="absolute bottom-4 left-4 bg-teal-500 text-white px-4 py-1 rounded text-sm font-semibold">
                    {t(project.category)}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">{t(project.title)}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{t(project.description)}</p>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-700 font-semibold">Raised ₦{project.raised.toLocaleString()}</span>
                      <span className="text-gray-700 font-semibold">Goal ₦{project.goal.toLocaleString()}</span>
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
              Discover how we're making a <span className="text-green-600">{t("difference")}</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[700px]">

            {/* Text Content */}
            <div className="lg:col-span-5 bg-white flex flex-col justify-center p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                {t("Working towards a future where our planet thrives, and all ecosystems are protected for generations to come.")}
              </h2>
              <p className="text-gray-500 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                {t("We are dedicated to creating lasting environmental change through sustainable practices, community empowerment, and biodiversity conservation. Our work focuses on restoring balance between people and nature, ensuring a resilient planet for generations to come.")}
              </p>
              <Link to="/about" className="bg-green-800 text-white px-6 md:px-8 py-3 rounded-full w-fit hover:bg-teal-900 transition-all">
                {t("MORE ABOUT US")}
              </Link>
            </div>

            {/* Top Right - Large Image Card */}
            <div className="lg:col-span-7 bg-teal-800 flex flex-col justify-between p-6 md:p-10 relative overflow-hidden min-h-[300px] md:min-h-[400px]">
              <img src="/assets/blog4.jpeg" alt="Mother and child" className="absolute inset-0 w-full h-full object-cover opacity-70" />
              <div className="absolute inset-0 bg-teal-800/40"></div>
              <div className="relative z-10">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-4">{t("Restoring Ecosystems Through Reforestation")}</h3>
                <p className="text-white/80 text-sm md:text-base">{t("We restore degraded lands and enhance biodiversity through reforestation projects that help build a resilient planet.")}</p>
              </div>
              <Link to="/blog" className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-full w-fit hover:bg-white hover:text-teal-800 transition-all relative z-10">
                {t("LEARN MORE")}
              </Link>
            </div>

            {/* Bottom Left - Teal Card */}
            <div className="lg:col-span-4 bg-teal-800 flex flex-col justify-between p-6 md:p-10 relative overflow-hidden min-h-[300px]">
              <img src="/assets/blog3.webp" alt="blog image" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <div className="relative z-10">
                <h3 className="text-white text-lg md:text-xl font-bold mb-3 md:mb-4">{t("Empowering Communities to Adapt to Climate Change")}</h3>
                <p className="text-white/80 text-sm">{t("We provide education and resources to help communities build resilience against climate change impacts, ensuring a sustainable future for all.")}</p>
              </div>
              <Link to="/blog" className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-full w-fit hover:bg-white hover:text-teal-800 transition-all relative z-10 text-sm md:text-base">
                {t("EXPLORE OUR BLOGS")}
              </Link>
            </div>

            {/* Bottom Middle - Green Card */}
            <div className="lg:col-span-4 bg-green-600 flex flex-col justify-between p-6 md:p-10 relative overflow-hidden min-h-[300px]">
              <img src="/assets/blog2.jpg" alt="blog image" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <div className="relative z-10">
                <h3 className="text-white text-lg md:text-xl font-bold mb-3 md:mb-4">{t("Protecting Biodiversity for Future Generations")}</h3>
                <p className="text-white/80 text-sm">{t("We work to restore habitats and protect endangered species, ensuring biodiversity is preserved for future generations.")}</p>
              </div>
              <Link to="/blog" className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-full w-fit hover:bg-white hover:text-green-600 transition-all relative z-10 text-sm md:text-base">
                {t("LEARN MORE")}
              </Link>
            </div>

            {/* Bottom Right - Orange Card */}
            <div className="lg:col-span-4 bg-orange-600 flex flex-col justify-between p-6 md:p-10 relative overflow-hidden min-h-[300px]">
              <img src="/assets/blog1.jpg" alt="Disaster support" className="absolute inset-0 w-full h-full object-cover opacity-50" />
              <div className="relative z-10">
                <h3 className="text-white text-lg md:text-xl font-bold mb-3 md:mb-4">{t("Advocating for Stronger Environmental Policies")}</h3>
                <p className="text-white/80 text-sm">{t("We work with policymakers to create laws that promote sustainability and environmental protection.")}</p>
              </div>
              <Link to="/blog" className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-full w-fit hover:bg-white hover:text-orange-600 transition-all relative z-10 text-sm md:text-base">
                {t("LEARN MORE")}
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{t("Subscribe to Our Newsletter")}</h2>
          <p className="text-white text-base md:text-lg mb-6 md:mb-8 max-w-2xl">
            {t("Stay updated with our latest projects, impact stories, and ways you can make a difference in communities around the world.")}
          </p>
          <div className="w-full max-w-xl">
            <div className="flex flex-col sm:flex-row bg-white rounded-[10px] overflow-hidden">
              <input type="email" placeholder={t("Enter your email address")} className="flex-1 px-4 md:px-6 py-3 md:py-4 focus:outline-none" />
              <button className="bg-green-600 text-white font-bold px-6 md:px-8 py-3 md:py-4 whitespace-nowrap hover:bg-green-700 transition-colors">{t("Subscribe")}</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Landing;