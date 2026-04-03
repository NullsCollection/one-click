const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

export class ApiError extends Error {
  constructor(
    public readonly code: string,
    message: string,
    public readonly status: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function request<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...options.headers },
    credentials: "include", // send & receive httpOnly cookies for JWT
    ...options,
  });

  let body;
  try {
    body = await res.json();
  } catch {
    throw new ApiError(
      "PARSE_ERROR",
      "Failed to parse server response",
      res.status,
    );
  }

  if (!res.ok) {
    const err = body?.error;
    throw new ApiError(
      err?.code ?? "UNKNOWN_ERROR",
      err?.message ?? "An unexpected error occurred",
      res.status,
    );
  }

  return body.data as T;
}
