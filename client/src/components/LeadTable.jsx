import { FiEdit2, FiTrash2, FiMail, FiPhone } from "react-icons/fi";


const statusStyles = {
  New: "bg-blue-100 text-blue-700",
  Contacted: "bg-yellow-100 text-yellow-700",
  Qualified: "bg-purple-100 text-purple-700",
  Converted: "bg-green-100 text-green-700",
  Lost: "bg-red-100 text-red-700",
};


const LeadTable = ({ leads, onEdit, onDelete }) => {
  
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Header */}

      <div className="p-6 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800">
          Leads Dashboard
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Manage and track all customer leads
        </p>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm">
              <th className="text-left px-6 py-4">Lead</th>
              <th className="text-left px-6 py-4">Contact</th>
              <th className="text-left px-6 py-4">Company</th>
              <th className="text-left px-6 py-4">Status</th>
              <th className="text-left px-6 py-4">Created</th>
              <th className="text-center px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {leads?.length > 0 ? (
              leads.map((lead) => (
                <tr
                  key={lead._id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  {/* Name */}

                  <td className="px-6 py-5">
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {lead.name}
                      </h3>

                      <p className="text-sm text-gray-500 truncate max-w-[200px]">
                        {lead.notes || "No notes added"}
                      </p>
                    </div>
                  </td>

                  {/* Contact */}

                  <td className="px-6 py-5">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <FiMail />
                        {lead.email}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <FiPhone />
                        {lead.phone}
                      </div>
                    </div>
                  </td>

                  {/* Company */}

                  <td className="px-6 py-5 font-medium text-gray-700">
                    {lead.company}
                  </td>

                  {/* Status */}

                  <td className="px-6 py-5">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        statusStyles[lead.status]
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>

                  {/* Created */}

                  <td className="px-6 py-5 text-gray-600">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>

                  {/* Actions */}

                  <td className="px-6 py-5">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => onEdit(lead)}
                        className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition"
                      >
                        <FiEdit2 />
                      </button>

                      <button
                        onClick={() => onDelete(lead._id)}
                        className="p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-12 text-gray-500"
                >
                  No leads found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadTable;