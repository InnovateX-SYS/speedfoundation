import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";
import Footer from "../components/footer";

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
    location: "South Nigeria",
    duration: "2024 - Ongoing",
    impact: "5,000 people impacted",
    stat: "250,000 trees protected",
    image: "/assets/afforestation.jpg",
  },
  {
    id: 2,
    category: "reforestation",
    filterKey: "Environment",
    title: "Coastal Reforestation Project",
    description: "Restoring coastal ecosystems through native tree planting and habitat rehabilitation across degraded shorelines.",
    location: "West nigeria",
    duration: "2023 - 2026",
    impact: "3,000 people impacted",
    stat: "75,000 trees planted",
    image: "/assets/afforestation-2.jpg",
  },
  {
    id: 3,
    category: "conservation",
    filterKey: "Environment",
    title: "Marine Life Protection",
    description: "Establishing marine protected areas to preserve biodiversity and restore coral reefs along nigeria's coastline.",
    location: "East nigeria Coast",
    duration: "2024 - 2027",
    impact: "8,000 people impacted",
    stat: "10,000 sq km protected",
    image: "/assets/water-from-river-nigeria.jpg",
  },
  {
    id: 4,
    category: "regreening",
    filterKey: "Environment",
    title: "Sahel Regreening Initiative",
    description: "Reversing desertification in the Sahel region through farmer-managed natural regeneration and tree planting.",
    location: "Sahel, West nigeria",
    duration: "2022 - Ongoing",
    impact: "12,000 people impacted",
    stat: "500,000 acres restored",
    image: "/assets/Regreening-nigeria.jpg",
  },
  {
    id: 5,
    category: "wetlands",
    filterKey: "Environment",
    title: "Wetland Ecosystem Restoration",
    description: "Rehabilitating critical wetland habitats that serve as natural water filters and biodiversity hotspots.",
    location: "Southern nigeria",
    duration: "2023 - 2026",
    impact: "4,500 people impacted",
    stat: "2,000 ha restored",
    image: "/assets/water-help.webp",
  },
  {
    id: 6,
    category: "conservation",
    filterKey: "Environment",
    title: "Wildlife Corridor Restoration",
    description: "Creating safe wildlife passages and habitat connectivity for endangered species across fragmented landscapes.",
    location: "Southeast nigeria",
    duration: "2024 - 2028",
    impact: "6,000 people impacted",
    stat: "15 species protected",
    image: "/assets/school-farming.jpg",
  },

  // ===== EDUCATION (6) =====
  {
    id: 7,
    category: "agriculture",
    filterKey: "Education",
    title: "Sustainable Agriculture Program",
    description: "Training farmers in organic methods and climate-resilient agriculture practices to increase yields sustainably.",
    location: "East nigeria",
    duration: "2023 - Ongoing",
    impact: "4,000 people impacted",
    stat: "800 farmers trained",
    image: "/assets/school-farming.jpg",
  },
  {
    id: 8,
    category: "education",
    filterKey: "Education",
    title: "Green Schools Initiative",
    description: "Integrating environmental education into school curricula and building eco-friendly school gardens across rural communities.",
    location: "Nigeria",
    duration: "2023 - 2025",
    impact: "15,000 students reached",
    stat: "200 schools enrolled",
    image: "/assets/afforestation.jpg",
  },
  {
    id: 9,
    category: "training",
    filterKey: "Education",
    title: "Climate Literacy Program",
    description: "Educating community leaders and youth on climate change, its impacts, and actionable local responses.",
    location: "Ghana",
    duration: "2024 - Ongoing",
    impact: "3,200 people trained",
    stat: "120 communities reached",
    image: "/assets/afforestation-2.jpg",
  },
  {
    id: 10,
    category: "vocational",
    filterKey: "Education",
    title: "Eco-Entrepreneurship Academy",
    description: "Teaching young nigerians to build green businesses in renewable energy, waste management, and sustainable agriculture.",
    location: "Kenya",
    duration: "2024 - 2027",
    impact: "2,800 youth trained",
    stat: "450 businesses launched",
    image: "/assets/Regreening-nigeria.jpg",
  },
  {
    id: 11,
    category: "research",
    filterKey: "Education",
    title: "Environmental Research Hub",
    description: "Funding field research and academic partnerships to develop evidence-based conservation solutions for nigerian ecosystems.",
    location: "South nigeria",
    duration: "2022 - Ongoing",
    impact: "50 researchers supported",
    stat: "30 studies published",
    image: "/assets/water-from-river-nigeria.jpg",
  },
  {
    id: 12,
    category: "women",
    filterKey: "Education",
    title: "Women in Conservation",
    description: "Empowering women with environmental science training and leadership skills to become community conservation champions.",
    location: "Tanzania",
    duration: "2023 - 2026",
    impact: "1,500 women trained",
    stat: "80 female rangers certified",
    image: "/assets/second-section.png",
  },

  // ===== DEVELOPMENT (6) =====
  {
    id: 13,
    category: "renewable",
    filterKey: "Development",
    title: "Solar Villages Initiative",
    description: "Bringing clean, renewable energy to remote communities through solar panel installation and maintenance training.",
    location: "Rural nigeria",
    duration: "2025 - Ongoing",
    impact: "2,500 people impacted",
    stat: "500 homes powered",
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
    impact: "20,000 people with clean water",
    stat: "150 boreholes drilled",
    image: "/assets/water-help.webp",
  },
  {
    id: 15,
    category: "livelihood",
    filterKey: "Development",
    title: "Eco-Tourism Development",
    description: "Developing sustainable eco-tourism infrastructure that generates community income while protecting natural habitats.",
    location: "Rwanda",
    duration: "2024 - 2027",
    impact: "3,000 livelihoods created",
    stat: "$2M community revenue",
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
    impact: "5,000 jobs created",
    stat: "50,000 tons recycled",
    image: "/assets/afforestation.jpg",
  },
  {
    id: 17,
    category: "infrastructure",
    filterKey: "Development",
    title: "Green Infrastructure Project",
    description: "Building climate-resilient community infrastructure including flood barriers, green rooftops, and urban forests.",
    location: "Accra, Ghana",
    duration: "2024 - 2028",
    impact: "40,000 residents protected",
    stat: "25 km flood barriers built",
    image: "/assets/afforestation-2.jpg",
  },
  {
    id: 18,
    category: "food",
    filterKey: "Development",
    title: "Food Forest Initiative",
    description: "Establishing community food forests that provide nutritious food, restore biodiversity, and build household resilience.",
    location: "Uganda",
    duration: "2023 - 2026",
    impact: "8,000 families fed",
    stat: "300 food forests planted",
    image: "/assets/school-farming.jpg",
  },

  // ===== SPECIAL NEEDS (6) =====
  {
    id: 19,
    category: "disability",
    filterKey: "Special Needs",
    title: "Inclusive Conservation Program",
    description: "Adapting conservation volunteer programs to include persons with disabilities, ensuring environmental work is accessible to all.",
    location: "South nigeria",
    duration: "2024 - Ongoing",
    impact: "800 persons included",
    stat: "45 adapted work sites",
    image: "/assets/Regreening-nigeria.jpg",
  },
  {
    id: 20,
    category: "elderly",
    filterKey: "Special Needs",
    title: "Climate Resilience for Elders",
    description: "Supporting elderly communities most vulnerable to climate impacts with adaptation resources, shelter upgrades, and care networks.",
    location: "Rural Kenya",
    duration: "2023 - 2026",
    impact: "2,200 elders supported",
    stat: "1,400 homes upgraded",
    image: "/assets/water-help.webp",
  },
  {
    id: 21,
    category: "refugees",
    filterKey: "Special Needs",
    title: "Refugee Green Zones",
    description: "Creating sustainable green zones in and around refugee settlements to provide food security, clean air, and mental wellbeing.",
    location: "Uganda",
    duration: "2024 - 2027",
    impact: "15,000 refugees served",
    stat: "12 green zones established",
    image: "/assets/afforestation.jpg",
  },
  {
    id: 22,
    category: "children",
    filterKey: "Special Needs",
    title: "Children's Nature Therapy",
    description: "Using nature-based therapy and outdoor programs to support the mental and emotional health of at-risk and traumatized children.",
    location: "DRC",
    duration: "2023 - Ongoing",
    impact: "3,500 children supported",
    stat: "60 therapy centers active",
    image: "/assets/afforestation-2.jpg",
  },
  {
    id: 23,
    category: "indigenous",
    filterKey: "Special Needs",
    title: "Indigenous Land Rights Defense",
    description: "Supporting indigenous communities to legally protect their ancestral lands from deforestation and illegal resource extraction.",
    location: "Central nigeria",
    duration: "2022 - Ongoing",
    impact: "10,000 indigenous people protected",
    stat: "2.5M acres legally secured",
    image: "/assets/water-from-river-nigeria.jpg",
  },
  {
    id: 24,
    category: "pastoralists",
    filterKey: "Special Needs",
    title: "Pastoralist Climate Adaptation",
    description: "Helping nomadic and pastoralist communities adapt their herding practices to shifting climate patterns and drought cycles.",
    location: "Horn of nigeria",
    duration: "2024 - 2027",
    impact: "6,000 families supported",
    stat: "90% reduced livestock loss",
    image: "/assets/school-farming.jpg",
  },
];

