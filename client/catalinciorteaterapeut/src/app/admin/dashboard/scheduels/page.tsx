"use client";

import { useEffect, useState, useCallback } from "react";

interface Programare {
  _id: string;
  nume: string;
  email: string;
  telefon: string;
  terapie: string;
  data: string;
  ora: string;
  comentarii?: string;
}

export default function ProgramariPage() {
  const [programari, setProgramari] = useState<Programare[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProgramari = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:5000/programari");
      if (!res.ok) throw new Error("Eroare la încărcarea programărilor");
      const data: Programare[] = await res.json();
      setProgramari(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Eroare necunoscută");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProgramari();
  }, [fetchProgramari]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-extrabold text-[#134e4a]">Programări</h2>
        <button
          onClick={fetchProgramari}
          disabled={loading}
          className="px-4 py-2 rounded-lg bg-[#134e4a] text-white hover:bg-[#0f3b34] transition disabled:opacity-50"
        >
          {loading ? "Se încarcă..." : "Reîncarcă"}
        </button>
      </div>

      {error && <p className="mb-4 text-red-500">{error}</p>}

      <div className="overflow-x-auto border border-[#134e4a] rounded-lg shadow">
        <table className="min-w-full divide-y divide-[#134e4a]">
          <thead className="bg-[#134e4a] text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Nume</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Telefon</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Terapie</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Data</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Ora</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Comentarii</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#134e4a] bg-white text-[#134e4a]">
            {loading ? (
              <tr>
                <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                  Se încarcă...
                </td>
              </tr>
            ) : programari.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                  Nu există programări.
                </td>
              </tr>
            ) : (
              programari.map((p) => (
                <tr key={p._id} className="hover:bg-[#a7f3d0]/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap font-semibold">{p.nume}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{p.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{p.telefon}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{p.terapie}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(p.data).toLocaleDateString("ro-RO")}
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