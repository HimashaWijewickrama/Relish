import { GiKnifeFork } from "react-icons/gi";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white mb-4">
              <GiKnifeFork className="text-primary" />
              <span className="font-display text-lg font-bold">Relish</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              100 Flower Street, Kandy, Sri Lanka
            </p>
            <p className="text-sm">Phone: +94 769 603 388</p>
            <p className="text-sm">Email: info@relishsl.com</p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home","About","Menu","Events","Gallery"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`}
                     className="hover:text-primary transition-colors">
                    › {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {["Functions","Parties","Events","Private Chef","Ceremony"].map((s) => (
                <li key={s}>
                  <a href="#" className="hover:text-primary transition-colors">
                    › {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">
              Subscribe for weekly specials and events.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded bg-white/10 border
                           border-white/20 text-white placeholder-gray-500
                           text-sm focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-white px-4 py-2 rounded border border-primary hover:bg-primary/80
                                 hover:bg-red-700 transition-colors text-sm">
                Go
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm">
          Copyright © {year} <strong className="text-white"> Relish PVT LTD </strong>.
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}