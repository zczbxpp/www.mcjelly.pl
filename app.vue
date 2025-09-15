<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

onMounted(() => {
  document.addEventListener('visibilitychange', handleVisibilityChange);
});

onBeforeUnmount(() => {
  document.removeEventListener('visibilitychange', handleVisibilityChange);
});

const handleVisibilityChange = () => {
  if (document.visibilityState === 'hidden') {
    document.title = 'Już nas opuszczasz? | mcjelly';
  } else {
    const pageTitle = route.name === 'regulamin' ? 'Regulamin' : 'Strona Główna';
    document.title = `${pageTitle} | mcjelly`;
  }
};
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
  </div>
  <NuxtPage />
</template>

<style>
body {
  background-color: #F3F3F5;
}
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #f5993d;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #f5993d; 
}
</style>
