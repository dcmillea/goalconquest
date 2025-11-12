"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { apiRequest } from "../../../lib/api";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await apiRequest("/auth/register", "POST", form);

      if (data.success) {
        console.log("✅ Registered: ", data.user);
        router.push("/login"); // send user to the login page
      } else {
        setError(data.message || "Registration failed.");
      }
    } catch (err: any) {
      console.error("❌ Register error:", err);
      setError(err.message || "Server Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-midnight text-gray-100">
      <div className="w-11/12 sm:w-96 bg-black/50 p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-gold mb-6">
          Join the Conquest ⚔️
        </h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <Button
            type="submit"
            className="w-full bg-gold/90 text-midnight font-bold hover:bg-gold"
            disabled={loading}
          >
            {loading ? "Recruiting..." : "Enlist Now"}
          </Button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-gold hover:underline">
            Sign in here
          </a>
        </p>
      </div>
    </main>
  );
}
