import { useState } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  const [isSpanish, setIsSpanish] = useState(false);

  return (
    <div className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative text-center py-28 bg-gradient-to-b from-blush/20 via-lavender/10 to-white overflow-hidden">

        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-12px); }
              100% { transform: translateY(0px); }
            }
          `}
        </style>

        {/* Language Toggle */}
        <div className="absolute top-6 right-8">
          <button
            onClick={() => setIsSpanish(!isSpanish)}
            className="text-sm font-semibold text-warmBrown hover:text-coral transition"
          >
            {isSpanish ? "English" : "Español"}
          </button>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img
            src="/logo.png"
            alt="Jazzy's Blessed Creations Logo"
            className="w-[90%] max-w-[650px] mx-auto object-contain drop-shadow-md"
            style={{ animation: "float 6s ease-in-out infinite" }}
          />
        </div>

        {/* ✨ MANTRA ✨ */}
        <p className="text-xl md:text-2xl italic font-semibold text-coral mb-8 tracking-wide">
          {isSpanish
            ? "Un Toque Bendecido Para Cada Celebración"
            : "A Blessed Touch For Every Celebration"}
        </p>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-warmBrown mb-6 px-6 leading-tight">
          {isSpanish
            ? "Banners Pintados a Mano y Mockups Digitales Hechos Con Amor"
            : "Hand-Painted Custom Banners & Digital Mockups Made With Love"}
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-warmBrown/80 max-w-3xl mx-auto mb-12 px-6 leading-relaxed">
          {isSpanish
            ? "Creo banners personalizados pintados a mano y diseños digitales únicos para cualquier ocasión especial en el Centro de Florida."
            : "I create beautifully hand-painted custom banners and unique digital designs for any special occasion in Central Florida."}
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <NavLink
            to="/how-to-order"
            className="bg-blush hover:bg-coral text-warmBrown px-8 py-4 rounded-full font-semibold shadow-md transition duration-300 hover:scale-105"
          >
            {isSpanish ? "Cómo Ordenar" : "How To Order"}
          </NavLink>

          <NavLink
            to="/shop"
            className="border border-warmBrown text-warmBrown px-8 py-4 rounded-full font-semibold hover:bg-blush/30 transition duration-300"
          >
            {isSpanish ? "Tienda" : "Shop"}
          </NavLink>

          <NavLink
            to="/contact"
            className="bg-sky/60 hover:bg-lavender text-warmBrown px-8 py-4 rounded-full font-semibold shadow-md transition duration-300 hover:scale-105"
          >
            {isSpanish ? "Contacto" : "Contact"}
          </NavLink>
        </div>
      </section>


      {/* ================= WHAT I OFFER ================= */}
      <section className="py-24 bg-gradient-to-b from-white to-blush/10">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-warmBrown mb-6">
            {isSpanish ? "Lo Que Ofrezco" : "What I Offer"}
          </h2>

          <p className="text-lg text-warmBrown/80 mb-16 max-w-2xl mx-auto">
            {isSpanish
              ? "Ofrezco banners personalizados pintados a mano y mockups digitales diseñados con dedicación para cada celebración."
              : "I offer hand-painted custom banners and digital mockups crafted with care for every celebration."}
          </p>

          <div className="grid md:grid-cols-2 gap-12">

            <div className="bg-white rounded-3xl shadow-md p-10 border border-blush/20">
              <h3 className="text-2xl font-bold text-warmBrown mb-4">
                {isSpanish
                  ? "Banners Personalizados Pintados a Mano"
                  : "Hand-Painted Custom Banners"}
              </h3>
              <p className="text-warmBrown/80">
                {isSpanish
                  ? "Cada banner es pintado a mano con atención al detalle y está listo para recoger o coordinar entrega local."
                  : "Each banner is carefully hand-painted with attention to detail and is ready for pickup or coordinated local delivery."}
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-md p-10 border border-lavender/20">
              <h3 className="text-2xl font-bold text-warmBrown mb-4">
                {isSpanish
                  ? "Mockups Digitales Personalizados"
                  : "Custom Digital Mockups"}
              </h3>
              <p className="text-warmBrown/80">
                {isSpanish
                  ? "Diseños digitales de alta calidad enviados por correo electrónico listos para imprimir."
                  : "High-quality digital designs delivered by email and ready to print anywhere."}
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= OCCASIONS ================= */}
      <section className="py-24 bg-gradient-to-b from-blush/10 via-lavender/10 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-warmBrown mb-12">
            {isSpanish
              ? "Perfecto Para Cualquier Ocasión"
              : "Perfect For Any Special Occasion"}
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-left text-sm text-warmBrown/80 leading-relaxed">

            {isSpanish ? (
              <>
                <ul className="space-y-3">
                  <li>Cumpleaños</li>
                  <li>Quinceañeras</li>
                  <li>Baby Showers</li>
                  <li>Revelaciones de Género</li>
                  <li>Despedidas de Soltera</li>
                  <li>Primer Día de Escuela</li>
                </ul>
                <ul className="space-y-3">
                  <li>Inauguraciones</li>
                  <li>Bienvenidas</li>
                  <li>Vacaciones</li>
                  <li>Reuniones</li>
                  <li>Eventos Escolares</li>
                  <li>Propuestas</li>
                </ul>
                <ul className="space-y-3">
                  <li>Eventos de Iglesia</li>
                  <li>Eventos Deportivos</li>
                  <li>Bautismos</li>
                  <li>Graduaciones</li>
                  <li>Aniversarios</li>
                  <li>Eventos Corporativos</li>
                </ul>
                <ul className="space-y-3">
                  <li>4 de Julio</li>
                  <li>Halloween</li>
                  <li>Mardi Gras</li>
                  <li>Navidad</li>
                  <li>Año Nuevo</li>
                  <li>Día de San Valentín</li>
                </ul>
              </>
            ) : (
              <>
                <ul className="space-y-3">
                  <li>Birthdays</li>
                  <li>Quinceañeras</li>
                  <li>Baby Showers</li>
                  <li>Gender Reveals</li>
                  <li>Bachelorette Parties</li>
                  <li>First Day of School</li>
                </ul>
                <ul className="space-y-3">
                  <li>Grand Openings</li>
                  <li>Welcome Home</li>
                  <li>Vacations</li>
                  <li>Reunions</li>
                  <li>School Events</li>
                  <li>Proposals</li>
                </ul>
                <ul className="space-y-3">
                  <li>Church Events</li>
                  <li>Sporting Events</li>
                  <li>Baptisms</li>
                  <li>Graduations</li>
                  <li>Anniversaries</li>
                  <li>Corporate Events</li>
                </ul>
                <ul className="space-y-3">
                  <li>4th of July</li>
                  <li>Halloween</li>
                  <li>Mardi Gras</li>
                  <li>Christmas</li>
                  <li>New Years</li>
                  <li>Valentine's Day</li>
                </ul>
              </>
            )}

          </div>

          <div className="mt-14 text-center">
            <p className="text-lg font-semibold text-warmBrown">
              {isSpanish ? "¡Y Mucho Más!" : "And More!"}
            </p>
          </div>

        </div>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="py-24 text-center bg-gradient-to-r from-blush/20 via-lavender/20 to-sky/20">
        <h2 className="text-3xl md:text-5xl font-bold text-warmBrown mb-6">
          {isSpanish
            ? "¿Lista Para Crear Algo Hermoso?"
            : "Ready To Create Something Beautiful?"}
        </h2>

        <p className="text-lg text-warmBrown/80 mb-10">
          {isSpanish
            ? "Comienza tu diseño personalizado hoy mismo."
            : "Start your custom design today."}
        </p>

        <NavLink
          to="/book-here"
          className="bg-blush hover:bg-coral text-warmBrown px-10 py-5 rounded-full font-semibold shadow-md transition duration-300 hover:scale-105"
        >
          {isSpanish ? "Comenzar Pedido" : "Start Your Custom Order"}
        </NavLink>
      </section>

    </div>
  );
}

export default Home;
