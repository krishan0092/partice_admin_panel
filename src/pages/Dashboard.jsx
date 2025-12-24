import { useState } from "react";
import { useAuth } from "../context/AuthContext";
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

  const handleRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setStats([
        { title: "Total Users", value: 1200 + Math.floor(Math.random() * 200), icon: <FaUsers /> },
        { title: "Revenue", value: 80000 + Math.floor(Math.random() * 10000), icon: <FaRupeeSign /> },
        { title: "Orders", value: 300 + Math.floor(Math.random() * 50), icon: <FaShoppingCart /> },
        { title: "Growth", value: 10 + Math.floor(Math.random() * 5), icon: <FaChartLine /> },
      ]);

      setOrders([
        { id: "#1024", user: "Neha Sharma", status: "Completed", amount: "₹3,200" },
        { id: "#1025", user: "Kunal Mehta", status: "Pending", amount: "₹1,500" },
        { id: "#1026", user: "Arjun Patel", status: "Completed", amount: "₹2,800" },
      ]);

      setRefreshing(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen p-6 font-sans">

     <div className="mb-8">
  <div className="flex flex-col md:flex-row justify-between items-center
    bg-gradient-to-r from-indigo-600 to-purple-600
    text-white px-6 py-6 rounded-xl shadow">

    <div>
      <h1 className="text-2xl md:text-3xl font-semibold tracking-wide">
        Dashboard
      </h1>
      <p className="text-indigo-100 text-sm mt-1">
        Welcome back, Krish
      </p>
    </div>

    <div className="flex gap-3 mt-4 md:mt-0">
      <button
        onClick={handleRefresh}
        disabled={refreshing}
        className="bg-white text-indigo-600 px-4 py-2 rounded-lg
        flex items-center gap-2 hover:bg-indigo-50"
      >
        <FaSyncAlt className={refreshing ? "animate-spin" : ""} />
        Refresh
      </button>

      <button
        onClick={handleLogout}
        className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </div>

  </div>
</div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
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
            />
          ))}
        </div>

        <div className="mt-10">
          <DashboardChart
            title="Revenue Overview"
            subtitle="Monthly revenue growth"
            badge="Last 6 Months"
            data={revenueChartData}
            dataKey="value"
            color="#6366f1"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <ActionCard title="Add New User" subtitle="User" />
          <ActionCard title="View Orders" subtitle="Orders" />
          <ActionCard title="Generate Report" subtitle="Report" />
        </div>
        <div className="bg-white mt-10 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 tracking-wide">Recent Orders</h2>

          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="text"
              placeholder="Search by user..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border px-3 py-2 rounded-lg w-full md:w-1/3"
            />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border px-3 py-2 rounded-lg w-full md:w-1/4"
            >
              <option value="All">All Status</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <table className="w-full text-sm table-fixed">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-3 px-2 text-left uppercase tracking-wide">Order ID</th>
                <th className="py-3 px-2 text-left uppercase tracking-wide">User</th>
                <th className="py-3 px-2 text-left uppercase tracking-wide">Status</th>
                <th className="py-3 px-2 text-left uppercase tracking-wide">Amount</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.length ? (
                filteredOrders.map((order, index) => (
                  <OrderRow key={index} {...order} />
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-500">
                    No orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </Layout>
  );
}

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 font-sans">
    <div className="flex justify-between items-center">
      <p className="text-gray-500 text-sm uppercase tracking-wide">{title}</p>
      <span className="bg-indigo-100 text-indigo-600 p-3 rounded-full text-xl">
        {icon}
      </span>
    </div>
    <h3 className="text-3xl font-semibold mt-4">{value}</h3>
  </div>
);

const ActionCard = ({ title, subtitle }) => (
  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-xl shadow hover:scale-[1.03] transition cursor-pointer font-sans">
    <h3 className="text-lg font-semibold tracking-wide">{title}</h3>
    <p className="text-sm opacity-90 mt-2">
      {`Manage your ${subtitle} activities quickly`}
    </p>
  </div>
);

const OrderRow = ({ id, user, status, amount }) => {
  const statusColor =
    status === "Completed"
      ? "text-green-500 font-medium"
      : status === "Pending"
        ? "text-yellow-500 font-medium"
        : "text-red-500 font-medium";

  return (
    <tr className="border-b hover:bg-gray-50 font-sans">
      <td className="py-3 px-2 text-left">{id}</td>
      <td className="py-3 px-2 text-left">{user}</td>
      <td className={`py-3 px-2 text-left ${statusColor}`}>{status}</td>
      <td className="py-3 px-2 text-left">{amount}</td>
    </tr>
  );
};



