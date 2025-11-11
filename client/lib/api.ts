// client/src/api.ts
const API_BASE_URL = "http://localhost:5050";

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export async function apiRequest(
  endpoint: string,
  method: HTTPMethod = "GET",
  body?: any,
  token?: string
) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || data.message || "API request failed");
  }

  return data;
}
