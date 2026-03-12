import { useState } from "react";
import { FaInstagram, FaFacebookF, FaTiktok, FaEnvelope } from "react-icons/fa";

function Contact() {
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

      {/* Page Title */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-warmBrown mb-6">
          {isSpanish ? "Contáctame" : "Contact Me"}
        </h1>

        <p className="text-xl text-warmBrown/80 max-w-3xl mx-auto leading-relaxed">
          {isSpanish
            ? "Estoy emocionada de ayudarte a crear algo hermoso para tu próxima celebración."
            : "I’m excited to help you create something beautiful for your next celebration."}
        </p>
      </div>

      {/* Premium Email Section */}
      <div className="max-w-4xl mx-auto mb-24">
        <div className="bg-gradient-to-r from-blush/40 via-white to-lavender/30 
                        rounded-3xl shadow-2xl p-14 text-center 
                        hover:scale-105 hover:shadow-3xl 
                        transition duration-300 group border border-blush/30">

          <FaEnvelope className="text-5xl mx-auto mb-6 text-coral group-hover:scale-110 transition duration-300" />

          <h2 className="text-3xl font-bold text-warmBrown mb-4">
            {isSpanish ? "Envíame un Correo" : "Send Me an Email"}
          </h2>

          <p className="text-lg text-warmBrown/80 mb-8">
            {isSpanish
              ? "Para consultas y pedidos personalizados:"
              : "For inquiries and custom orders:"}
          </p>

          <a
            href="mailto:jazzysblessedcreations@outlook.com"
            className="inline-block bg-coral text-white px-8 py-4 rounded-full 
                       font-semibold text-lg shadow-lg 
                       hover:bg-blush hover:text-warmBrown 
                       transition duration-300"
          >
            jazzysblessedcreations@outlook.com
          </a>

          <p className="text-sm text-warmBrown/60 mt-6">
            {isSpanish
              ? "Responderé lo antes posible."
              : "I’ll respond as soon as possible."}
          </p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-warmBrown mb-12">
          {isSpanish ? "Sígueme en Redes Sociales" : "Follow Me on Social Media"}
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">

        {/* Instagram */}
        <a
          href="https://www.instagram.com/jazzysblessedcreations?igsh=NTc4MTIwNjQ2YQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blush/40 rounded-3xl p-12 text-center shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300 group"
        >
          <FaInstagram className="text-6xl mx-auto mb-6 text-pink-500 group-hover:scale-110 transition duration-300" />
          <h3 className="text-xl font-bold text-warmBrown mb-2">Instagram</h3>
          <p className="text-warmBrown/80 text-sm">
            {isSpanish
              ? "Mira mis creaciones más recientes."
              : "See my latest creations."}
          </p>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=61586405205698"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-lavender/40 rounded-3xl p-12 text-center shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300 group"
        >
          <FaFacebookF className="text-6xl mx-auto mb-6 text-blue-600 group-hover:scale-110 transition duration-300" />
          <h3 className="text-xl font-bold text-warmBrown mb-2">Facebook</h3>
          <p className="text-warmBrown/80 text-sm">
            {isSpanish
              ? "Mantente al día con nuevos diseños."
              : "Stay updated with new designs."}
          </p>
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@jazzysblessedcreations?lang=en"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky/40 rounded-3xl p-12 text-center shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300 group"
        >
          <FaTiktok className="text-6xl mx-auto mb-6 text-black group-hover:scale-110 transition duration-300" />
          <h3 className="text-xl font-bold text-warmBrown mb-2">TikTok</h3>
          <p className="text-warmBrown/80 text-sm">
            {isSpanish
              ? "Videos detrás de escena y el proceso creativo."
              : "Behind-the-scenes and creative process videos."}
          </p>
        </a>

      </div>

    </div>
  );
}

export default Contact;