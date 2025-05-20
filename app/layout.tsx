import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "RishiRaj Corporation",
  description: "Where Controlled Explosions Drive Unlimited Potential",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      style={{
        backgroundColor: "white",
        color: "black"
      }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
