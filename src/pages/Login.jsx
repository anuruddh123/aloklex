import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(email);
    navigate("/");
  };

  return (
    <div className="px-10 py-16 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Login</h2>

      <input
        className="w-full p-3 bg-zinc-900 rounded mb-4"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="bg-[#C9A24D] text-black px-6 py-2 rounded w-full"
      >
        Login
      </button>
    </div>
  );
}
