"use client";

import { useEffect } from "react";
import { apiRequest } from "../../lib/api";
import MainContainer from "./components/layout/MainContainer";

export default function HomePage() {
  useEffect(() => {
    console.log("Pinging backend...");
    apiRequest("/")
      .then((data) => console.log("✅ Connected to backend"))
      .catch((err: any) => console.log(`❌ ${err.message}`));
  }, []);

  return <MainContainer />;
}
