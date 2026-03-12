import { useState } from "react";
import { NavLink } from "react-router-dom";

function HowToOrder() {
  const [isSpanish, setIsSpanish] = useState(false);

  return (
    <div className="bg-white min-h-screen">

      {/* ================= HEADER ================= */}
      <section className="relative text-center py-20 bg-gradient-to-b from-lavender/20 via-blush/10 to-white">

        <div className="absolute top-6 right-8">
          <button
            onClick={() => setIsSpanish(!isSpanish)}
            className="text-sm font-semibold text-warmBrown hover:text-coral transition"
          >
            {isSpanish ? "English" : "Español"}
          </button>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-warmBrown mb-6">
          {isSpanish ? "Cómo Ordenar" : "How To Order"}
        </h1>

        <p className="text-lg text-warmBrown/80 max-w-2xl mx-auto px-6">
          {isSpanish
            ? "Elige tu tipo de diseño y sigue los pasos simples a continuación."
            : "Choose your design type and follow the simple steps below."}
        </p>
      </section>

      {/* ================= HAND-PAINTED SECTION ================= */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-warmBrown text-center mb-12">
            {isSpanish
              ? "Banners Pintados a Mano"
              : "Hand-Painted Custom Banners"}
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Step 1 */}
            <div className="bg-blush/20 rounded-2xl p-8 shadow-sm">
              <h3 className="font-bold text-warmBrown mb-3">
                {isSpanish
                  ? "Paso 1: Comparte los Detalles"
                  : "Step 1: Share Your Details"}
              </h3>
              <p className="text-warmBrown/80">
                {isSpanish
                  ? "Envíame el tamaño, tema, colores, fecha del evento y cualquier foto de inspiración."
                  : "Send me the size, theme, colors, event date, and any inspiration photos."}
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-lavender/20 rounded-2xl p-8 shadow-sm">
              <h3 className="font-bold text-warmBrown mb-3">
                {isSpanish
                  ? "Paso 2: Recibe tu Cotización"
                  : "Step 2: Receive Your Custom Quote"}
              </h3>
              <p className="text-warmBrown/80">
                {isSpanish
                  ? "Te enviaré una cotización personalizada basada en el tamaño y los extras seleccionados."
                  : "I will send you a custom quote based on your selected size and add-ons."}
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-sky/20 rounded-2xl p-8 shadow-sm">
              <h3 className="font-bold text-warmBrown mb-3">
                {isSpanish
                  ? "Paso 3: Depósito Requerido"
                  : "Step 3: 50% Deposit Required"}
              </h3>
              <p className="text-warmBrown/80">
                {isSpanish
                  ? "Se requiere un depósito no reembolsable del 50% para asegurar tu fecha y comenzar tu diseño."
                  : "A 50% non-refundable deposit is required to secure your date and begin your design."}
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-blush/30 rounded-2xl p-8 shadow-sm">
              <h3 className="font-bold text-warmBrown mb-3">
                {isSpanish
                  ? "Paso 4: Recogida o Entrega"
                  : "Step 4: Pickup or Delivery"}
              </h3>
              <p className="text-warmBrown/80">
                {isSpanish
                  ? "Ofrezco recogida local gratuita. La entrega está disponible por una tarifa adicional."
                  : "I offer free local pickup. Drop-off is available for an additional delivery fee."}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= DIGITAL SECTION ================= */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-blush/10">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-warmBrown mb-10">
            {isSpanish
              ? "Mockups Digitales"
              : "Digital Banner Mockups"}
          </h2>

          <div className="bg-white rounded-3xl shadow-md p-10">

            <p className="text-warmBrown/80 mb-6">
              {isSpanish
                ? "Los diseños digitales se compran directamente en mi tienda y se pagan en su totalidad al momento de la compra."
                : "Digital designs are purchased directly from my shop and paid in full at checkout."}
            </p>

            <p className="text-warmBrown/80 mb-6">
              {isSpanish
                ? "Después del pago, recibirás un correo de confirmación solicitando los detalles de tu diseño."
                : "After checkout, you will receive a confirmation email requesting your design details."}
            </p>

            <NavLink
              to="/shop"
              className="bg-blush hover:bg-coral text-warmBrown px-8 py-3 rounded-full font-semibold shadow-md transition duration-300"
            >
              {isSpanish ? "Ir a la Tienda" : "Visit Shop"}
            </NavLink>

          </div>
        </div>
      </section>

      {/* ================= POLICY SECTION ================= */}
      <section className="py-16 text-center bg-gradient-to-r from-blush/20 via-lavender/20 to-sky/20">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-2xl font-bold text-warmBrown mb-6">
            {isSpanish ? "Información Importante" : "Important Information"}
          </h2>

          <p className="text-warmBrown/80 leading-relaxed">
            {isSpanish
              ? "Los banners pintados a mano requieren al menos 24 horas para secar completamente. El saldo restante se debe pagar al momento de la recogida o entrega."
              : "Hand-painted banners require at least 24 hours to fully dry. Remaining balance is due at pickup or delivery."}
          </p>

        </div>
      </section>

    </div>
  );
}

export default HowToOrder;
