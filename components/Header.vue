<template>
  <div class="w-full max-w-screen-xl mx-auto px-4">

    <section 
      class="relative flex flex-col md:flex-row items-center justify-between 
             md:h-[594px] bg-cover bg-center rounded-xl mt-3 p-6 md:p-0"
      style="background-image: url('/images/header2.jpg')"
    >
      <div class="absolute inset-0 bg-[#f5993d] opacity-50 rounded-xl z-10"></div>
      
      <div class="relative z-20 w-full md:w-1/2 md:pl-24 md:pt-40 text-center md:text-left">
        <h1 class="text-4xl md:text-7xl font-bold text-white">
          Twoja sieć serwerów
        </h1>
        <div class="flex items-center bg-[#232323] rounded-2xl mt-12 md:mt-24 py-4 px-6 justify-center md:justify-start">
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="23" cy="23" r="23" fill="#90E472" fill-opacity="0.08" />
            <circle cx="23" cy="23" r="13.48" fill="#90E472" fill-opacity="0.18" />
            <circle cx="22.81" cy="23.52" r="5.55" fill="#90E472" />
          </svg>
          <div class="ml-6">
            <p class="text-white">mcjelly.pl</p>
            <p class="text-xs text-gray-400">
              Na serwerze gra {{ playersOnline }} osób
            </p>
          </div>
        </div>
      </div>


      <div class="relative z-20 w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <img 
          class="h-64 md:h-[30rem] animate-[rotateImage_5s_ease-in-out_infinite]" 
          src="/images/render-www.png" 
          alt="Hero Image" 
        />
      </div>
    </section>

    <section class="mt-5 relative h-[166px] overflow-hidden">
      <div class="flex gap-2 overflow-x-scroll md:pr-24">
        <div 
          v-for="(buyer, index) in lastBuyersStore.lastBuyers" 
          :key="buyer.transactionId"
          class="min-w-[166px] h-[166px] bg-gray-200 rounded-xl flex flex-col justify-center items-center gap-2 shrink-0"
          :class="{'mr-[-80px]': index === lastBuyersStore.lastBuyers.length - 1}"
        >
          <p class="text-xs text-gray-400">Zakupił usługę</p>
          <img :src="`https://minotar.net/avatar/${buyer.nick}/70.png`" class="rounded-md" alt="Avatar" />
          <p class="text-sm">{{ buyer.nick }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useLastBuyersStore } from '@/stores/playerStore';

const playersOnline = ref('Ładowanie...');
const lastBuyersStore = useLastBuyersStore();

onMounted(async () => {
  try {
    const res = await fetch('https://api.mcsrvstat.us/3/mcjelly.pl').then(r => r.json());
    playersOnline.value = res?.error ? 'OFFLINE' : res.players.online;
  } catch (error) {
    playersOnline.value = '0';
  }
  lastBuyersStore.fetchLastBuyers();
});
</script>
