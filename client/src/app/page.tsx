"use client";

import { useEffect } from "react";
import { apiRequest } from "../../lib/api";
import LandingPageSiteContainer from "./components/layout/LandingPageSiteContainer";

export default function HomePage({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("Pinging backend...");
    apiRequest("/")
      .then((data) => console.log("✅ Connected to backend"))
      .catch((err: any) => console.log(`❌ ${err.message}`));
  }, []);

  return <LandingPageSiteContainer>{children}</LandingPageSiteContainer>;
}
