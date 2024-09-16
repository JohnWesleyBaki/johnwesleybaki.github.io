import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "John Wesley😊",
  description: "John Wesley's Portfolio Website",
  openGraph: {
    title: "John Wesley",
    description: "John Wesley's Portfolio Website",
    url: "https://johnwesleybaki.github.io/",
    type: "website",
  },
};

export default function RootLayout({ children }) {

  



  return (
    <html lang="en">
      <head> 
      </head>
      <body className={inter.className}>
        <Header />
          {children}
          <SideBar/>
      </body>
    </html>
  );
}
