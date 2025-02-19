export const data = async (prompt) => {
  const url = import.meta.env.VITE_BASE_URL;

  const body = {
    model: "llama3",
    prompt: prompt,
    stream: false,
    raw: false,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
