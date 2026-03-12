import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-blush/25 via-lavender/25 to-sky/25 shadow-sm">

      <div className="max-w-5xl mx-auto px-6 py-2 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Jazzy's Blessed Creations Logo"
            className="h-24 w-auto object-contain"
          />
        </NavLink>

        {/* Navigation Links */}
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

        </div>

        {/* Book Now Button */}
        <NavLink
          to="/book-here"
          className="hidden md:inline-block bg-blush hover:bg-coral text-warmBrown px-6 py-2 rounded-full text-sm font-semibold shadow-md transition duration-300 hover:scale-105"
        >
          Book Now
        </NavLink>

      </div>

      {/* Accent Line */}
      <div className="h-[3px] bg-gradient-to-r from-blush via-lavender to-sky"></div>

    </nav>
  );
}

export default Navbar;
