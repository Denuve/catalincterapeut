"use client";

import { useState, useMemo } from "react";

const sampleAppointments = [
  {
    id: 1,
    nume: "Ion Popescu",
    email: "ion.popescu@email.com",
    telefon: "0712345678",
    terapie: "Reiki",
    data: "2025-08-01",
    ora: "10:00",
    comentarii: "Vrea ședință de relaxare",
  },
  {
    id: 2,
    nume: "Maria Ionescu",
    email: "maria.ionescu@email.com",
    telefon: "0722333444",
    terapie: "Inforenergetică",
    data: "2025-07-30",
    ora: "14:00",
    comentarii: "",
  },
  {
    id: 3,
    nume: "Andrei Vasilescu",
    email: "andrei.v@email.com",
    telefon: "0733555666",
    terapie: "Șamanism",
    data: "2025-07-28",
    ora: "09:00",
    comentarii: "Primează meditația",
  },
  // mai adaugă dacă vrei
];

function toggleSortOrder(currentOrder: string) {
  if (currentOrder === "none") return "asc";
  if (currentOrder === "asc") return "desc";
  return "none";
}

export default function ProgramariPage() {
  const [searchName, setSearchName] = useState("");
  const [sortNume, setSortNume] = useState("none"); // 'asc', 'desc', 'none'
  const [sortData, setSortData] = useState("none"); // 'asc', 'desc', 'none'

  // Resetam cealaltă sortare când aplicăm una nouă (optional)
  const onSortNumeClick = () => {
    setSortNume(toggleSortOrder(sortNume));
    setSortData("none");
  };

  const onSortDataClick = () => {
    setSortData(toggleSortOrder(sortData));
    setSortNume("none");
  };

  const filteredAndSorted = useMemo(() => {
    let data = [...sampleAppointments];

    // Filtrare după text în nume, case insensitive
    if (searchName.trim() !== "") {
      const lowerSearch = searchName.toLowerCase();
      data = data.filter((a) => a.nume.toLowerCase().includes(lowerSearch));
    }

    // Sortare după Nume dacă e setată
    if (sortNume !== "none") {
      data.sort((a, b) => {
        if (a.nume < b.nume) return sortNume === "asc" ? -1 : 1;
        if (a.nume > b.nume) return sortNume === "asc" ? 1 : -1;
        return 0;
      });
    }

    // Sortare după Data dacă e setată
    if (sortData !== "none") {
      data.sort((a, b) => {
        const dateA = new Date(a.data);
        const dateB = new Date(b.data);
        if (dateA < dateB) return sortData === "asc" ? -1 : 1;
        if (dateA > dateB) return sortData === "asc" ? 1 : -1;
        return 0;
      });
    }

    return data;
  }, [searchName, sortNume, sortData]);

  // Simboluri pentru sortare în header
  const sortSymbol = (order: string) => {
    if (order === "asc") return "▲";
    if (order === "desc") return "▼";
    return "";
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-extrabold mb-6 text-[#134e4a]">
        Programări
      </h2>

      <div className="mb-6 max-w-sm">
        <input
          type="text"
          placeholder="Caută după nume..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="w-full border border-[#134e4a] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#a7f3d0]"
        />
      </div>

      <div className="overflow-x-auto border border-[#134e4a] rounded-lg shadow">
        <table className="min-w-full divide-y divide-[#134e4a]">
          <thead className="bg-[#134e4a] text-white">
            <tr>
              <th
                scope="col"
                className="cursor-pointer px-6 py-3 text-left text-sm font-semibold flex items-center select-none"
                onClick={onSortNumeClick}
                title="Sortează după nume"
              >
                Nume&nbsp;<span>{sortSymbol(sortNume)}</span>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-semibold"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-semibold"
              >
                Telefon
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-semibold"
              >
                Terapie
              </th>
              <th
                scope="col"
                className="cursor-pointer px-6 py-3 text-left text-sm font-semibold flex items-center select-none"
                onClick={onSortDataClick}
                title="Sortează după data programării"
              >
                Data&nbsp;<span>{sortSymbol(sortData)}</span>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-semibold"
              >
                Ora
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm font-semibold"
              >
                Comentarii
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#134e4a] bg-white text-[#134e4a]">
            {filteredAndSorted.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                  Nu există programări.
                </td>
              </tr>
            ) : (
              filteredAndSorted.map((p) => (
                <tr
                  key={p.id}
                  className="hover:bg-[#a7f3d0]/30 transition-colors cursor-default"
                >
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">
                    {p.nume}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{p.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{p.telefon}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{p.terapie}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(p.data).toLocaleDateString("ro-RO", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{p.ora}</td>
                  <td className="px-6 py-4">{p.comentarii || "-"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
