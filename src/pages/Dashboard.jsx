import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import Layout from "../components/Layout";
import {
  FaUsers,
  FaRupeeSign,
  FaShoppingCart,
  FaChartLine,
  FaSyncAlt,
} from "react-icons/fa";
import DashboardChart from "../components/DashboardChart";

export default function Dashboard() {
  const { logout } = useAuth();
  const { theme } = useTheme();

  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const [stats, setStats] = useState([
    { title: "Total Users", value: 1245, icon: <FaUsers /> },
    { title: "Revenue", value: 84500, icon: <FaRupeeSign /> },
    { title: "Orders", value: 320, icon: <FaShoppingCart /> },
    { title: "Growth", value: 12, icon: <FaChartLine /> },
  ]);

  const [orders, setOrders] = useState([
    { id: "#1021", user: "Riya Singh", status: "Completed", amount: "₹2,500" },
    { id: "#1022", user: "Rahul Verma", status: "Pending", amount: "₹1,200" },
    { id: "#1023", user: "Aman Kumar", status: "Cancelled", amount: "₹900" },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredOrders = orders.filter((order) => {
    const matchSearch = order.user
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchStatus =
      statusFilter === "All" || order.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const revenueChartData = [
    { name: "Jan", value: 42000 },
    { name: "Feb", value: 52000 },
    { name: "Mar", value: 48000 },
    { name: "Apr", value: 61000 },
    { name: "May", value: 70000 },
    { name: "Jun", value: 84500 },
  ];

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      setLoading(true);
      setTimeout(() => logout(), 800);
    }
  };

  const handleRefresh = () => { setRefreshing(true); setTimeout(() => { setStats([{ title: "Total Users", value: 1200 + Math.floor(Math.random() * 200), icon: <FaUsers /> }, { title: "Revenue", value: 80000 + Math.floor(Math.random() * 10000), icon: <FaRupeeSign /> }, { title: "Orders", value: 300 + Math.floor(Math.random() * 50), icon: <FaShoppingCart /> }, { title: "Growth", value: 10 + Math.floor(Math.random() * 5), icon: <FaChartLine /> },]); setOrders([{ id: "#1024", user: "Neha Sharma", status: "Completed", amount: "₹3,200" }, { id: "#1025", user: "Kunal Mehta", status: "Pending", amount: "₹1,500" }, { id: "#1026", user: "Arjun Patel", status: "Completed", amount: "₹2,800" },]); setRefreshing(false); }, 1000); };

  const isDark = theme === "dark";

  return (
    <Layout>
      <div
        className={`min-h-screen p-4 sm:p-6 transition-colors ${isDark ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"
          }`}
      >
        <div className="mb-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 sm:px-6 py-5 rounded-xl">
            <div>
              <h1 className="text-xl sm:text-3xl font-semibold">Dashboard</h1>
              <p className="text-sm text-indigo-100">Welcome back, Krish</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleRefresh}
                disabled={refreshing}
                className="bg-white text-indigo-600 px-4 py-2 rounded-lg flex items-center justify-center gap-2"
              >
                <FaSyncAlt className={refreshing ? "animate-spin" : ""} />
                Refresh
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item, index) => (
            <StatCard
              key={index}
              title={item.title}
              value={
                item.title === "Revenue"
                  ? `₹${item.value.toLocaleString()}`
                  : item.title === "Growth"
                    ? `+${item.value}%`
                    : item.value
              }
              icon={item.icon}
              isDark={isDark}
            />
          ))}
        </div>

        <div className="mt-8 overflow-x-auto">
          <DashboardChart
            title="Revenue Overview"
            subtitle="Monthly revenue growth"
            badge="Last 6 Months"
            data={revenueChartData}
            dataKey="value"
            color="#6366f1"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <ActionCard title="Add New User" subtitle="User" />
          <ActionCard title="View Orders" subtitle="Orders" />
          <ActionCard title="Generate Report" subtitle="Report" />
        </div>

        <div
          className={`mt-8 p-4 sm:p-6 rounded-xl ${isDark ? "bg-gray-800" : "bg-white"
            }`}
        >
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>

          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="text"
              placeholder="Search by user..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`px-3 py-2 rounded-lg w-full sm:w-1/2 ${isDark ? "bg-gray-700 text-white" : "bg-white border"
                }`}
            />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className={`px-3 py-2 rounded-lg w-full sm:w-1/3 ${isDark ? "bg-gray-700 text-white" : "bg-white border"
                }`}
            >
              <option value="All">All Status</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr
                  className={`border-b ${isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                >
                  <th className="py-3 text-left">Order ID</th>
                  <th className="text-left">User</th>
                  <th className="text-left">Status</th>
                  <th className="text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order, index) => (
                  <OrderRow key={index} {...order} isDark={isDark} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const StatCard = ({ title, value, icon, isDark }) => (
  <div
    className={`p-4 rounded-xl ${isDark ? "bg-gray-800" : "bg-white"
      }`}
  >
    <div className="flex justify-between items-center">
      <p className="text-sm text-gray-500">{title}</p>
      <span className="bg-indigo-100 text-indigo-600 p-3 rounded-full">
        {icon}
      </span>
    </div>
    <h3 className="text-2xl font-semibold mt-3">{value}</h3>
  </div>
);

const ActionCard = ({ title, subtitle }) => (
  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-5 rounded-xl">
    <h3 className="font-semibold">{title}</h3>
    <p className="text-sm opacity-90 mt-1">
      {`Manage your ${subtitle}`}
    </p>
  </div>
);

const OrderRow = ({ id, user, status, amount, isDark }) => {
  const statusColor =
    status === "Completed"
      ? "text-green-500"
      : status === "Pending"
        ? "text-yellow-500"
        : "text-red-500";

  return (
    <tr
      className={`border-b ${isDark ? "hover:bg-gray-700" : "hover:bg-gray-50"
        }`}
    >
      <td className="py-3">{id}</td>
      <td>{user}</td>
      <td className={`font-medium ${statusColor}`}>{status}</td>
      <td>{amount}</td>
    </tr>
  );
};
