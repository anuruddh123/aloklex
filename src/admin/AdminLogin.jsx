import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (email === "admin@aloklegal.com" && password === "123456") {
      localStorage.setItem("admin", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-zinc-900 p-8 rounded-2xl w-96">
        <h2 className="text-2xl font-bold text-[#C9A24D] mb-6">Admin Login</h2>
        <input
          className="w-full mb-3 p-3 bg-black border border-zinc-700 rounded"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full mb-5 p-3 bg-black border border-zinc-700 rounded"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={login}
          className="w-full py-3 bg-[#C9A24D] text-black font-semibold rounded-xl"
        >
          Login
        </button>
      </div>
    </div>
  );
}
