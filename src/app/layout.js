import Navbar from "@/components/navbar";
import { mainFont } from "@/utils/font";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/footer";

export const metadata = {
  title: "Marketing Website",
  description: "Marketing Website ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mainFont.className} custom-background h-full w-full scroll-smooth p-4 antialiased`}
      >
        <ToastContainer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
