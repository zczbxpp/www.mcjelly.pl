# Strona internetowa dla serwera mcjelly.pl

Aplikacja webowa stworzona w **Nuxt 3** z integracją płatności **SpaceIs**.  
Projekt został przygotowany jako platforma doładowań portfela gracza w sieci serwerów Minecraft.

## Funkcje
- Integracja płatności online poprzez API **SpaceIs**
- Responsywny interfejs użytkownika (TailwindCSS + AOS animations)
- Regulamin i podstawowe strony statyczne

## Technologie
- **Nuxt 3 (Vue 3, Vite, SSR-ready)**
- **Pinia** — zarządzanie stanem
- **TailwindCSS** — stylizacja
- **TypeScript**
- **SpaceIs API** — obsługa płatności
- **Node.js (server/api)** — endpointy i webhooki

## Instalacja i uruchomienie
1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/yourusername/mcJelly.git
   cd mcJelly
   ```
2. Zainstaluj zależności:
   ```bash
   npm install
   ```
3. Utwórz plik `.env` i ustaw zmienne środowiskowe:
   ```env
   NUXT_PUBLIC_API_BASE_URL=http://localhost:3000
   SPACEIS_API_KEY=your_api_key
   SPACEIS_API_SECRET=your_api_secret
   ```
4. Uruchom aplikację w trybie deweloperskim:
   ```bash
   npm run dev
   ```

## Integracja z SpaceIs
- Każda transakcja inicjalizowana jest przez backend (`/server/api`).
- SpaceIs obsługuje proces płatności i odsyła wynik.
- Po potwierdzeniu płatności portfel gracza w Minecraft zostaje zasilony/lub zostaje wykonana komenda.

## Screenshoty

<img width="1153" height="1280" alt="image" src="https://github.com/user-attachments/assets/d1549b7c-a788-4063-a004-be8f509be52e" />

<img width="1047" height="1188" alt="image2" src="https://github.com/user-attachments/assets/61b5c6aa-b05e-4df5-bf8b-5084d1f9ef8b" />
