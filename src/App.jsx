import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import FreeConsultation from "./pages/FreeConsultation";
import AskLawyer from "./pages/AskLawyer";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import CaseTracker from "./pages/CaseTracker";

/* 🔐 ADMIN */
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import ProtectedAdmin from "./admin/ProtectedAdmin";

function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/consultation" element={<FreeConsultation />} />
        <Route path="/ask" element={<AskLawyer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/case-tracker" element={<CaseTracker />} />

        {/* USER DASHBOARD (OPTIONAL) */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 🔐 ADMIN ROUTES (HIDDEN) */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdmin>
              <AdminDashboard />
            </ProtectedAdmin>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
