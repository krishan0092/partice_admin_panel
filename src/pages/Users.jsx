import Layout from "../components/Layout";
import { getUsers } from "../services/api";

export default function Users() {
  const users = getUsers();

  return (
    <Layout>
      <h1 className="text-2xl mb-4">Users</h1>
      <table className="border w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td className="border p-2">{u.name}</td>
              <td className="border p-2">{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
