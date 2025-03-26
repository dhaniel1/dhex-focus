"use client";

import { routes } from "@/lib/routes";
import { permanentRedirect } from "next/navigation";

export default function Home() {
  permanentRedirect(routes.timer.path);

  return (
    <div>
      <main>
        <p>Hello App</p>
      </main>
    </div>
  );
}
