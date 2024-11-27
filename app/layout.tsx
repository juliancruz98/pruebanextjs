import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./sidebar/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-Anaheim antialiased bg-gray-200">
        <div className="flex flex-row">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
