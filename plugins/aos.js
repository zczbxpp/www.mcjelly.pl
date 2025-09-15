import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.hook('page:finish', () => {
    AOS.init({
      duration: 200,
      once: true,
      easing: 'ease-out',
      offset: 200
    });
  });
});