import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";




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
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&family=Dancing+Script:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <Header />
        
          {children}
        
      </body>
    </html>
  );
}
