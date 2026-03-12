import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-blush/25 via-lavender/25 to-sky/25 shadow-sm">

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Jazzy's Blessed Creations Logo"
            className="h-14 md:h-20 lg:h-24 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-warmBrown text-base font-semibold tracking-wide">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-coral" : "hover:text-coral transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/how-to-order"
            className={({ isActive }) =>
              isActive ? "text-coral" : "hover:text-coral transition"
            }
          >
            How To Order
          </NavLink>

          <NavLink
            to="/banner-pricing"
            className={({ isActive }) =>
              isActive ? "text-coral" : "hover:text-coral transition"
            }
          >
            Pricing
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "text-coral" : "hover:text-coral transition"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "text-coral" : "hover:text-coral transition"
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive ? "text-coral" : "hover:text-coral transition"
            }
          >
            FAQ
          </NavLink>

          <NavLink
            to="/meet-jazzy"
            className={({ isActive }) =>
              isActive
                ? "text-coral whitespace-nowrap"
                : "hover:text-coral transition whitespace-nowrap"
            }
          >
            Meet Jazzy
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-coral" : "hover:text-coral transition"
            }
          >
            Contact
          </NavLink>

          {/* Desktop Book Now */}
          <NavLink
            to="/book-here"
            className="bg-blush hover:bg-coral text-warmBrown px-6 py-2 rounded-full text-sm font-semibold shadow-md transition duration-300 hover:scale-105"
          >
            Book Now
          </NavLink>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-warmBrown text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-xl px-6 py-8 rounded-b-3xl">

          <div className="flex flex-col gap-6 text-warmBrown text-lg font-semibold">

            <NavLink to="/" onClick={() => setIsOpen(false)} className="hover:text-coral transition">
              Home
            </NavLink>

            <NavLink to="/how-to-order" onClick={() => setIsOpen(false)} className="hover:text-coral transition">
              How To Order
            </NavLink>

            <NavLink to="/banner-pricing" onClick={() => setIsOpen(false)} className="hover:text-coral transition">
              Pricing
            </NavLink>

            <NavLink to="/shop" onClick={() => setIsOpen(false)} className="hover:text-coral transition">
              Shop
            </NavLink>

            <NavLink to="/gallery" onClick={() => setIsOpen(false)} className="hover:text-coral transition">
              Gallery
            </NavLink>

            <NavLink to="/faq" onClick={() => setIsOpen(false)} className="hover:text-coral transition">
              FAQ
            </NavLink>

            <NavLink to="/meet-jazzy" onClick={() => setIsOpen(false)} className="hover:text-coral transition">
              Meet Jazzy
            </NavLink>

            <NavLink to="/contact" onClick={() => setIsOpen(false)} className="hover:text-coral transition">
              Contact
            </NavLink>

            <div className="pt-4 border-t border-blush/30">
              <NavLink
                to="/book-here"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-gradient-to-r from-blush to-coral text-white py-3 rounded-full shadow-lg transition hover:scale-105"
              >
                Book Now
              </NavLink>
            </div>

          </div>

        </div>
      )}

      {/* Accent Line */}
      <div className="h-[3px] bg-gradient-to-r from-blush via-lavender to-sky"></div>

    </nav>
  );
}

export default Navbar;
