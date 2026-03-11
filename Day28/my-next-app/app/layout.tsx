import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <div>
          <Navbar/>
          {children}
          </div>
      </body>
    </html>
  );
}
