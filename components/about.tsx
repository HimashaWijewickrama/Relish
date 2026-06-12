import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

const bullets = [
  "Seasonal, locally sourced ingredients.",
  "A chef-driven menu blending tradition and innovation.",
  "A warm, welcoming atmosphere for gatherings of any size.",
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-dark/80">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="section-subtitle">Our Story</p>
          <h2 className="section-title">About Us</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative h-76 md:h-[500px] rounded-2xl overflow-hidden
                          shadow-4xl">
            <Image
              src="/images/gallery/gallery-1.jpg"
              alt="About our restaurant"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-gray-200 mb-6 leading-relaxed text-lg">
              Founded with a passion for honest food and hospitality, we focus
              on thoughtful dishes prepared with care and the best seasonal
              produce.
            </p>

            <ul className="space-y-3 mb-6 text-lg">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <FiCheckCircle
                    className="text-primary mt-0.5 shrink-0"
                    size={20}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-200 mb-12 text-lg">
              Our team crafts every dish to highlight natural flavors and
              create memorable moments—whether you're joining us for a casual
              lunch or a special evening out.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <a href="#"
                className="border-2 border-white text-white px-8 py-3 rounded
                        font-semibold hover:bg-white/10 hover:text-white
                        transition-colors duration-300">See More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}