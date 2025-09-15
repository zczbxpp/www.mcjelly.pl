export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const param = getQuery(event).param || "695fdc76-0a4d-4a0e-bc2e-d29cec3c2555";

  try {
    const response = await fetch(`https://api.spaceis.pl/v4/server/${param}/latest_buyers?limit=10`, {
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Błąd API: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    return { success: true, data: data.data };
  } catch (error) {
    console.error("Błąd pobierania danych:", error);
    return { success: false, error: error };
  }
});
