import { mainFont } from "@/utils/font";
import "./globals.css";

export const metadata = {
  title: "Marketing Website",
  description: "Marketing Website ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mainFont.className} custom-background scroll-smooth py-4 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
