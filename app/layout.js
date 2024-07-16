import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMR Movie Database",
  description: " Internet Movies Rental Movie Database 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className = "max-w-4xl mx-auto px-5">
          <Header />
          {children}
          <Footer />
        </div>
        </body>
    </html>
  );
}
