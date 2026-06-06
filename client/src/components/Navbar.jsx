import { FiUsers } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">
        <div className="p-2 rounded-xl bg-black text-white">
          <FiUsers size={22} />
        </div>

        <div>
          <h1 className="text-xl font-bold text-gray-900">
            Lead Management CRM
          </h1>
          <p className="text-sm text-gray-500">
            Manage customers efficiently
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;