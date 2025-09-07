import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from './component/Footer'
import CreateLink from "./pages/CreateLink";
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/createlink" element={<CreateLink />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}