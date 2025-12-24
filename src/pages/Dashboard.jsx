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


  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      setLoading(true);
      setTimeout(() => {
        logout();
        setLoading(false);
      }, 800);
    }
  };

 
  const handleRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setStats([
        {
          title: "Total Users",
          value: 1200 + Math.floor(Math.random() * 200),
          icon: <FaUsers />,
        },
        {
          title: "Revenue",
          value: 80000 + Math.floor(Math.random() * 10000),
          icon: <FaRupeeSign />,
        },
        {
          title: "Orders",
          value: 300 + Math.floor(Math.random() * 50),
          icon: <FaShoppingCart />,
        },
        {
          title: "Growth",
          value: 10 + Math.floor(Math.random() * 5),
          icon: <FaChartLine />,
        },
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
      <div className="bg-gray-100 min-h-screen p-6">

        <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-6 rounded-xl shadow">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-sm opacity-90">Welcome back, Krish</p>
          </div>

          <div className="flex gap-3 mt-4 md:mt-0">
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 disabled:opacity-60"
            >
              <FaSyncAlt className={refreshing ? "animate-spin" : ""} />
              {refreshing ? "Refreshing..." : "Refresh"}
            </button>

            <button
              onClick={handleLogout}
              disabled={loading}
              className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 disabled:opacity-60"
            >
              {loading ? "Logging out..." : "Logout"}
            </button>
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

    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <ActionCard title="Add New User" subtitle="User" />
          <ActionCard title="View Orders" subtitle="Orders" />
          <ActionCard title="Generate Report"  subtitle="Report"/>
        </div>

        <div className="bg-white mt-10 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500 border-b">
                  <th className="py-3 text-left">Order ID</th>
                  <th>User</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <OrderRow key={index} {...order} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </Layout>
  );
}

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="flex justify-between items-center">
      <p className="text-gray-500 text-sm">{title}</p>
      <span className="bg-indigo-100 text-indigo-600 p-3 rounded-full text-xl">
        {icon}
      </span>
    </div>
    <h3 className="text-3xl font-bold mt-4">{value}</h3>
    <p className="text-xs text-green-500 mt-1">Updated just now</p>
  </div>
);

const ActionCard = ({ title,subtitle }) => (
  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-xl shadow hover:scale-[1.03] transition cursor-pointer">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm opacity-90 mt-2">
      {`Manage your ${subtitle} activities quickly`}
    </p>
  </div>
);

const OrderRow = ({ id, user, status, amount }) => {
  const statusColor =
    status === "Completed"
      ? "text-green-500"
      : status === "Pending"
      ? "text-yellow-500"
      : "text-red-500";

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="py-3">{id}</td>
      <td>{user}</td>
      <td className={statusColor}>{status}</td>
      <td>{amount}</td>
    </tr>
  );
};
