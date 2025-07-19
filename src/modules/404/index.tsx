import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react"; // Or use any icon you like

export const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto mt-16 px-4">
      <div className="bg-gray-50 rounded-lg shadow p-8 text-center">
        <AlertTriangle className="text-red-500 w-24 h-24 mx-auto mb-4" />

        <h1 className="text-5xl font-bold text-red-600 mb-2">404</h1>
        <h2 className="text-2xl text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-2 px-6 rounded transition duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};