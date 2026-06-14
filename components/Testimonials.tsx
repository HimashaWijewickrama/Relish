import Image from "next/image";

const testimonials = [
  {
    quote: "The food was absolutely amazing! The flavors were perfectly balanced and the presentation was stunning. I can't wait to come back and try more dishes!",
    name: "Kane Smith",
    role: "Customer",
    image: "/images/testimonials/kane.jpg",
    stars: 5,
  },
  {
    quote: "I had a wonderful dining experience at this restaurant. The staff was attentive and the ambiance was cozy. The food exceeded my expectations, especially the dessert!",
    name: "Belly Williams",
    role: "Customer",
    image: "/images/testimonials/belly.jpg",
    stars: 4,
  },
  {
    quote: "I was blown away by the quality of the food and the creativity of the dishes. The flavors were bold and unique, and the service was top-notch. Highly recommend this place!",
    name: "John Doe",
    role: "Customer",
    image: "/images/testimonials/john.jpg",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#323130]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-subtitle">What Our Guests Say</p>
          <h2 className="section-title">Reviews</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-black border border-[#0a1628]/8 rounded-3xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-[#FF8C42] text-4xl mb-4">"</div>
              <p className="font-extralight text-base mb-6 italic">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#0a1628]/8">
                <div className="w-20 h-20 rounded-full overflow-hidden relative">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-[#e6e7e9]/100 text-sm">{t.name}</div>
                  <div className="text-[#64748b] text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}