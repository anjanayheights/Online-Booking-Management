"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/home-2");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg font-medium text-neutral-600">Loading Real Estate Portal...</p>
    </div>
  );
}
