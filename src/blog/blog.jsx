import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { useI18n } from "../i18n/LanguageContext";

const categories = [
  "All Posts",
  "Conservation",
  "Climate",
  "Community",
  "Water",
  "Policy",
];

const featured = {
  id: 0,
  category: "Conservation",
  title: "Inside Cross River: How Community Rangers Are Guarding Nigeria's Last Rainforest",
  excerpt:
    "In the hills of Cross River State, a new generation of community rangers is proving that the most effective way to protect a forest is to hand its stewardship back to the people who live in it. We spent a week on patrol with them.",
  author: "Mrs. Ademola Charlotte",
  date: "28 July 2026",
  readTime: "8 min read",
  image: "/assets/afforestation.jpg",
};

const posts = [
  {
    id: 1,
    category: "Conservation",
    title: "Why Native Species Matter in Coastal Reforestation",
    excerpt:
      "Planting the wrong tree can do more harm than planting none at all. Here is how we choose species for the shorelines of Ondo and Lagos.",
    author: "Mrs. Ademola Charlotte",
    date: "21 July 2026",
    readTime: "6 min read",
    image: "/assets/afforestation-2.jpg",
  },
  {
    id: 2,
    category: "Water",
    title: "What Clean Water Really Costs a Rural Community",
    excerpt:
      "A borehole is only the beginning. We break down the maintenance, training, and local ownership that keep water flowing years after the drilling rig leaves.",
    author: "Ms. Medina Ojugbele",
    date: "14 July 2026",
    readTime: "7 min read",
    image: "/assets/water-help.webp",
  },
  {
    id: 3,
    category: "Climate",
    title: "The Harmattan Is Changing — and Northern Farmers Noticed First",
    excerpt:
      "Long before the data confirmed it, farmers in Sokoto and Katsina were adjusting their planting calendars. Their observations are now shaping our regreening work.",
    author: "Mr. Ademola Williams",
    date: "7 July 2026",
    readTime: "5 min read",
    image: "/assets/Regreening-nigeria.jpg",
  },
  {
    id: 4,
    category: "Community",
    title: "School Farms Are Teaching More Than Agriculture",
    excerpt:
      "Students who grow their own food learn patience, nutrition, and climate science in one plot of land. A look at what happens after the first harvest.",
    author: "Ms. Medina Ojugbele",
    date: "30 June 2026",
    readTime: "6 min read",
    image: "/assets/school-farming.jpg",
  },
  {
    id: 5,
    category: "Policy",
    title: "Reading Nigeria's Climate Act: What It Means for Local Projects",
    excerpt:
      "Policy documents rarely reach the communities they affect. We translate the parts that matter for anyone running an environmental project on the ground.",
    author: "Mr. Ademola Williams",
    date: "23 June 2026",
    readTime: "9 min read",
    image: "/assets/climate-change1.jpg",
  },
  {
    id: 6,
    category: "Conservation",
    title: "Wildlife Corridors: Giving Animals Room to Move",
    excerpt:
      "Fragmented habitat is a quiet driver of species loss. Connecting the pieces in Enugu and Ebonyi may matter more than protecting any single reserve.",
    author: "Mrs. Ademola Charlotte",
    date: "16 June 2026",
    readTime: "7 min read",
    image: "/assets/blog2.jpg",
  },
  {
    id: 7,
    category: "Community",
    title: "Turning Waste Into Work in Lagos",
    excerpt:
      "Compost, biogas, and recycled plastic are creating livelihoods in neighbourhoods where refuse used to pile up. Meet the people running the sorting sheds.",
    author: "Ms. Medina Ojugbele",
    date: "9 June 2026",
    readTime: "5 min read",
    image: "/assets/pollution-2.jpg",
  },
  {
    id: 8,
    category: "Water",
    title: "Wetlands Are Nigeria's Cheapest Flood Defence",
    excerpt:
      "The Niger Delta's wetlands filter water, store carbon, and absorb floodwater for free. Restoring them costs a fraction of the concrete alternative.",
    author: "Ms. Medina Ojugbele",
    date: "2 June 2026",
    readTime: "6 min read",
    image: "/assets/water-from-river-nigeria.jpg",
  },
  {
    id: 9,
    category: "Climate",
    title: "Solar Beyond the Panel: Why Maintenance Training Comes First",
    excerpt:
      "Installed systems fail without local technicians. In rural Niger State, we train before we build — and the lights stay on.",
    author: "Mr. Ademola Williams",
    date: "26 May 2026",
    readTime: "5 min read",
    image: "/assets/second-section.png",
  },
  {
    id: 10,
    category: "Community",
    title: "Volunteering Changed How I See My Own Street",
    excerpt:
      "A volunteer from Ibadan writes about her first tree-planting weekend, and the habit it started long after the shovels were returned.",
    author: "Ms. Medina Ojugbele",
    date: "19 May 2026",
    readTime: "4 min read",
    image: "/assets/blog3.webp",
  },
  {
    id: 11,
    category: "Policy",
    title: "Land Rights Are Climate Rights",
    excerpt:
      "When communities hold secure title to their land, forests stand a better chance. A look at our legal support work in Taraba.",
    author: "Mr. Ademola Williams",
    date: "12 May 2026",
    readTime: "8 min read",
    image: "/assets/blog1.jpg",
  },
  {
    id: 12,
    category: "Conservation",
    title: "Field Notes: A Season of Regreening in Katsina",
    excerpt:
      "Photographs and observations from six months of farmer-managed natural regeneration, where the trees were already in the soil, waiting.",
    author: "Mrs. Ademola Charlotte",
    date: "5 May 2026",
    readTime: "6 min read",
    image: "/assets/Environment-Day.jpg",
  },
];

