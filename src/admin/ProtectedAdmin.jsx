import { Navigate } from "react-router-dom";

export default function ProtectedAdmin({ children }) {
  const isAdmin = localStorage.getItem("admin");
  return isAdmin ? children : <Navigate to="/admin/login" />;
}
