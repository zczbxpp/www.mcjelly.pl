export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const body = await readBody(event);
  
    try {
      const response = await fetch("https://api.spaceis.pl/v4/transaction/variantPayment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${config.apiKey}`,
        },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error(`Błąd API: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Błąd wysyłania płatności:", error);
      return { success: false, error: error };
    }
  });
  