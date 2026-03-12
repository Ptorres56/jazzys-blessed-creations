import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function BookHere() {
  const [isSpanish, setIsSpanish] = useState(false);
  const [success, setSuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kbhs1dd",
        "template_c6b7xxc",
        form.current,
        "av96NJqDq4d8nu3YC"
      )
      .then(() => {
        setSuccess(true);
        form.current.reset();
      })
      .catch((error) => {
        console.log("FAILED...", error);
      });
  };

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

      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-warmBrown mb-6">
          {isSpanish ? "Reserva Tu Banner Personalizado" : "Book Your Custom Banner"}
        </h1>

        <p className="text-xl text-warmBrown/80 max-w-3xl mx-auto">
          {isSpanish
            ? "Completa el formulario y me pondré en contacto contigo pronto."
            : "Fill out the form below and I’ll get back to you soon."}
        </p>
      </div>

      {/* Success Message */}
      {success && (
        <div className="max-w-3xl mx-auto mb-10 text-center bg-green-100 text-green-700 p-6 rounded-2xl font-semibold">
          {isSpanish
            ? "¡Tu solicitud fue enviada con éxito! Te responderé pronto."
            : "Your request has been sent successfully! I’ll respond soon."}
        </div>
      )}

      {/* Form Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-12 border border-blush/30">
        <form ref={form} onSubmit={sendEmail} className="space-y-8">

          <input
            type="text"
            name="user_name"
            placeholder={isSpanish ? "Nombre Completo" : "Full Name"}
            required
            className="w-full border border-blush/40 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-coral"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className="w-full border border-blush/40 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-coral"
          />

          <input
            type="text"
            name="event_date"
            placeholder={isSpanish ? "Fecha del Evento" : "Event Date"}
            required
            className="w-full border border-blush/40 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-coral"
          />

          <select
  name="banner_size"
  required
  className="w-full border border-blush/40 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-coral"
>
  <option value="">
    {isSpanish ? "Selecciona Tamaño del Banner" : "Select Banner Size"}
  </option>
  <option value="4 ft">4 ft</option>
  <option value="5 ft">5 ft</option>
  <option value="6 ft">6 ft</option>
  <option value="Custom">Custom Size</option>
</select>

          <textarea
            name="message"
            rows="5"
            placeholder={
              isSpanish
                ? "Describe tu tema, colores y detalles especiales"
                : "Describe your theme, colors, and special details"
            }
            required
            className="w-full border border-blush/40 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-coral"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-coral hover:bg-blush text-white py-4 rounded-full text-lg font-semibold transition duration-300 hover:scale-105 shadow-lg"
          >
            {isSpanish ? "Enviar Solicitud" : "Submit Request"}
          </button>
        </form>
      </div>

      <div className="text-center mt-12 text-warmBrown/70">
        {isSpanish
          ? "Responderé dentro de 24 horas."
          : "I’ll respond within 24 hours."}
      </div>
    </div>
  );
}

export default BookHere;