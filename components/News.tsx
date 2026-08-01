const news = [
  {
    tag: "Research",
    date: "Jan 15, 2025",
    title: "Meridian Scientists Develop Breakthrough in Cancer Immunotherapy",
    excerpt: "A team from our Medical School has published landmark findings that could transform treatment protocols worldwide.",
  },
  {
    tag: "Rankings",
    date: "Jan 8, 2025",
    title: "Meridian Rises to #42 in QS World University Rankings",
    excerpt: "Continued investment in research infrastructure and faculty development has driven our highest-ever global ranking.",
  },
  {
    tag: "Campus",
    date: "Dec 20, 2024",
    title: "New Innovation Hub Opens on South Campus",
    excerpt: "The 80,000 sq ft facility offers state-of-the-art labs, co-working spaces, and startup incubation facilities.",
  },
];

export default function News() {
  return (
    <section id="news" className="py-24 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">Latest Updates</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">News & Events</h2>
          </div>
          <a href="#" className="text-[#c9a84c] font-semibold hover:underline text-sm">
            View all news →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((article) => (
            <article
              key={article.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/8 hover:border-[#c9a84c]/30 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#c9a84c]/20 text-[#c9a84c] text-xs font-semibold px-3 py-1 rounded-full">
                  {article.tag}
                </span>
                <span className="text-white/30 text-xs">{article.date}</span>
              </div>
              <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-[#c9a84c] transition-colors">
                {article.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {article.excerpt}
              </p>
              <div className="mt-5 text-[#c9a84c] text-sm font-medium group-hover:underline">
                Read more →
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}