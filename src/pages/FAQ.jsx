import { useState } from "react";
import { NavLink } from "react-router-dom";

function FAQ() {
  const [isSpanish, setIsSpanish] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: {
        en: "How long does it take to complete a banner?",
        es: "¿Cuánto tiempo toma completar un banner?"
      },
      answer: {
        en: "Most hand-painted banners are completed within 3–5 business days depending on design complexity.",
        es: "La mayoría de los banners pintados a mano se completan en 3–5 días hábiles dependiendo de la complejidad del diseño."
      }
    },
    {
      question: {
        en: "Do you offer delivery?",
        es: "¿Ofrecen entrega?"
      },
      answer: {
        en: "Yes! Local delivery is available for an additional $5. Pickup is always free.",
        es: "¡Sí! La entrega local está disponible por $5 adicionales. La recogida siempre es gratis."
      }
    },
    {
      question: {
        en: "How many revisions are included?",
        es: "¿Cuántas revisiones están incluidas?"
      },
      answer: {
        en: "Unlimited mockups are included until you approve the final banner design.",
        es: "Se incluyen mockups ilimitados hasta que apruebes el diseño final del banner."
      }
    },
    {
      question: {
        en: "Can I request specific characters or themes?",
        es: "¿Puedo solicitar personajes o temas específicos?"
      },
      answer: {
        en: "Absolutely! Custom themes and characters are welcome. Additional characters are $5 each.",
        es: "¡Claro que sí! Los temas y personajes personalizados son bienvenidos. Los personajes adicionales cuestan $5 cada uno."
      }
    },
    {
      question: {
        en: "What payment methods do you accept?",
        es: "¿Qué métodos de pago aceptan?"
      },
  answer: {
    en: "Digital mockups are paid securely through Stripe. For hand-painted banners, a PayPal invoice will be sent for the deposit. For pickup or local drop-off, payment is accepted via cash or Zelle.",
    es: "Los mockups digitales se pagan de forma segura a través de Stripe. Para los banners pintados a mano, se enviará una factura de PayPal para el depósito. Para recogida o entrega local, el pago se acepta en efectivo o por Zelle."
  }
},
{
  question: {
    en: "When should I place my order?",
    es: "¿Cuándo debo hacer mi pedido?"
  },
  answer: {
    en: "To ensure enough time for design, revisions, and completion, I recommend placing your order at least 7–10 days before your event.",
    es: "Para asegurar tiempo suficiente para el diseño, revisiones y finalización, recomiendo hacer tu pedido al menos 7–10 días antes de tu evento."
  }
},
{
  question: {
    en: "Will my banner be posted on social media?",
    es: "¿Mi banner será publicado en redes sociales?"
  },
  answer: {
    en: "I love sharing my work on social media to showcase recent creations. If you would prefer that your banner not be posted, please let me know when placing your order and I will absolutely respect your request.",
    es: "Me encanta compartir mi trabajo en redes sociales para mostrar mis creaciones recientes. Si prefieres que tu banner no sea publicado, por favor indícamelo al hacer tu pedido y con gusto respetaré tu solicitud."
  }
}
  ];

  const cardColors = [
    "bg-blush/30",
    "bg-lavender/30",
    "bg-sky/30",
    "bg-blush/40",
    "bg-lavender/40"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blush/20 to-lavender/20 px-6 md:px-20 py-20">

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
          {isSpanish ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
        </h1>
        <p className="text-xl text-warmBrown/80 max-w-3xl mx-auto">
          {isSpanish
            ? "Todo lo que necesitas saber antes de hacer tu pedido."
            : "Everything you need to know before placing your order."}
        </p>
      </div>

      {/* FAQ Cards */}
      <div className="max-w-4xl mx-auto space-y-8">

        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${cardColors[index % cardColors.length]} rounded-3xl shadow-xl overflow-hidden transition duration-300`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left px-8 py-8 flex justify-between items-center text-2xl font-semibold text-warmBrown hover:bg-white/40 transition"
            >
              {isSpanish ? faq.question.es : faq.question.en}
              <span className="text-coral text-3xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-8 pb-8 text-xl text-warmBrown/90 leading-relaxed">
                {isSpanish ? faq.answer.es : faq.answer.en}
              </div>
            )}
          </div>
        ))}

      </div>

      {/* Contact CTA */}
      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold text-warmBrown mb-6">
          {isSpanish
            ? "¿Tienes más preguntas?"
            : "Have more questions?"}
        </h2>

        <NavLink
          to="/contact"
          className="bg-coral hover:bg-blush text-white px-12 py-5 rounded-full text-lg font-semibold shadow-xl transition duration-300 hover:scale-105"
        >
          {isSpanish ? "Contáctame" : "Contact Me"}
        </NavLink>
      </div>

    </div>
  );
}

export default FAQ;