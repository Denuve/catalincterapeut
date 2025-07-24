"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";


export default function AdminDashboardPage() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
      return;
    }

    try {
      const decoded = jwtDecode(token); // decodează payload-ul tokenului
      const currentTime = Date.now() / 1000;

      if (decoded.exp && decoded.exp < currentTime) {
        console.log("Token expirat");
        localStorage.removeItem("token");
        router.push("/admin/login");
      }
    } catch (err) {
      console.error("Token invalid:", err);
      localStorage.removeItem("token");
      router.push("/admin/login");
    }
  }, [router]);

  return (
     <>
      <h2 className="text-4xl font-bold mb-4 text-vernil-dark">Dashboard Admin</h2>
      <p className="text-lg text-vernil-dark max-w-xl">
        Aici poți gestiona programările, utilizatorii și alte funcționalități importante.
      </p>
    </>
  );
}
