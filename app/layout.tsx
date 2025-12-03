// Root Layout v2
import "@/styles/globals.css";

export const metadata = { title: "PrathamOne" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}