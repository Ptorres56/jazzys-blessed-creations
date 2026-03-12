import { useState } from "react";
import { NavLink } from "react-router-dom";

import sheStands from "../assets/gallery/she-stands-banner.jpeg";
import happyNoggin from "../assets/gallery/happy-noggin-banner.jpeg";
import avaBirthday from "../assets/gallery/ava-birthday-banner.jpeg";

function Gallery() {
  const [isSpanish, setIsSpanish] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blush/20 via-white to-lavender/20 px-6 md:px-20 py-20">

      {/* Language Toggle */}
      <div className="flex justify-end mb-12">
        <button
          onClick={() => setIsSpanish(!isSpanish)}
          className="text-base font-semibold text-warmBrown hover:text-coral transition"
        >
          {isSpanish ? "English" : "Español"}
        </button>
      </div>

      {/* Page Title */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-warmBrown mb-6 tracking-wide">
          {isSpanish ? "Mis Creaciones" : "My Creations"}
        </h1>

        <p className="text-xl text-warmBrown/80 max-w-3xl mx-auto leading-relaxed">
          {isSpanish
            ? "Algunos de mis banners personalizados pintados a mano."
            : "A few of my hand-painted custom banners."}
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        {/* Banner 1 */}
        <div className="group">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
            <img
              src={sheStands}
              alt="She Stands Banner"
              className="w-full h-auto transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500"></div>
          </div>
        </div>

        {/* Banner 2 */}
        <div className="group">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
            <img
              src={happyNoggin}
              alt="Happy Noggin Banner"
              className="w-full h-auto transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500"></div>
          </div>
        </div>

        {/* Banner 3 Full Width */}
        <div className="group md:col-span-2">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
            <img
              src={avaBirthday}
              alt="Ava Birthday Banner"
              className="w-full h-auto transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500"></div>
          </div>
        </div>

      </div>

      {/* Call To Action */}
      <div className="text-center mt-28">
        <h2 className="text-3xl font-bold text-warmBrown mb-6">
          {isSpanish ? "¿Lista para crear el tuyo?" : "Ready to create yours?"}
        </h2>

        <NavLink
          to="/book-here"
          className="bg-blush hover:bg-coral text-warmBrown px-12 py-5 rounded-full text-lg font-semibold shadow-xl transition duration-300 hover:scale-105"
        >
          {isSpanish ? "Comenzar Pedido" : "Start Your Custom Order"}
        </NavLink>
      </div>

    </div>
  );
}

export default Gallery;