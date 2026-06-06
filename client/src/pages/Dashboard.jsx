import { useEffect, useState } from "react";
import API from "../services/leadApi";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";


import Navbar from "../components/Navbar";
import StatsCards from "../components/StatsCards";
import LeadTable from "../components/LeadTable";
import LeadForm from "../components/LeadForm";
import SearchBar from "../components/SearchBar";
import LeadStatusChart from "../components/LeadStatusChart";

const Dashboard = () => {
    const [stats, setStats] = useState(null);
    const [leads, setLeads] = useState([]);
    const [openForm, setOpenForm] = useState(false);
    const [selectedLead, setSelectedLead] = useState(null);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchLeads();
        fetchStats();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            searchLeads(search);
        }, 500);

        return () => clearTimeout(timer);
    }, [search]);

    useEffect(() => {
        fetchLeads();
    }, [page]);

    const fetchLeads = async () => {
        try {
            setLoading(true);

            const res = await API.get(`/?page=${page}&limit=5`);

            setLeads(res.data.leads);
            setTotalPages(res.data.totalPages);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);

        }
    };

    const fetchStats = async () => {

        try {
            setLoading(true);
            const res = await API.get("/stats");
            setStats(res.data.stats);
        } catch (error) {
            console.log(error);
            toast.error("Failed to load statistics");
        } finally {
            setLoading(false);

        }
    };

    const searchLeads = async (query) => {
        try {
            if (!query.trim()) {
                fetchLeads();
                return;
            }
            setLoading(true);
            const res = await API.get(`/search?search=${query}`);

            setLeads(res.data.leads);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);

        }
    };

    const handleSubmit = async (data) => {
        try {
            if (selectedLead) {
                setLoading(true);
                await API.put(`/${selectedLead._id}`, data);

                toast.success("Lead updated successfully");
            } else {
                await API.post("/", data);

                toast.success("Lead created successfully");
            }

            await fetchLeads();
            await fetchStats();

            setOpenForm(false);
            setSelectedLead(null);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this lead?"
        );

        if (!confirmDelete) return;

        try {
            setLoading(true);
            await API.delete(`/${id}`);

            await fetchLeads();
            await fetchStats();

            toast.success("Lead deleted successfully");
        } catch (error) {
            console.log(error);
            toast.error("Failed to delete lead");
        } finally {
            setLoading(false);
        }
    };

    {
        loading && (
            <div className="text-center py-4">
                <ClipLoader size={40} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
            <Navbar />

            <div className="max-w-7xl mx-auto p-6 space-y-6">
                <div className="grid lg:grid-cols-3 gap-6 items-stretch">

                    <div className="lg:col-span-2">
                        <StatsCards stats={stats} />
                    </div>

                    <div className="h-full">
                        <LeadStatusChart stats={stats} />
                    </div>

                </div>

                <SearchBar
                    search={search}
                    setSearch={setSearch}
                />

                <div className="flex justify-end">
                    <button
                        onClick={() => {
                            setSelectedLead(null);
                            setOpenForm(true);
                        }}
                        className="px-5 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition-all shadow-md"
                    >
                        + Add Lead
                    </button>
                </div>

                <LeadTable
                    leads={leads}
                    onEdit={(lead) => {
                        setSelectedLead(lead);
                        setOpenForm(true);
                    }}
                    onDelete={handleDelete}
                />

                <div className="flex justify-center items-center gap-4">
                    <button
                        disabled={page === 1}
                        onClick={() => setPage((prev) => prev - 1)}
                        className="px-4 py-2 bg-black text-white rounded-lg disabled:opacity-50"
                    >
                        Prev
                    </button>

                    <span className="font-medium">
                        Page {page} of {totalPages}
                    </span>

                    <button
                        disabled={page === totalPages}
                        onClick={() => setPage((prev) => prev + 1)}
                        className="px-4 py-2 bg-black text-white rounded-lg disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>

                <LeadForm
                    isOpen={openForm}
                    onClose={() => {
                        setOpenForm(false);
                        setSelectedLead(null);
                    }}
                    initialData={selectedLead}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
};

export default Dashboard;