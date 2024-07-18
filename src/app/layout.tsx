import type { Metadata } from "next";
import './globals.css';
import Navbar from "./components/Navbar";
export const revalidate=3600
export const metadata: Metadata = {
  title: "Next.js app gallery",
  description: "by chammakhi islem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="max-w-6xl mx-auto">{children}</main></body>
    </html>
  );
}
/*for this app we will use Pexels API for generate images using the API key and save it in a secure file with an extension .env.local 
  and we will follow the documentation for functionallity like fetch reeques
*/
/*  also we will use zod to validate data we received frim the pexels API using schemas */