import { useState } from "react";
import { NavLink } from "react-router-dom";

/* Featured Images */
import memorialExample from "../assets/shop/holidays/memorialday-1.jpg";
import premiumExample from "../assets/shop/holidays/graduation-2.jpg";

/* Holiday Inspiration Images */
import fourthOfJuly from "../assets/shop/holidays/fourthofjuly-1.jpg";
import graduation1 from "../assets/shop/holidays/graduation-1.jpg";
import laborDay from "../assets/shop/holidays/laborday-1.jpg";
import mardiGras1 from "../assets/shop/holidays/mardigras-1.jpg";
import mardiGras2 from "../assets/shop/holidays/mardigras-2.jpg";
import memorialDay1 from "../assets/shop/holidays/memorialday-1.jpg";
import newYear1 from "../assets/shop/holidays/newyear-1.jpg";
import newYear2 from "../assets/shop/holidays/newyear-2.jpg";
import prom1 from "../assets/shop/holidays/prom-1.jpg";
import prom2 from "../assets/shop/holidays/prom-2.jpg";
import stPatricks1 from "../assets/shop/holidays/stpatricks-1.jpg";
import stPatricks2 from "../assets/shop/holidays/stpatricks-2.jpg";
import thanksgiving1 from "../assets/shop/holidays/thanksgiving-1.jpg";
import thanksgiving2 from "../assets/shop/holidays/thanksgiving-2.jpg";
import thanksgiving3 from "../assets/shop/holidays/thanksgiving-3.jpg";
import valentines1 from "../assets/shop/holidays/valentines-1.jpg";
import valentines2 from "../assets/shop/holidays/valentines-2.jpg";
import valentines3 from "../assets/shop/holidays/valentines-3.jpg";

function Shop() {
  const [language, setLanguage] = useState("en");
  const isSpanish = language === "es";

  const inspirationImages = [
    fourthOfJuly,
    graduation1,
    laborDay,
    mardiGras1,
    mardiGras2,
    memorialDay1,
    newYear1,
    newYear2,
    prom1,
    prom2,
    stPatricks1,
    stPatricks2,
    thanksgiving1,
    thanksgiving2,
    thanksgiving3,
    valentines1,
    valentines2,
    valentines3,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blush/20 via-white to-lavender/20 px-6 md:px-20 py-20">

      {/* Language Toggle */}
      <div className="flex justify-end mb-12">
        <button
          onClick={() => setLanguage(isSpanish ? "en" : "es")}
          className="text-base font-semibold text-warmBrown hover:text-coral transition"
        >
          {isSpanish ? "English" : "Español"}
        </button>
      </div>

      {/* Page Title */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-warmBrown mb-6">
          {isSpanish ? "Tienda Digital" : "Digital Shop"}
        </h1>

        <p className="text-xl text-warmBrown/80 max-w-3xl mx-auto">
          {isSpanish
            ? "Elige tu nivel de diseño digital personalizado."
            : "Choose your custom digital banner package."}
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">

        {/* Custom Digital */}
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center border border-blush/30 hover:shadow-2xl transition duration-300">

          <img
            src={memorialExample}
            alt="Custom Digital Example"
            className="rounded-2xl mb-6 shadow-md hover:scale-105 transition duration-500"
          />

          <h2 className="text-2xl font-bold text-warmBrown mb-4">
            {isSpanish ? "Mockup Digital Personalizado" : "Custom Digital Mockup"}
          </h2>

          <p className="text-warmBrown/80 mb-6">
            {isSpanish
              ? "Diseño personalizado con hasta 2 revisiones."
              : "Custom design with up to 2 revisions."}
          </p>

          <p className="text-4xl font-extrabold text-coral mb-6">$25</p>

          <a
            href="https://buy.stripe.com/test_aFa3cv0OTdvg0si1VY4Vy00"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-coral hover:bg-blush text-white px-8 py-3 rounded-full font-semibold transition duration-300"
          >
            {isSpanish ? "Comprar Ahora" : "Buy Now"}
          </a>
        </div>

        {/* Premium Digital */}
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 text-center border-2 border-coral hover:shadow-3xl transition duration-300">

          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-coral text-white text-sm font-bold px-5 py-1 rounded-full shadow">
            {isSpanish ? "Más Popular" : "Most Popular"}
          </div>

          <img
            src={premiumExample}
            alt="Premium Digital Example"
            className="rounded-2xl mb-6 shadow-md hover:scale-105 transition duration-500"
          />

          <h2 className="text-2xl font-bold text-warmBrown mb-4 mt-2">
            {isSpanish ? "Mockup Digital Premium" : "Premium Digital Mockup"}
          </h2>

          <p className="text-warmBrown/80 mb-6">
            {isSpanish
              ? "Diseño detallado con hasta 4 revisiones."
              : "Detailed layered design with up to 4 revisions."}
          </p>

          <p className="text-5xl font-extrabold text-coral mb-6">$35</p>

          <a
            href="https://buy.stripe.com/test_fZubJ1415dvgcb03024Vy01"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-coral hover:bg-blush text-white px-8 py-3 rounded-full font-semibold transition duration-300"
          >
            {isSpanish ? "Comprar Premium" : "Buy Premium"}
          </a>
        </div>
      </div>

      {/* Inspiration Section */}
      <div className="mt-32">
        <h2 className="text-4xl font-bold text-warmBrown text-center mb-12">
          {isSpanish ? "Inspiración de Diseños" : "Holiday Design Inspiration"}
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {inspirationImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={img}
                alt="Inspiration Banner"
                className="w-full h-auto hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Hand-Painted CTA */}
      <div className="mt-28 text-center">
        <h3 className="text-3xl font-bold text-warmBrown mb-6">
          {isSpanish
            ? "¿Buscas un Banner Pintado a Mano?"
            : "Looking for a Hand-Painted Banner?"}
        </h3>

        <NavLink
          to="/book-here"
          className="bg-blush hover:bg-coral text-warmBrown px-10 py-4 rounded-full font-semibold shadow-md transition duration-300"
        >
          {isSpanish ? "Reservar Ahora" : "Book Your Custom Banner"}
        </NavLink>
      </div>
    </div>
  );
}

export default Shop;
