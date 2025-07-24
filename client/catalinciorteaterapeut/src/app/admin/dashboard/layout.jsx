"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const menuItems = [
    { href: "/admin/dashboard/scheduels", label: "Scheduels" },
    { href: "/admin/dashboard/messages", label: "Messages" },
  ];

  return (
    <div className="flex min-h-screen">
      <nav className="w-64 bg-[#134e4a] text-white flex flex-col p-6 shadow-lg h-screen">
        <h1 className="text-3xl font-extrabold mb-8 tracking-wide">
          Admin Dashboard
        </h1>
        <ul className="flex flex-col gap-5 text-lg">
          {menuItems.map(({ href, label }) => {
            const isActive = pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`block w-full px-5 py-3 rounded-lg transition-colors duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#a7f3d0] text-[#134e4a] font-bold shadow-md"
                      : "hover:bg-[#a7f3d0] hover:text-[#134e4a]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <main className="flex-1">
        <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-br from-teal-50 to-white min-h-screen">
          {children}
        </section>
      </main>
    </div>
  );
}