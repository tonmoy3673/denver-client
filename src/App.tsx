import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Event from "./pages/Event/Event";
import Home from "./pages/Home/Home";
import Listing from "./pages/Listing/Listing";
import Main from "./pages/Main/Main";
import Services from "./pages/Services/Services";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/event" element={<Event />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
