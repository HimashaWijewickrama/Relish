import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

const bullets = [
  "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit.",
  "Expertly crafted dishes using the finest local ingredients.",
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden
                          shadow-2xl">
            <Image
              src="/images/gallery/gallery-7.jpg"
              alt="About our restaurant"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-dark mb-4">
              Voluptatem dignissimos provident quasi corporis voluptates
              sit assumenda.
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <ul className="space-y-3 mb-6">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <FiCheckCircle
                    className="text-primary mt-0.5 shrink-0"
                    size={20}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-600 leading-relaxed">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}