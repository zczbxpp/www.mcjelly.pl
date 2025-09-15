<script setup lang="ts">

</script>

<template>
  <div class="flex justify-center items-center ">
    <div class="max-w-[80rem]">
      <Navbar></Navbar>

        <div>
          <div data-aos="zoom-in" class="mt-4 w-full flex flex-col">

            <h1 class="font-bold text-2xl mb-4">Regulamin serwera</h1>

            <div class="flex flex-row gap-12 items-start">
        
              <div class="bg-white w-1/4 p-8 rounded-xl mt-8 shadow">
                <h2 class="font-bold text-xl">Czego chcesz się dowiedzieć?</h2>
                <p class="font-light text-xs mt-4">Przedstawione informacje są aktualne na dzień 30.03.2025</p>

                <div class="flex flex-col mt-4 gap-2">
                  <button
                    class="bg-gray-100 text-[#f5993d] border-b-2 border-[#f5993d] rounded-xl p-4 font-light transition hover:scale-105"
                  >
                    Regulamin
                  </button>
                  <button
                    class="bg-gray-100 rounded-xl p-4 font-light transition hover:scale-105 hover:text-[#f5993d]"
                  >
                    Polityka Prywatności
                  </button>
                </div>

                <div class="flex flex-row mt-4 bg-yellow-100 p-4 rounded-xl text-yellow-500 font-light items-center">
                  <svg
                    class="w-6 h-6 flex-shrink-0"
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z"
                    ></path>
                  </svg>
                  <p class="text-xs ml-4">
                    Pamiętaj że zaakceptowałeś regulaminy serwera w momencie w którym utworzyłeś konto na serwerze mcjelly.pl
                  </p>
                </div>
              </div>


              <div class="bg-white w-3/4 p-8 rounded-xl mt-8 shadow">
                <h2 class="text-xl font-semibold mb-4">Regulamin</h2>

                <section class="space-y-6">
                  <div>
                    <h3 class="text-base font-semibold mb-2">1. Postanowienia ogólne</h3>
                    <ol class="list-decimal pl-6 space-y-1 text-sm font-light">
                      <li>Osoba korzystająca z serwera i serwisu block4u.pl będzie dalej nazywana "użytkownikiem".</li>
                      <li>Osoba, która skorzysta z usług sklepu block4u.pl będzie nazywana "klientem".</li>
                      <li>Serwer oraz serwis block4u.pl nie są powiązane z Mojang AB.</li>
                      <li>Serwis block4u.pl nie gromadzi ani nie przetwarza danych osobowych.</li>
                      <li>Nieznajomość regulaminu nie zwalnia z odpowiedzialności.</li>
                      <li>Wchodząc na serwer, akceptujesz regulamin.</li>
                      <li>Właściciel zastrzega sobie prawo do zmiany regulaminu.</li>
                      <li>Administrator może zbanować również za działania niewymienione w regulaminie.</li>
                    </ol>
                  </div>

                  <div>
                    <h3 class="text-base font-semibold mb-2">2. Płatności</h3>
                    <ol class="list-decimal pl-6 space-y-1 text-sm font-light">
                      <li>Dostępne formy płatności: PaySafeCard, PayPal, Przelew.</li>
                      <li>Cena usługi zależy od metody płatności.</li>
                      <li>Płatności obsługuje firma PayByLink.pl.</li>
                      <li>Transakcja nie podlega zwrotom.</li>
                    </ol>
                  </div>

                  <div>
                    <h3 class="text-base font-semibold mb-2">3. Sklep oraz reklamacje</h3>
                    <ol class="list-decimal pl-6 space-y-1 text-sm font-light">
                      <li>Usługi i przedmioty oferowane w sklepie są wirtualne i realizowane natychmiastowo.</li>
                      <li>Reklamacje mogą zostać odrzucone w przypadku blokady konta za oszustwa.</li>
                      <li>Reklamacje bez pełnych danych nie będą rozpatrywane.</li>
                      <li>Termin rozpatrzenia reklamacji wynosi do 30 dni.</li>
                      <li>Usługi po skorzystaniu nie podlegają zwrotowi.</li>
                      <li>W przypadku problemów z płatnością można kontaktować się bezpośrednio z PayByLink.</li>
                      <li>Aby zakupić usługę należy wybrać metodę płatności i podać nick z serwera.</li>
                      <li>Reklamacje można zgłaszać w ciągu 14 dni od zakupu.</li>
                    </ol>
                  </div>

                  <div>
                    <h3 class="text-base font-semibold mb-2">4. Polityka prywatności</h3>
                    <ol class="list-decimal pl-6 space-y-1 text-sm font-light">
                      <li>Zbieramy dane w celu poprawy jakości usług.</li>
                      <li>Przy reklamacji wymagane mogą być dane klienta (email, nick, dowód zakupu).</li>
                      <li>Możemy zbierać dane o sposobie korzystania z serwisu (IP, typ przeglądarki, czas wizyty itp.).</li>
                      <li>Używamy plików cookie i podobnych technologii śledzenia.</li>
                      <li>block4u.pl może ujawniać dane osobowe, jeżeli jest to konieczne.</li>
                      <li>Nasza Usługa może zawierać linki do stron trzecich – nie odpowiadamy za ich polityki prywatności.</li>
                      <li>Nie odpowiadamy za praktyki serwisów zewnętrznych.</li>
                    </ol>
                  </div>


                  <div>
                    <h3 class="text-base font-semibold mb-2">5. Dodatkowe informacje odnośnie trybu CashBlock</h3>
                    <ol class="list-decimal pl-6 space-y-1 text-sm font-light">
                      <li>CashBlock to tryb, w którym zbierasz walutę vPLN.</li>
                      <li>vPLN to waluta wirtualna wymienialna tylko na vouchery PaySafeCard.</li>
                      <li>Przedmioty specjalne nie wpływają na przyznawanie vPLN.</li>
                      <li>Zasady działania trybu dostępne są na serwerze block4u.pl.</li>
                      <li>vPLN nie można przenosić ani sprzedawać.</li>
                      <li>Wejście na tryb CashBlock oznacza akceptację regulaminu.</li>
                    </ol>
                  </div>
                </section>
              </div>
            </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<style scoped>
  @import"https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap";

  * {
    font-family: Unbounded, sans-serif;
  }
</style>

