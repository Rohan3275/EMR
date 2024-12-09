import React from "react";

const CurrentMedication = () => {
  const medications = [
    {
      medicine: "Paracetamol",
      dosage: "500 mg",
      frequency: "Twice a day",
      foodRelation: "After meals",
      route: "Oral",
      prescribeDate: "2024-12-01",
      endDate: "2024-12-07",
      visitDate: "2024-11-30",
    },
    {
      medicine: "Amoxicillin",
      dosage: "250 mg",
      frequency: "Three times a day",
      foodRelation: "Before meals",
      route: "Oral",
      prescribeDate: "2024-11-28",
      endDate: "2024-12-04",
      visitDate: "2024-11-27",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center text-blue-700 my-6">
        Current Medication
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded border border-gray-300">
          <thead>
            <tr className="bg-blue-gray-50 text-blue-gray-900">
              <th className="px-4 py-2 text-left">Medicine</th>
              <th className="px-4 py-2 text-left">Dosage</th>
              <th className="px-4 py-2 text-left">Frequency</th>
              <th className="px-4 py-2 text-left">Food Relation</th>
              <th className="px-4 py-2 text-left">Route</th>
              <th className="px-4 py-2 text-left">Prescribe Date</th>
              <th className="px-4 py-2 text-left">End Date</th>
              <th className="px-4 py-2 text-left">Visit Date</th>
            </tr>
          </thead>
          <tbody>
            {medications.map((med, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="border px-4 py-2">{med.medicine}</td>
                <td className="border px-4 py-2">{med.dosage}</td>
                <td className="border px-4 py-2">{med.frequency}</td>
                <td className="border px-4 py-2">{med.foodRelation}</td>
                <td className="border px-4 py-2">{med.route}</td>
                <td className="border px-4 py-2">{med.prescribeDate}</td>
                <td className="border px-4 py-2">{med.endDate}</td>
                <td className="border px-4 py-2">{med.visitDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrentMedication;
