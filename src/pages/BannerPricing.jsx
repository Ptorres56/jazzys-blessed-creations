import { useState } from "react";
import { NavLink } from "react-router-dom";

function BannerPricing() {
  const [isSpanish, setIsSpanish] = useState(false);

  return (
    <div className="bg-white min-h-screen">

      {/* ================= HEADER ================= */}
      <section className="relative text-center py-24 bg-gradient-to-b from-blush/30 via-lavender/20 to-white">

        <div className="absolute top-6 right-8">
          <button
            onClick={() => setIsSpanish(!isSpanish)}
            className="text-base font-semibold text-warmBrown hover:text-coral transition"
          >
            {isSpanish ? "English" : "Español"}
          </button>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-warmBrown mb-6">
          {isSpanish
            ? "Tamaños y Precios"
            : "Banner Sizes & Pricing"}
        </h1>

        <p className="text-xl text-warmBrown/80 max-w-2xl mx-auto px-6">
          {isSpanish
            ? "Precios base. Los extras no están incluidos."
            : "Base prices. Extras not included."}
        </p>
      </section>


      {/* ================= PACKAGES ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

          {/* BASIC */}
          <div className="bg-blush/30 rounded-3xl shadow-xl p-10 border border-blush/40 text-center transition duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold text-warmBrown mb-4 tracking-wide">
              {isSpanish ? "BÁSICO" : "BASIC"}
            </h2>

            <p className="text-xl font-semibold text-warmBrown mb-3">
              4 FT x 3 FT
            </p>

            <p className="text-5xl font-extrabold text-coral mb-6">$45</p>

            <p className="text-lg text-warmBrown leading-relaxed">
              {isSpanish
                ? "Mockups ilimitados, borde básico y relleno simple (confeti/puntos). No incluye personajes."
                : "Unlimited mockups, basic border and simple filler (dots/confetti). No characters included."}
            </p>
          </div>


          {/* STANDARD */}
          <div className="bg-lavender/30 rounded-3xl shadow-xl p-10 border border-lavender/40 text-center transition duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold text-warmBrown mb-4 tracking-wide">
              {isSpanish ? "ESTÁNDAR" : "STANDARD"}
            </h2>

            <p className="text-xl font-semibold text-warmBrown mb-3">
              5 FT x 3 FT
            </p>

            <p className="text-5xl font-extrabold text-coral mb-6">$55</p>

            <p className="text-lg text-warmBrown leading-relaxed">
              {isSpanish
                ? "Mockups ilimitados, borde, relleno simple (confeti/puntos) e incluye 1 personaje."
                : "Unlimited mockups, border, simple filler (dots/confetti) and includes 1 character."}
            </p>
          </div>


          {/* PREMIUM */}
          <div className="relative bg-sky/30 rounded-3xl shadow-2xl p-12 border border-sky/50 text-center transform scale-105 transition duration-300 hover:scale-110">

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-coral text-white text-sm font-bold px-6 py-2 rounded-full shadow-md">
              {isSpanish ? "Más Popular" : "Most Popular"}
            </div>

            <h2 className="text-2xl font-bold text-warmBrown mb-4 tracking-wide mt-4">
              {isSpanish ? "PREMIUM" : "PREMIUM"}
            </h2>

            <p className="text-xl font-semibold text-warmBrown mb-3">
              6 FT x 3 FT
            </p>

            <p className="text-6xl font-extrabold text-coral mb-6">$65</p>

            <p className="text-lg text-warmBrown leading-relaxed">
              {isSpanish
                ? "Mockups ilimitados, borde, relleno simple (confeti/puntos) e incluye 2 personajes."
                : "Unlimited mockups, border, simple filler (dots/confetti) and includes 2 characters."}
            </p>
          </div>

        </div>
      </section>


      {/* ================= ADD ONS ================= */}
      <section className="py-24 bg-gradient-to-r from-blush/20 via-lavender/20 to-sky/20 px-6 text-center">

        <h2 className="text-5xl font-bold text-warmBrown mb-16 tracking-wide">
          {isSpanish ? "Extras" : "Add Ons"}
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

          <div className="bg-white rounded-3xl p-12 shadow-xl border border-blush/30 hover:shadow-2xl transition duration-300">
            <h3 className="text-3xl font-semibold text-warmBrown mb-4">
              {isSpanish ? "Brillantina" : "Glitter"}
            </h3>
            <p className="text-5xl font-extrabold text-coral">$5</p>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-xl border border-lavender/30 hover:shadow-2xl transition duration-300">
            <h3 className="text-3xl font-semibold text-warmBrown mb-4">
              {isSpanish ? "Personajes Adicionales" : "Additional Characters"}
            </h3>
            <p className="text-5xl font-extrabold text-coral">
              $5 {isSpanish ? "cada uno" : "each"}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-xl border border-sky/30 hover:shadow-2xl transition duration-300">
            <h3 className="text-3xl font-semibold text-warmBrown mb-4">
              {isSpanish
                ? "Borde Completo"
                : "Full Border"}
            </h3>
            <p className="text-lg text-warmBrown/70 mb-4">
              {isSpanish
                ? "(Cuadros, rayas, etc.)"
                : "(Gingham, stripes, etc.)"}
            </p>
            <p className="text-5xl font-extrabold text-coral">$10</p>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-xl border border-blush/30 hover:shadow-2xl transition duration-300">
            <h3 className="text-3xl font-semibold text-warmBrown mb-4">
              {isSpanish ? "Ojales" : "Grommets"}
            </h3>
            <p className="text-4xl font-extrabold text-coral">
              $5 / 2 &nbsp; | &nbsp; $10 / 4
            </p>
          </div>

        </div>

        <p className="mt-16 text-xl text-warmBrown/80 max-w-2xl mx-auto">
          {isSpanish
            ? "La entrega local tiene un costo adicional de $5. Recoger no tiene costo extra."
            : "Local drop off is an additional $5. Pickup is free."}
        </p>
      </section>


      {/* ================= DEPOSIT INFO ================= */}
      <section className="py-20 text-center px-6">
        <p className="text-xl text-warmBrown/80 max-w-3xl mx-auto mb-10 leading-relaxed">
          {isSpanish
            ? "Se requiere el 50% del total para comenzar el diseño y recibir mockups ilimitados antes de pintar. El resto se paga al recoger o entregar."
            : "50% of the total is required to begin design and receive unlimited mockups before painting. The remaining balance is due at pickup or delivery."}
        </p>

        <NavLink
          to="/book-here"
          className="bg-blush hover:bg-coral text-warmBrown px-12 py-5 rounded-full text-lg font-semibold shadow-lg transition duration-300 hover:scale-105"
        >
          {isSpanish ? "Comenzar Pedido" : "Start Your Custom Order"}
        </NavLink>
      </section>

    </div>
  );
}

export default BannerPricing;