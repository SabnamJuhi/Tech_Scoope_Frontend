const BASE_URL = "http://localhost:5000/api";

export const apiFetch = async (
  endpoint,
  options = {}
) => {

  const response = await fetch(
    `${BASE_URL}${endpoint}`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      ...options
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Something went wrong"
    );
  }

  return data;
};