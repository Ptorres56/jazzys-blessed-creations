import { useState } from "react";
import { NavLink } from "react-router-dom";
import jazzyPortrait from "../assets/jazzy-portrait.jpeg";

function MeetJazzy() {
  const [isSpanish, setIsSpanish] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blush/20 via-white to-lavender/20 px-6 md:px-20 py-20">

      {/* Language Toggle */}
      <div className="flex justify-end mb-12">
        <button
          onClick={() => setIsSpanish(!isSpanish)}
          className="text-lg font-semibold text-warmBrown hover:text-coral transition"
        >
          {isSpanish ? "English" : "Español"}
        </button>
      </div>

      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-warmBrown mb-6">
          {isSpanish ? "Conoce a Jazzy" : "Meet Jazzy"}
        </h1>
        <div className="h-2 w-40 mx-auto bg-gradient-to-r from-blush via-lavender to-sky rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Photo */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src={jazzyPortrait}
              alt="Jasmin, Creator of Jazzy's Blessed Creations"
              className="rounded-3xl shadow-2xl w-full max-w-md object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-blush rounded-3xl"></div>
          </div>
        </div>

        {/* Bio */}
        <div className="text-warmBrown text-lg md:text-xl leading-relaxed space-y-6">

          {!isSpanish ? (
            <>
              <p>
                Hi everyone. I am the creator behind Jazzy’s Blessed Creations. My name is Jasmin, but most people know me as Jazzy. I have been happily married for two years, and my faith in God and my family mean everything to me. They are the heart behind everything I do.
              </p>

              <p>
                I started creating hand-painted banners and digital mockups because I have always found joy in being creative. There is something so special about turning a simple idea into something beautiful that can be seen, celebrated, and remembered. But even more than that, what truly fills my heart is knowing that something I created helped make someone’s celebration feel extra meaningful.
              </p>

              <p>
                Every banner I design is made with care, intention, and love. I believe that the little details matter. Whether it is a birthday, baby shower, church event, grand opening, or any special milestone, I am honored to play a small part in your big moments. Being able to personalize your celebrations and bring your vision to life is what inspires me every single day.
              </p>

              <p>
                Thank you from the bottom of my heart for supporting my small business. Your trust means more than you know. I truly look forward to collaborating with you and creating something beautiful that you and your loved ones will never forget.
              </p>

              <p className="font-semibold text-coral">
  And one more thing. I am proudly bilingual. If you need your banner in Spanish, I would be more than happy to create it for you.
</p>
            </>
          ) : (
            <>
              <p>
                Hola a todos. Soy la creadora detrás de Jazzy’s Blessed Creations. Mi nombre es Jasmin, pero la mayoría me conoce como Jazzy. Llevo felizmente casada dos años, y mi fe en Dios y mi familia significan todo para mí. Ellos son el corazón detrás de todo lo que hago.
              </p>

              <p>
                Comencé a crear banners pintados a mano y mockups digitales porque siempre he encontrado alegría en ser creativa. Hay algo muy especial en transformar una idea sencilla en algo hermoso que pueda verse, celebrarse y recordarse. Pero más que nada, lo que realmente llena mi corazón es saber que algo que yo creé ayudó a que la celebración de alguien fuera aún más significativa.
              </p>

              <p>
                Cada banner que diseño está hecho con cuidado, intención y amor. Creo que los pequeños detalles importan. Ya sea un cumpleaños, baby shower, evento de iglesia, inauguración o cualquier ocasión especial, me siento honrada de formar parte de sus momentos importantes. Poder personalizar sus celebraciones y dar vida a sus ideas es lo que me inspira todos los días.
              </p>

              <p>
                Gracias de todo corazón por apoyar mi pequeño negocio. Su confianza significa más de lo que imaginan. Estoy verdaderamente emocionada de colaborar con ustedes y crear algo hermoso que ustedes y sus seres queridos nunca olvidarán.
              </p>

              <p className="font-semibold text-coral">
  Y algo más. Soy orgullosamente bilingüe. Si necesitas tu banner en español, estaré más que feliz de crearlo para ti.
</p>
            </>
          )}

        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-24">
        <NavLink
          to="/book-here"
          className="bg-coral hover:bg-blush text-white px-12 py-5 rounded-full text-lg font-semibold shadow-xl transition duration-300 hover:scale-105"
        >
          {isSpanish ? "Comenzar Pedido" : "Start Your Custom Order"}
        </NavLink>
      </div>

    </div>
  );
}

export default MeetJazzy;