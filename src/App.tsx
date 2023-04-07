import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Learn } from "./pages/learn";
import { Contact } from "./pages/contact";
import { NotFound } from "./pages/notFound";
import { Nav } from "./pages/components/nav";
import { Footer } from "./pages/components/footer";

function App() {
  const nav_options = [
    { path: "/", name: "Home" },
    { path: "https://mathematics.dev", name: "Forum" },
    { path: "/learn", name: "Learn" },
    { path: "/contact", name: "Contact" },
  ];
  return (
    <div className="flex flex-col">
      <Nav options={nav_options} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
