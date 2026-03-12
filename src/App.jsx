import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import HowToOrder from "./pages/HowToOrder";
import BannerPricing from "./pages/BannerPricing"; // NEW IMPORT
import BookHere from "./pages/BookHere";
import Shop from "./pages/Shop";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import MeetJazzy from "./pages/MeetJazzy";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>

        {/* Layout Route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="how-to-order" element={<HowToOrder />} />
          <Route path="banner-pricing" element={<BannerPricing />} /> {/* NEW ROUTE */}
          <Route path="book-here" element={<BookHere />} />
          <Route path="shop" element={<Shop />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="meet-jazzy" element={<MeetJazzy />} />
          <Route path="contact" element={<Contact />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;