const Project = () => {
  const [language, setLanguage] = React.useState("English");
  const [activeLink, setActiveLink] = React.useState("Projects");
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
      <Nav
        language={language}
        setLanguage={setLanguage}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />

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
            Nurturing a Greener Tomorrow
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Join us in transforming nigeria's future through reforestation, water
            conservation, and climate-resilient initiatives. Together, we can
            build a more sustainable and resilient environment for generations to come.
          </p>
        </div>
      </div>

      {/* ========== STATS BAR ========== */}
      <div className="w-full bg-white py-6 md:py-8 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
          {[
            { number: "50+", label: "Active Projects" },
            { number: "25", label: "states" },
            { number: "500K+", label: "Trees Planted" },
            { number: "100K+", label: "Lives Changed" },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-600">
                {stat.number}
              </span>
              <span className="text-gray-500 text-xs md:text-sm mt-1">{stat.label}</span>
            </div>
          ))}
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
              No projects found in this category.
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
                        alt={project.title}
                        className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 right-3 md:top-4 md:right-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 md:p-6 flex flex-col flex-grow">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4 md:mb-5 flex-grow">
                        {project.description}
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
                          {project.duration}
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {project.impact}
                        </div>
                      </div>

                      {/* Stat line */}
                      <div className="flex items-center gap-2 text-green-600 text-sm font-semibold mb-4 md:mb-5">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        {project.stat}
                      </div>

                      {/* Button */}
                      <Link
                        to="/donate"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 md:py-3 px-6 rounded-xl text-center transition-colors text-sm"
                      >
                        Learn More
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
            Support Our Projects
          </h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8">
            Your contribution helps us expand our impact and create more sustainable solutions.
          </p>
          <Link
            to="/donate"
            className="inline-block bg-white text-green-600 font-semibold px-8 md:px-10 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Make a Donation
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Project;