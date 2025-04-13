"use client";

import { Button } from "@/components";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const navigation = useRouter();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h4 className="text-2xl font-medium mb-3"> You visited an invalid URL</h4>
      <Button
        size="lg"
        variant="primary"
        onClick={() => navigation.push("/")}
        label="Go Home"
      />
    </div>
  );
}
