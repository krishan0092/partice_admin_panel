import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

export default function DashboardChart({
    title = "Revenue Overview",
    subtitle = "Monthly performance",
    data = [],
    dataKey = "value",
    color = "#6366f1",
    badge = "Last 6 Months",
}) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg font-sans">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-lg md:text-xl font-semibold text-gray-800 tracking-wide">
                        {title}
                    </h2>
                    <p className="text-sm md:text-base text-gray-500">
                        {subtitle}
                    </p>
                </div>
                <span className="text-xs md:text-sm bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full font-sans">
                    {badge}
                </span>
            </div>

            <ResponsiveContainer width="100%" height={320}>
                <LineChart data={data}>
                    <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={color} stopOpacity={0.35} />
                            <stop offset="100%" stopColor={color} stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="name"
                        tick={{ fill: "#6b7280", fontSize: 12, fontFamily: "Inter, sans-serif" }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        tick={{ fill: "#6b7280", fontSize: 12, fontFamily: "Inter, sans-serif" }}
                        axisLine={false}
                        tickLine={false}
                    />

                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#fff",
                            borderRadius: "12px",
                            border: "none",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                            fontFamily: "Inter, sans-serif",
                        }}
                        labelStyle={{ color: color, fontWeight: 600, fontFamily: "Inter, sans-serif" }}
                    />

                    <Line
                        type="monotone"
                        dataKey={dataKey}
                        stroke={color}
                        strokeWidth={3}
                        dot={{ r: 4, strokeWidth: 2, fill: "#fff" }}
                        activeDot={{ r: 6 }}
                        fill="url(#chartGradient)"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
