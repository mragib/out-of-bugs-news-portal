import NextTopLoader from "nextjs-toploader";

import "@/assets/css/style.css";
import "@/assets/css/sidebar.css";
import "@/assets/css/dropdownmenu.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <NextTopLoader color="#E60000" height={2} speed={200} />
      </body>
    </html>
  );
}
