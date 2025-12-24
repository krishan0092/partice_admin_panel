import { useState } from "react";
import Layout from "../components/Layout";
import { getUsers } from "../services/api";
import { FaUserPlus, FaUsers, FaUserCheck, FaEdit } from "react-icons/fa";
import EditUserModal from "../components/EditUserModal";
import AddUserModal from "../components/AddUserModal";


export default function Users() {
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
      <div className="bg-gray-100 min-h-screen p-6 font-sans">

<div className="mb-8">
  <div
    className="rounded-xl p-6 text-white flex justify-between items-center shadow
    bg-gradient-to-r from-indigo-600 to-purple-600"
  >
    <div>
      <h1 className="text-2xl md:text-3xl font-semibold tracking-wide">
        Users
      </h1>
      <p className="text-indigo-100 text-sm mt-1">
        Manage application users
      </p>
    </div>

    <button
      onClick={() => setShowAdd(true)}
      className="bg-white text-indigo-600 px-5 py-2 rounded-md 
      flex items-center gap-2 font-semibold
      hover:bg-indigo-50 transition"
    >
      Add User
    </button>
  </div>
</div>



        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <StatCard title="Total Users" value={totalUsers} icon={<FaUsers />} />
          <StatCard title="Active Users" value={activeUsers} icon={<FaUserCheck />} />
          <StatCard title="New This Month" value="12" icon={<FaUserPlus />} />
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold tracking-wide">User List</h2>
          </div>

          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-3 text-left">Name</th>
                <th className="text-left">Email</th>
                <th className="text-left">Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 font-medium align-middle">{u.name}</td>

                  <td className="align-middle">{u.email}</td>

                  <td className="align-middle">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${statusStyles[u.status] || "bg-gray-100 text-gray-600"
                        }`}
                    >
                      {u.status}
                    </span>
                  </td>


                  <td className="text-center align-middle">
                    <button
                      onClick={() => {
                        setSelectedUser(u);
                        setShowEdit(true);
                      }}
                      className="inline-flex items-center justify-center p-2 rounded-full bg-indigo-50 text-indigo-600 
                      transition-all duration-200 ease-out 
                      hover:bg-indigo-100 hover:scale-125 hover:shadow-md"
                      title="Edit User"
                    >
                      <FaEdit />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {showAdd && (
          <AddUserModal
            onClose={() => setShowAdd(false)}
            onSave={handleAddUser}
          />
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

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition font-sans">
    <div className="flex justify-between items-center">
      <p className="text-gray-500 text-sm uppercase tracking-wide">{title}</p>
      <span className="bg-indigo-100 text-indigo-600 p-3 rounded-full text-xl">
        {icon}
      </span>
    </div>
    <h3 className="text-3xl font-semibold mt-4">{value}</h3>
  </div>
);
