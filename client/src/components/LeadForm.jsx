import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

const LeadForm = ({
  isOpen,
  onClose,
  onSubmit,
  initialData = null,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    status: "New",
    notes: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        email: initialData.email || "",
        phone: initialData.phone || "",
        company: initialData.company || "",
        status: initialData.status || "New",
        notes: initialData.notes || "",
      });
    } else {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        status: "New",
        notes: "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl">
        
        {/* Header */}

        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold">
              {initialData ? "Edit Lead" : "Add New Lead"}
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Manage customer lead information
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="block mb-2 font-medium">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Phone
              </label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Company
              </label>

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              >
                <option>New</option>
                <option>Contacted</option>
                <option>Qualified</option>
                <option>Converted</option>
                <option>Lost</option>
              </select>
            </div>

          </div>

          <div>
            <label className="block mb-2 font-medium">
              Notes
            </label>

            <textarea
              rows="4"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 resize-none"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-xl border"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-black text-white hover:opacity-90"
            >
              {initialData ? "Update Lead" : "Create Lead"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;