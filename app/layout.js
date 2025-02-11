import "./globals.css";
import "./Components/Navbar"

export const metadata = {
  title: "Joseph Portfolio",
  description: "A unique developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased mx-auto">
      
        {children}
      </body>
    </html>
  );
}