const Blog = () => {
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = React.useState("All Posts");
  const [currentPage, setCurrentPage] = React.useState(1);
  const postsPerPage = 6;

  const filtered =
    activeCategory === "All Posts"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / postsPerPage);
  const visiblePosts = filtered.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="overflow-x-hidden">
      <Nav />

      {/* ========== HERO ========== */}
      <div className="relative h-[280px] sm:h-[340px] md:h-[420px] w-full">
        <img
          src="/assets/blog4.jpeg"
          alt="Stories from the field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-green-400 mb-3">
            {t("Speed Foundation Journal")}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
            {t("Stories From the Field")}
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed text-white/80">
            {t("Reporting, research, and reflections from our work across nigeria — written by the people doing it.")}
          </p>
        </div>
      </div>

      {/* ========== FEATURED POST ========== */}
      <div className="w-full bg-white py-10 md:py-14 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center bg-gray-50 rounded-3xl overflow-hidden">
            <div className="h-56 sm:h-72 lg:h-full lg:min-h-[340px] overflow-hidden">
              <img
                src={featured.image}
                alt={t(featured.title)}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {t(featured.category)}
                </span>
                <span className="text-gray-400 text-xs md:text-sm">
                  {t("Featured")}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-snug">
                {t(featured.title)}
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-5 md:mb-6">
                {t(featured.excerpt)}
              </p>
              <div className="flex items-center gap-3 text-gray-500 text-xs md:text-sm mb-6">
                <span className="font-semibold text-gray-700">
                  {featured.author}
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>{featured.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>{t(featured.readTime)}</span>
              </div>
              <Link
                to="/blog"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 md:py-3 px-7 rounded-xl transition-colors text-sm"
              >
                {t("Read Story")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========== CATEGORY TABS ========== */}
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
              {t(cat)}
            </button>
          ))}
        </div>
      </div>

      {/* ========== POSTS GRID ========== */}
      <div className="w-full bg-gray-50 pb-14 md:pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {visiblePosts.length === 0 ? (
            <p className="text-center text-gray-500 py-16">
              {t("No posts in this category yet — check back soon.")}
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
                {visiblePosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={t(post.title)}
                        className="w-full h-48 md:h-52 object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 md:top-4 md:left-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {t(post.category)}
                      </span>
                    </div>

                    <div className="p-4 md:p-6 flex flex-col flex-grow">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 leading-snug">
                        {t(post.title)}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4 md:mb-5 flex-grow">
                        {t(post.excerpt)}
                      </p>

                      <div className="flex items-center gap-2 text-gray-500 text-xs mb-4 flex-wrap">
                        <span className="font-semibold text-gray-700">
                          {post.author}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span>{t(post.readTime)}</span>
                      </div>

                      <Link
                        to="/blog"
                        className="w-full border border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-bold py-2.5 md:py-3 px-6 rounded-xl text-center transition-colors text-sm"
                      >
                        {t("Read More")}
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* ========== PAGINATION ========== */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-10 md:mt-12 flex-wrap">
                  <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-green-50 hover:border-green-400 hover:text-green-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {Array.from({ length: totalPages }).map((_, i) => {
                    const page = i + 1;
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
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

                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
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

      {/* ========== NEWSLETTER ========== */}
      <div className="w-full relative">
        <img
          src="/assets/hands+plants.png"
          alt="Newsletter"
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-green-900/70 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
            {t("Get New Stories in Your Inbox")}
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-6 max-w-xl">
            {t("Field reports, project updates, and ways to get involved — sent when we have something worth reading.")}
          </p>
          <div className="w-full max-w-xl">
            <div className="flex flex-col sm:flex-row bg-white rounded-[10px] overflow-hidden">
              <input
                type="email"
                placeholder={t("Enter your email address")}
                className="flex-1 px-4 md:px-6 py-3 md:py-4 focus:outline-none"
              />
              <button className="bg-green-600 text-white font-bold px-6 md:px-8 py-3 md:py-4 whitespace-nowrap hover:bg-green-700 transition-colors">
                {t("Subscribe")}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
