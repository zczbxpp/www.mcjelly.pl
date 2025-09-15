
  export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const param = getQuery(event).param || "695fdc76-0a4d-4a0e-bc2e-d29cec3c2555";
    const categoryId = "4d2a0ba5-704f-4030-baa8-4bbbe7ed0beb";
    const productId = "b8d2090a-290a-4676-9b40-6a4aba1913d0";

    try {
      const response = await fetch(`https://api.spaceis.pl/v4/server/${param}/category/${categoryId}/product/${productId}/variants`, {
        headers: {
          Authorization: `Bearer ${config.apiKey}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Błąd API: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error("Błąd pobierania danych:", error);
      return { success: false, error: error };
    }
  });
  