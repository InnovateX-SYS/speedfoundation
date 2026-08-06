import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { useI18n } from "../i18n/LanguageContext";

const categories = [
  "All Projects",
  "Special Needs",
  "Education",
  "Environment",
  "Development",
];

const projects = [
  // ===== ENVIRONMENT (6) =====
  {
    id: 1,
    category: "conservation",
    filterKey: "Environment",
    title: " Cross River National Park",
    description: "Protecting 100,000 hectares of pristine rainforest through community partnerships and sustainable land management.",
    location: "Cross River, Nigeria",
    duration: "2026 - Ongoing",
    status: "Ongoing",
    image: "/assets/afforestation.jpg",
  },
  {
    id: 2,
    category: "reforestation",
    filterKey: "Environment",
    title: "Coastal Reforestation Project",
    description: "Restoring coastal ecosystems through native tree planting and habitat rehabilitation across degraded shorelines.",
    location: "Ondo & Lagos, Nigeria",
    duration: "2026 - 2029",
    status: "Ongoing",
    image: "/assets/afforestation-2.jpg",
  },
  {
    id: 3,
    category: "conservation",
    filterKey: "Environment",
    title: "Marine Life Protection",
    description: "Establishing marine protected areas to preserve biodiversity and restore coral reefs along nigeria's coastline.",
    location: "Bayelsa & Rivers, Nigeria",
    duration: "2026 - 2028",
    status: "Pending",
    image: "/assets/water-from-river-nigeria.jpg",
  },
  {
    id: 4,
    category: "regreening",
    filterKey: "Environment",
    title: "Northern Nigeria Regreening Initiative",
    description: "Reversing desertification across Nigeria's northern drylands through farmer-managed natural regeneration and tree planting.",
    location: "Sokoto & Katsina, Nigeria",
    duration: "2026 - Ongoing",
    status: "Ongoing",
    image: "/assets/Regreening-nigeria.jpg",
  },
  {
    id: 5,
    category: "wetlands",
    filterKey: "Environment",
    title: "Wetland Ecosystem Restoration",
    description: "Rehabilitating critical wetland habitats that serve as natural water filters and biodiversity hotspots.",
    location: "Delta & Bayelsa, Nigeria",
    duration: "Starts 2026",
    status: "Not Started",
    image: "/assets/water-help.webp",
  },
  {
    id: 6,
    category: "conservation",
    filterKey: "Environment",
    title: "Wildlife Corridor Restoration",
    description: "Creating safe wildlife passages and habitat connectivity for endangered species across fragmented landscapes.",
    location: "Enugu & Ebonyi, Nigeria",
    duration: "2026 - 2029",
    status: "Pending",
    image: "/assets/school-farming.jpg",
  },

  // ===== EDUCATION (6) =====
  {
    id: 7,
    category: "agriculture",
    filterKey: "Education",
    title: "Sustainable Agriculture Program",
    description: "Training farmers in organic methods and climate-resilient agriculture practices to increase yields sustainably.",
    location: "Enugu, Nigeria",
    duration: "2023 - Ongoing",
    status: "Ongoing",
    image: "/assets/school-farming.jpg",
  },
  {
    id: 8,
    category: "education",
    filterKey: "Education",
    title: "Green Schools Initiative",
    description: "Integrating environmental education into school curricula and building eco-friendly school gardens across rural communities.",
    location: "Nationwide, Nigeria",
    duration: "2026 - 2028",
    status: "Pending",
    image: "/assets/afforestation.jpg",
  },
  {
    id: 9,
    category: "training",
    filterKey: "Education",
    title: "Climate Literacy Program",
    description: "Educating community leaders and youth on climate change, its impacts, and actionable local responses.",
    location: "Kaduna, Nigeria",
    duration: "2024 - Ongoing",
    status: "Ongoing",
    image: "/assets/afforestation-2.jpg",
  },
  {
    id: 10,
    category: "vocational",
    filterKey: "Education",
    title: "Eco-Entrepreneurship Academy",
    description: "Teaching young nigerians to build green businesses in renewable energy, waste management, and sustainable agriculture.",
    location: "Abuja, Nigeria",
    duration: "Starts 2027",
    status: "Not Started",
    image: "/assets/Regreening-nigeria.jpg",
  },
  {
    id: 11,
    category: "research",
    filterKey: "Education",
    title: "Environmental Research Hub",
    description: "Funding field research and academic partnerships to develop evidence-based conservation solutions for nigerian ecosystems.",
    location: "Ibadan, Oyo, Nigeria",
    duration: "2022 - Ongoing",
    status: "Ongoing",
    image: "/assets/water-from-river-nigeria.jpg",
  },
  {
    id: 12,
    category: "women",
    filterKey: "Education",
    title: "Women in Conservation",
    description: "Empowering women with environmental science training and leadership skills to become community conservation champions.",
    location: "Jos, Plateau, Nigeria",
    duration: "2026 - 2029",
    status: "Pending",
    image: "/assets/second-section.png",
  },

  // ===== DEVELOPMENT (6) =====
  {
    id: 13,
    category: "renewable",
    filterKey: "Development",
    title: "Solar Villages Initiative",
    description: "Bringing clean, renewable energy to remote communities through solar panel installation and maintenance training.",
    location: "Rural Niger State, Nigeria",
    duration: "2025 - Ongoing",
    status: "Ongoing",
    image: "/assets/second-section.png",
  },
  {
    id: 14,
    category: "water",
    filterKey: "Development",
    title: "Clean Water Access Project",
    description: "Installing sustainable boreholes, rainwater harvesting systems, and water purification units in underserved communities.",
    location: "Northern Nigeria",
    duration: "2023 - 2026",
    status: "Ongoing",
    image: "/assets/water-help.webp",
  },
  {
    id: 15,
    category: "livelihood",
    filterKey: "Development",
    title: "Eco-Tourism Development",
    description: "Developing sustainable eco-tourism infrastructure that generates community income while protecting natural habitats.",
    location: "Obudu, Cross River, Nigeria",
    duration: "Starts 2027",
    status: "Not Started",
    image: "/assets/Regreening-nigeria.jpg",
  },
  {
    id: 16,
    category: "waste",
    filterKey: "Development",
    title: "Waste-to-Wealth Program",
    description: "Transforming community waste into compost, biogas, and recycled materials, creating jobs and reducing pollution.",
    location: "Lagos, Nigeria",
    duration: "2023 - Ongoing",
    status: "Ongoing",
    image: "/assets/afforestation.jpg",
  },
  {
    id: 17,
    category: "infrastructure",
    filterKey: "Development",
    title: "Green Infrastructure Project",
    description: "Building climate-resilient community infrastructure including flood barriers, green rooftops, and urban forests.",
    location: "Port Harcourt, Rivers, Nigeria",
    duration: "2026 - 2028",
    status: "Pending",
    image: "/assets/afforestation-2.jpg",
  },
  {
    id: 18,
    category: "food",
    filterKey: "Development",
    title: "Food Forest Initiative",
    description: "Establishing community food forests that provide nutritious food, restore biodiversity, and build household resilience.",
    location: "Benue, Nigeria",
    duration: "Starts 2027",
    status: "Not Started",
    image: "/assets/school-farming.jpg",
  },

  // ===== SPECIAL NEEDS (6) =====
  {
    id: 19,
    category: "disability",
    filterKey: "Special Needs",
    title: "Inclusive Conservation Program",
    description: "Adapting conservation volunteer programs to include persons with disabilities, ensuring environmental work is accessible to all.",
    location: "Akwa Ibom, Nigeria",
    duration: "2024 - Ongoing",
    status: "Ongoing",
    image: "/assets/Regreening-nigeria.jpg",
  },
  {
    id: 20,
    category: "elderly",
    filterKey: "Special Needs",
    title: "Climate Resilience for Elders",
    description: "Supporting elderly communities most vulnerable to climate impacts with adaptation resources, shelter upgrades, and care networks.",
    location: "Rural Kogi, Nigeria",
    duration: "2026 - 2029",
    status: "Pending",
    image: "/assets/water-help.webp",
  },
  {
    id: 21,
    category: "refugees",
    filterKey: "Special Needs",
    title: "IDP Settlement Green Zones",
    description: "Creating sustainable green zones in and around displacement settlements in Nigeria's northeast to provide food security, clean air, and mental wellbeing.",
    location: "Borno & Adamawa, Nigeria",
    duration: "Starts 2028",
    status: "Not Started",
    image: "/assets/afforestation.jpg",
  },
  {
    id: 22,
    category: "children",
    filterKey: "Special Needs",
    title: "Children's Nature Therapy",
    description: "Using nature-based therapy and outdoor programs to support the mental and emotional health of at-risk and traumatized children.",
    location: "Maiduguri, Borno, Nigeria",
    duration: "2023 - Ongoing",
    status: "Ongoing",
    image: "/assets/afforestation-2.jpg",
  },
  {
    id: 23,
    category: "indigenous",
    filterKey: "Special Needs",
    title: "Indigenous Land Rights Defense",
    description: "Supporting indigenous communities to legally protect their ancestral lands from deforestation and illegal resource extraction.",
    location: "Taraba, Nigeria",
    duration: "2022 - Ongoing",
    status: "Ongoing",
    image: "/assets/water-from-river-nigeria.jpg",
  },
  {
    id: 24,
    category: "pastoralists",
    filterKey: "Special Needs",
    title: "Pastoralist Climate Adaptation",
    description: "Helping nomadic and pastoralist communities adapt their herding practices to shifting climate patterns and drought cycles.",
    location: "Yobe & Jigawa, Nigeria",
    duration: "2026 - 2027",
    status: "Pending",
    image: "/assets/school-farming.jpg",
  },
];

