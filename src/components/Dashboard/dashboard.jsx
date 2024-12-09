import React from "react";

const Dashboard = ({count}) => {
  const stats = [
    { title: "Out Patients", count: "100" },
    { title: "In Patients", count: count },
    { title: "Hospital Employees", count: "80" },
    { title: "Vendors", count: "20" },
    { title: "Corporation Assets", count: "15" },
    { title: "Pharmaceuticals", count: "60" },
  ];
  // const employees = [
  //   { id: 1, picture: "https://via.placeholder.com/50", name: "John Doe", email: "john@example.com", department: "Cardiology" },
  // ];

  return (
    <main className="p-2 mb-14">
      <h2 className="text-2xl font-semibold text-gray-500 mb-6"></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {stats.map((stat, index) => ( 
          <div
            key={index}
            className="bg-white shadow-lg border-2 border-gray-600 rounded-lg p-6 text-center md:w-[70%] m-auto"
          >
            <h3 className="text-4xl font-bold text-blue-600 mb-2">
              {stat.count}
            </h3>
            <p className="text-gray-600">{stat.title}</p>
          </div>
        ))}
      </div>
      {/* Employee Table */}
      {/* <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Hospital Employees
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-3 px-4 text-left">Picture</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Department</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="border-t hover:bg-gray-100">
                <td className="py-3 px-4">
                  <img
                    src={employee.picture}
                    alt={employee.name}
                    className="w-12 h-12 rounded-full"
                  />
                </td>
                <td className="py-3 px-4">{employee.name}</td>
                <td className="py-3 px-4">{employee.email}</td>
                <td className="py-3 px-4">{employee.department}</td>
                <td className="py-3 px-4">
                  <button className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-700">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-700 ml-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </main>
  );
};

export default Dashboard;