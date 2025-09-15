import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('player', {
  state: () => ({
    richestPlayer: { nick: 'Ładowanie...', amount: 0 }
  }),
  actions: {
    async fetchRichestPlayer() {
      try {
        const response = await fetch('/api/richest'); 
        const data = await response.json();

        if (data?.success && data.data?.length > 0) {
          this.richestPlayer = {
            nick: data.data[0].nick || 'Brak danych',
            amount: data.data[0].amount || 0
          };
        } else {
          this.richestPlayer = { nick: 'Brak danych', amount: 0 };
        }
      } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
        this.richestPlayer = { nick: 'Błąd', amount: 0 };
      }
    }
  }
});

export const useLastBuyersStore = defineStore('lastbuyers', {
  state: () => ({
    lastBuyers: []
  }),
  actions: {
    async fetchLastBuyers() {
      try {
        const response = await fetch('/api/lastbuyers'); 
        const data = await response.json();

        if (data?.success && Array.isArray(data.data)) {
          this.lastBuyers = data.data.filter((b: { nick: string; }) => b.nick && b.nick.trim() !== '');
        } else {
          this.lastBuyers = [];
        }
      } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
        this.lastBuyers = [];
      }
    }
  }
});


