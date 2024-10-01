import type { Metadata } from "next";
import "./globals.css";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export const metadata: Metadata = {
  title: "Recepten Organizer",
  description: "Recepten Organizer is een webapplicatie waarmee je je recepten kunt toevoegen, beheren en opslaan.", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
