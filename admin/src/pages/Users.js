import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Users = () => {
  const { users } = useContext(StoreContext);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        👥 Users Overview
      </h1>

      {users.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="py-3 px-6 text-left text-gray-700 font-semibold">#</th>
                <th className="py-3 px-6 text-left text-gray-700 font-semibold">Name</th>
                <th className="py-3 px-6 text-left text-gray-700 font-semibold">Email</th>
                <th className="py-3 px-6 text-left text-gray-700 font-semibold">Registered</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition duration-200"
                >
                  <td className="py-3 px-6 text-gray-600">{index + 1}</td>
                  <td className="py-3 px-6 font-medium text-gray-800">{user.name}</td>
                  <td className="py-3 px-6 text-gray-600">{user.email}</td>
                  <td className="py-3 px-6 text-gray-500 text-sm">
                    {user.createdAt
                      ? new Date(user.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })
                      : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No users registered yet.
        </p>
      )}
    </div>
  );
};

export default Users;
