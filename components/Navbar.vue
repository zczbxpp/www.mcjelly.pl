<template>
  <header class="w-full mx-auto px-4">
    <div class="flex justify-between items-center h-[6rem] mt-2">
      <a href="/" class="flex-shrink-0">
        <img 
          class="h-[80px] md:h-[120px] transition-transform duration-300 cursor-pointer hover:rotate-[15deg]" 
          src="/images/logo-www.png" 
          alt="Logo" 
        />
      </a>

      <!-- desktop -->
      <nav class="hidden md:flex gap-8 items-center">
        <a href="/" class="text-black py-2 px-2 hover:text-[#f5993d] transition duration-300">Strona główna</a>
        <a href="/#shop" class="text-black py-2 px-4 hover:text-[#f5993d] transition duration-300">Sklep Serwera</a>
        <a href="/regulamin" class="text-black py-2 px-4 hover:text-[#f5993d] transition duration-300">Regulamin</a>
        <a href="https://dc.mcjelly.pl" class="text-black py-2 px-4 hover:text-[#f5993d] transition duration-300">Discord</a>
      </nav>

      <!-- mobile -->
      <button 
        class="md:hidden text-3xl focus:outline-none"
        @click="isOpen = !isOpen"
      >
        ☰
      </button>
    </div>

    <!-- mobile -->
    <transition name="fade">
      <nav 
        v-if="isOpen" 
        class="md:hidden flex flex-col gap-4 mt-4 bg-gray-100 rounded-lg shadow-lg p-4"
      >
        <a href="/" class="block text-black py-2 px-4 hover:text-[#f5993d] transition duration-300">Strona główna</a>
        <a href="/#shop" class="block text-black py-2 px-4 hover:text-[#f5993d] transition duration-300">Sklep Serwera</a>
        <a href="/regulamin" class="block text-black py-2 px-4 hover:text-[#f5993d] transition duration-300">Regulamin</a>
        <a href="https://dc.mcjelly.pl" class="block text-black py-2 px-4 hover:text-[#f5993d] transition duration-300">Discord</a>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