const STATUS_STYLES = {
  Ongoing: "bg-green-100 text-green-700 border-green-200",
  Pending: "bg-amber-100 text-amber-700 border-amber-200",
  "Not Started": "bg-gray-100 text-gray-600 border-gray-200",
};

const STATUS_DOTS = {
  Ongoing: "bg-green-500",
  Pending: "bg-amber-500",
  "Not Started": "bg-gray-400",
};

const Project = () => {
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = React.useState("All Projects");
  const [currentPage, setCurrentPage] = React.useState(1);
  const projectsPerPage = 6;

  const filtered =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((p) => p.filterKey === activeCategory);

  const totalPages = Math.ceil(filtered.length / projectsPerPage);
  const visibleProjects = filtered.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
  setCurrentPage(page);
};
  return (
    <div className="overflow-x-hidden">
      <Nav />

      {/* ========== HERO IMAGE ========== */}
      <div className="relative h-[320px] sm:h-[400px] md:h-[500px] w-full">
        <img
          src="/assets/Tree+plant.jpeg"
          alt="Tree Planting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-green-700/50 to-green-500/40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 leading-tight">
            {t("Nurturing a Greener Tomorrow")}
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            {t("Join us in transforming nigeria's future through reforestation, water conservation, and climate-resilient initiatives. Together, we can build a more sustainable and resilient environment for generations to come.")}
          </p>
        </div>
      </div>

      {/* ========== FILTER TABS ========== */}
      <div className="w-full bg-gray-50 py-6 md:py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2 md:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-green-600 text-white border-green-600 shadow-md"
                  : "bg-white text-gray-600 border-gray-200 hover:border-green-400 hover:text-green-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ========== PROJECT CARDS ========== */}
      <div className="w-full py-10 md:py-12 lg:py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          {/* Count label */}
          <p className="text-gray-500 text-sm mb-6">
            Page <span className="font-semibold text-gray-800">{currentPage}</span> of{" "}
            <span className="font-semibold text-gray-800">{totalPages}</span> — {filtered.length} total projects
            {activeCategory !== "All Projects" && (
              <span> in <span className="text-green-600 font-semibold">{activeCategory}</span></span>
            )}
          </p>

          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 text-lg py-20">
              {t("No projects found in this category.")}
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
                {visibleProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    {/* Image with badge */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={t(project.title)}
                        className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 right-3 md:top-4 md:right-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {t(project.category)}
                      </span>
                      <span
                        className={`absolute top-3 left-3 md:top-4 md:left-4 flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${STATUS_STYLES[project.status]}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOTS[project.status]}`}></span>
                        {t(project.status)}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 md:p-6 flex flex-col flex-grow">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                        {t(project.title)}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4 md:mb-5 flex-grow">
                        {t(project.description)}
                      </p>

                      {/* Meta */}
                      <div className="space-y-1.5 md:space-y-2 mb-4 md:mb-5">
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {project.location}
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {t(project.duration)}
                        </div>
                      </div>

                      {/* Button */}
                      <Link
                        to="/donate"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 md:py-3 px-6 rounded-xl text-center transition-colors text-sm"
                      >
                        {t("Learn More")}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* ========== PAGINATION ========== */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-10 md:mt-12 flex-wrap">

                  {/* Prev */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-green-50 hover:border-green-400 hover:text-green-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Page numbers */}
                  {Array.from({ length: totalPages }).map((_, i) => {
                    const page = i + 1;
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 rounded-full text-sm font-semibold transition-all border ${
                          currentPage === page
                            ? "bg-green-600 text-white border-green-600 shadow-md"
                            : "bg-white text-gray-600 border-gray-200 hover:border-green-400 hover:text-green-600"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}

                  {/* Next */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-green-50 hover:border-green-400 hover:text-green-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* ========== SUPPORT BANNER ========== */}
      <div className="relative w-full py-14 md:py-16 lg:py-20 px-4 text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/assets/donate-call.jpg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-green-500/40"></div>
        <div className="relative z-10 py-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
            {t("Support Our Projects")}
          </h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8">
            {t("Your contribution helps us expand our impact and create more sustainable solutions.")}
          </p>
          <Link
            to="/donate"
            className="inline-block bg-white text-green-600 font-semibold px-8 md:px-10 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {t("Make a Donation")}
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Project;