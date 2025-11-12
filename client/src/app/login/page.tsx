"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:5050/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!data.success || !data.token) {
        throw new Error(data.message || "Login failed");
      }

      // ✅ Save JWT in localStorage (you can use cookies later if preferred)
      localStorage.setItem("token", data.token);

      console.log("✅ Login successful, token saved:", data.token);

      // Redirect to main app page (e.g., War Map)
      router.push("/war-map");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-midnight text-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-11/12 max-w-md bg-black/50 p-8 rounded-2xl shadow-md flex flex-col gap-4"
      >
        <h1 className="text-3xl font-bold text-center mb-2">Welcome Back</h1>

        <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />

        {error && <p className="text-red-400 text-center">{error}</p>}

        <Button
          type="submit"
          className="bg-gold text-black hover:bg-gold/80"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </main>
  );
}
