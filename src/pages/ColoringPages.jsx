import { useState } from "react";
import pondColoring from "../assets/gallery/pond-coloring-page.jpeg";

function ColoringPages() {
  const [isSpanish, setIsSpanish] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blush/10 to-lavender/20 px-6 md:px-20 py-20">

      {/* Language Toggle */}
      <div className="flex justify-end mb-12">
        <button
          onClick={() => setIsSpanish(!isSpanish)}
          className="text-base font-semibold text-warmBrown hover:text-coral transition"
        >
          {isSpanish ? "English" : "Español"}
        </button>
      </div>

      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-warmBrown mb-6">
          {isSpanish
            ? "Páginas Gigantes para Colorear"
            : "Giant Custom Coloring Pages"}
        </h1>

        <p className="text-xl text-warmBrown/80 max-w-3xl mx-auto leading-relaxed">
          {isSpanish
            ? "Páginas gigantes dibujadas a mano, perfectas para cumpleaños, eventos escolares y celebraciones."
            : "Hand-drawn giant coloring pages perfect for birthdays, school events, church gatherings, and special celebrations."}
        </p>
      </div>

      {/* Example Image */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white border border-blush/20">
          <img
            src={pondColoring}
            alt="Pond Life Giant Coloring Page"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Pricing Card */}
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <div className="bg-white rounded-3xl shadow-xl p-10 border border-blush/30">

          <h2 className="text-3xl font-bold text-warmBrown mb-6">
            {isSpanish ? "Precio Inicial" : "Starting Price"}
          </h2>

          <p className="text-4xl font-bold text-coral mb-6">
            $50
          </p>

          <p className="text-lg text-warmBrown/80 mb-8">
            {isSpanish
              ? "Incluye diseño personalizado dibujado a mano."
              : "Includes fully custom hand-drawn design."}
          </p>

          <a
            href="mailto:jazzysblessedcreations@outlook.com"
            className="inline-block bg-coral text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-blush hover:text-warmBrown transition duration-300"
          >
            {isSpanish ? "Ordenar Ahora" : "Order Now"}
          </a>

        </div>
      </div>

    </div>
  );
}

export default ColoringPages;