export const useVariantsStore = defineStore('variants', {
    state: () => ({
      product: null,
      variants: []
    }),
    actions: {
      async fetchVariants() {
        try {
          const response = await fetch('/api/getvariants');
          const data = await response.json();
  
          if (data?.success && data.data?.product && Array.isArray(data.data.variants)) {
            this.product = data.data.product;
            this.variants = data.data.variants.map((variant: { id: any; name: any; prices: { amount: any; name: any; method: any; type: any; sms: { is: any; number: any; content: any; }; providerData: any; }[]; }) => ({
              id: variant.id,
              name: variant.name,
              prices: variant.prices.map((price: { amount: any; name: any; method: any; type: any; sms: { is: any; number: any; content: any; }; providerData: any; }) => ({
                amount: price.amount,
                name: price.name,
                method: price.method,
                type: price.type,
                sms: price.sms?.is ? {
                  number: price.sms.number || null,
                  content: price.sms.content || null
                } : null,
                providerData: price.providerData || {}
              }))
            }));
          } else {
            this.product = null;
            this.variants = [];
          }
        } catch (error) {
          console.error("Błąd podczas pobierania wariantów:", error);
          this.product = null;
          this.variants = [];
        }
      }
    }
  });
  
  