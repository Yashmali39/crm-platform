import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const COLORS = [
    "#3b82f6",
    "#eab308",
    "#a855f7",
    "#22c55e",
    "#ef4444",
];

const LeadStatusChart = ({ stats }) => {
    const data = [
        {
            name: "New",
            value: stats?.new || 0,
        },
        {
            name: "Contacted",
            value: stats?.contacted || 0,
        },
        {
            name: "Qualified",
            value: stats?.qualified || 0,
        },
        {
            name: "Converted",
            value: stats?.converted || 0,
        },
        {
            name: "Lost",
            value: stats?.lost || 0,
        },
    ];

    return (
        <div
            className="
  bg-white
  rounded-3xl
  shadow-xl
  border
  border-gray-100
  p-6
  h-full
  "
        >
            <h2 className="text-xl font-bold mb-4">
                Lead Status Distribution
            </h2>

            <div className="h-[420px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            outerRadius={110}
                            label
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index]}
                                />
                            ))}
                        </Pie>

                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default LeadStatusChart;