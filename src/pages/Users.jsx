import { useState } from "react";
import Layout from "../components/Layout";
import { getUsers } from "../services/api";
import { FaUserPlus, FaUsers, FaUserCheck, FaEdit } from "react-icons/fa";
import EditUserModal from "../components/EditUserModal";
import AddUserModal from "../components/AddUserModal";
import { useTheme } from "../context/ThemeContext";

export default function Users() {
  const { theme } = useTheme();

  const [users, setUsers] = useState(getUsers());
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddUser = (user) => {
    setUsers([...users, { ...user, id: Date.now(), status: "Active" }]);
    setShowAdd(false);
  };

  const handleUpdateUser = (user) => {
    setUsers(users.map((u) => (u.id === user.id ? user : u)));
    setShowEdit(false);
  };

  const statusStyles = {
    Active: "bg-green-100 text-green-600",
    Inactive: "bg-red-100 text-red-600",
    Pending: "bg-yellow-100 text-yellow-600",
  };

  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.status === "Active").length;

  return (
    <Layout>
      <div
        className={`min-h-screen p-4 sm:p-6 transition-colors ${
          theme === "dark"
            ? "bg-gray-900 text-gray-100"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        <div className="mb-6">
          <div className="rounded-xl p-4 sm:p-6 text-white flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-gradient-to-r from-indigo-600 to-purple-600">
            <div>
              <h1 className="text-xl sm:text-3xl font-semibold">Users</h1>
              <p className="text-indigo-100 text-sm">
                Manage application users
              </p>
            </div>

            <button
              onClick={() => setShowAdd(true)}
              className="bg-white text-indigo-600 px-4 py-2 rounded-md font-semibold w-full sm:w-auto"
            >
              Add User
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <StatCard title="Total Users" value={totalUsers} icon={<FaUsers />} theme={theme} />
          <StatCard title="Active Users" value={activeUsers} icon={<FaUserCheck />} theme={theme} />
          <StatCard title="New This Month" value="12" icon={<FaUserPlus />} theme={theme} />
        </div>

        <div
          className={`rounded-xl p-4 sm:p-6 ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-lg font-semibold mb-4">User List</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr
                  className={`border-b ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  <th className="py-3 text-left">Name</th>
                  <th className="text-left">Email</th>
                  <th className="text-left">Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {users.map((u) => (
                  <tr
                    key={u.id}
                    className={`border-b ${
                      theme === "dark"
                        ? "hover:bg-gray-700"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <td className="py-3 font-medium whitespace-nowrap">
                      {u.name}
                    </td>
                    <td className="text-sm whitespace-nowrap">
                      {u.email}
                    </td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          statusStyles[u.status]
                        }`}
                      >
                        {u.status}
                      </span>
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => {
                          setSelectedUser(u);
                          setShowEdit(true);
                        }}
                        className="p-2 rounded-full bg-indigo-100 text-indigo-600"
                      >
                        <FaEdit />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {showAdd && (
          <AddUserModal onClose={() => setShowAdd(false)} onSave={handleAddUser} />
        )}

        {showEdit && (
          <EditUserModal
            user={selectedUser}
            onClose={() => setShowEdit(false)}
            onSave={handleUpdateUser}
          />
        )}
      </div>
    </Layout>
  );
}

const StatCard = ({ title, value, icon, theme }) => (
  <div
    className={`p-4 sm:p-6 rounded-xl ${
      theme === "dark" ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
    }`}
  >
    <div className="flex justify-between items-center">
      <p className="text-sm text-gray-500">{title}</p>
      <span className="bg-indigo-100 text-indigo-600 p-3 rounded-full">
        {icon}
      </span>
    </div>
    <h3 className="text-2xl sm:text-3xl font-semibold mt-3">{value}</h3>
  </div>
);
