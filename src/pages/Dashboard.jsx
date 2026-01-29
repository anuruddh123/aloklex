import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const { user } = useAuth();

  if (user?.role !== "admin") return <Navigate to="/" />;

  return (
    <div className="px-4 sm:px-8 md:px-16 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#C9A24D] mb-10">
        Advocate Alok – Dashboard
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* CONSULTATIONS */}
        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4">
            New Consultations
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex justify-between">
              Rahul – Property
              <button className="text-green-400">Completed</button>
            </li>
            <li className="flex justify-between">
              Anita – Family
              <button className="text-green-400">Completed</button>
            </li>
          </ul>
        </div>

        {/* QUESTIONS */}
        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4">
            Pending Questions
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-300">
                FIR kaise likhte hain?
              </p>
              <textarea
                placeholder="Write answer..."
                className="w-full mt-2 bg-black p-2 rounded border border-zinc-700"
              />
              <button className="mt-2 bg-[#C9A24D] text-black px-4 py-1 rounded">
                Submit Answer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
