<script setup>
import { ref, computed, onMounted } from "vue";
import { usePlayerStore } from "@stores/playerStore";
import { useVariantsStore } from "@stores/variantStore";

const playerStore = usePlayerStore();
const variantsStore = useVariantsStore();
const nickname = ref("");
const sliderValue = ref(1);

const availableValues = [
  ...Array.from({ length: 50 }, (_, i) => i + 1), 
  ...Array.from({ length: 10 }, (_, i) => (i + 1) * 50 + 50), 
];

onMounted(async () => {
  await playerStore.fetchRichestPlayer();
  await variantsStore.fetchVariants();
});


const avatarUrl = computed(() =>
  nickname.value ? `https://mineskin.eu/headhelm/${nickname.value}/100.png` : "https://mineskin.eu/headhelm/Steve/100.png"
);


const updateSlider = (event) => {
  const rawValue = event.target.value;
  const closestValue = availableValues.reduce((prev, curr) =>
    Math.abs(curr - rawValue) < Math.abs(prev - rawValue) ? curr : prev
  );
  sliderValue.value = closestValue;
};


const selectedVariant = computed(() => {
  return variantsStore.variants.find(v => parseInt(v.name) === sliderValue.value);
});

const submitForm = async (event) => {
  event.preventDefault();
  console.log(selectedVariant.value);
  if (!selectedVariant.value) {
    alert("Nie znaleziono wariantu dla wybranej wartości!");
    return;
  }

  const response = await fetch("https://api64.ipify.org?format=json");
  const data = await response.json();


  console.log(data.ip);
  const requestData = {
    variantId: selectedVariant.value.id,
    nick: nickname.value,
    methodParameter: `${nickname.value}@gmail.com`,
    method: "paybylinkTransfer",
    additional: null,
    clientIp: data.ip,
    discountCodeId: null,
  };

  try { 
  const res = await fetch("/api/payment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestData),
  });

  if (!res.ok) throw new Error("Błąd serwera!");

  const resData = await res.json();
  
  if (resData.success && resData.data?.redirectUrl) {
    window.location.href = resData.data.redirectUrl;
  } else {
    console.error("Nie udało się uzyskać linku płatności!");
    alert("Nie udało się uzyskać linku płatności!");
  }
} catch (error) {
  console.error("Błąd:", error);
  alert("Wystąpił błąd podczas inicjalizacji płatności.");
}

};
</script>



<template>
  <div class="w-full max-w-screen-xl mx-auto px-4">

    <div class="flex mt-5 ">

      <div class="flex flex-col w-[17rem] mr-5 ">
        <div data-aos="fade-right" class="infos h-[6rem] w-[100%] rounded-2xl flex flex-col items-center">
            <div class="w-[8rem] h-[8rem] bg-white rounded-full mt-[3rem] items-center justify-center flex">
              <img 
                :src="'https://minotar.net/cube/' + 
                      (playerStore.richestPlayer.nick === 'Brak danych' ? 'MHF_Steve' : playerStore.richestPlayer.nick) 
                      + '/70.png'" 
              />
            </div>

          <div class="mt-[1rem] text-white text-xl font-bold">Top kupujący</div>

          <div class="text-white text-l">{{ playerStore.richestPlayer.nick }}</div>
          
          <div class="p-2 bg-white rounded-xl text-2xl text-orange-400 mt-[2rem]">
            {{ playerStore.richestPlayer.amount }} zł
          </div>

        </div>
      </div>

      <div data-aos="zoom-in">
        <div class="h-auto w-[101.5%] flex gap-[10px] flex-col bg-gray-200 p-[3.7rem] rounded-xl">

          <div class="text-2xl font-bold text-gray-600" id="shop">Doładuj portfel</div>

          <form @submit="submitForm">
        
            <div class="flex flex-row">
              <div class="input_avatar">
                <input v-model="nickname" type="text" placeholder="Podaj swój nick" required />
                <img :src="avatarUrl" alt="avatar" class="avatar_input" />
              </div>
              <button type="submit" class="flex items-center justify-center ml-[15px]">
                <div class="dot h-[50px] w-[50px] rounded-xl bg-[#f5993d]"></div>
              </button>
            </div>

            <div class="form_slider-info">
              <div class="text-block-3">Wybierz ilość:</div>
              <div class="slider_count">
                Wybrano: <span class="text-block-3">{{ sliderValue }} vPLN</span> (<span>{{ sliderValue.toFixed(2) }}</span> zł)
              </div>
            </div>

            <div class="slider-container">
              <input type="range" min="1" max="500" step="1" :value="sliderValue" @input="updateSlider" class="slider" />
            </div>

            <div class="checkbox-container">
              <input type="checkbox" id="form_checkbox" class="form_checkbox " name="terms" required="">
              <label for="form_checkbox" class="custom-label">Akceptuję <a target="_blank" href="regulamin.pdf"><u>regulamin</u></a> oraz wyrażam
                zgodę na spełnienie świadczenia przed upływem terminu na odstąpienie od umowy
                </label>
            </div>

          </form>

        </div>
      </div>

      
    </div>
  </div>
</template>






<style scoped>
    input:-webkit-autofill {
      background-color: transparent !important;

      transition: background-color 5000s ease-in-out 0s;
    }
    .infos {
      min-height: 365px;
      border-radius: 15px;
      background: linear-gradient(180deg, #f5993d, rgba(182, 116, 33, .75));
    }



    .dot{
      position: relative;
      cursor: pointer;
      transition: 0.2s;
      background-image: url("images/send.svg");

      background-position: center;
      background-repeat: no-repeat;
      background-size: 60%;
    }
    .dot:hover{
      transform: scale(1.1);
    }
    .dot::before {
      content: "";
      position: absolute;
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 10px;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      background-color: #f5993d62;
      transform: translate(-50%, -50%);
    }
    .input_avatar {
        position: relative;
        width: 25rem;
    }
    
    .input_avatar input {
        height: 64px;
        padding-left: 86px;
        width: 100%;
        outline: none;
        background: rgb(212, 212, 212);
        border-radius: 10px;
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;
    }

    .avatar_input {
        position: absolute;
        left: 20px;
        top: 14px;
        width: 40px;
    }

    img {
        max-width: 100%;
        vertical-align: middle;
        display: inline-block;
    }

    .slider-container {
        position: relative;
        width: 100%;
        height: 12px;
        background: rgb(212, 212, 212);
        margin: 20px 0px;
        border-radius: 50px;
    }
    .slider {
        appearance: none;
        width: 100%;
        height: 12px;
        opacity: 1;
        z-index: 2;
        position: absolute;
        top: 0px;
        left: 0px;
        border-radius: 100px;
        background: transparent;
        outline: none;
        margin: 0px 0px -40px;
    }

    .slider-background {
        position: absolute;
        top: 0px;
        left: 0px;
        height: 12px;
        z-index: 1;
        border-radius: 50px;
        background: rgb(98, 204, 109);
    }
    .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 30px;
      height: 30px;
      background: #f5993d;
      border-radius: 17px;
      border: 4px solid rgb(255, 255, 255);
      box-shadow: 0px 4px 4px 0px #00000012;

      cursor: pointer;
      border-radius: 100px!important;
      position: relative;
      z-index: 3;
      border-radius: 50%;
    }

    .slider::-moz-range-thumb {
      width: 20px;
      height: 20px;
      background: #2D8E2B;
      box-shadow: 0px 4px 4px 0px #00000012;

      cursor: pointer;
      border-radius: 100px;
      position: relative;
      z-index: 3;
      border-radius: 5px;
    }

    .slider-background {
      position: absolute;
      top: 0px;
      left: 0;
      border-radius: 50px;
      height: 12px;
      background: #62CC6D;
      z-index: 1;
    }
    .form_slider-info {
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
        display: flex;
        margin-top: 1rem;
    }

    .text-block-3 {
      color: #f5993d;
      font-weight: 600;
    }

    .text-span-2 {
      color: #f5993d;
    }

    .checkbox-container {
      width: 40%;

      display: flex;

      cursor: pointer;
    }
    
    .custom-label::before {
        content: "";
        position: absolute;
        left: 0px;
        top: 20px;
        transform: translateY(-50%);
        width: 25px;
        height: 25px;
        background-color: rgb(255, 255, 255);
        border-width: 2px;
        border-style: solid;
        border-color: rgb(167, 167, 167);
        border-image: initial;
        border-radius: 50%;
        transition: background-color 0.3s, border-color 0.3s;
    }
        .custom-label::after {
        content: "";
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url("images/checkicon.svg");
        background-size: contain;
        background-repeat: no-repeat;
        top: 15.6px;
        left: 8px;
        transform: scale(0);
        width: 12px;
        height: 12px;
        transition: transform 0.3s;
    }
    .form_checkbox {
      display: none;
    }
    .custom-label {
      position: relative;
      display: inline-block;
      padding-left: 40px;
      font-weight: 400;
      color: #4d4d4d;
      font-size: 11px;
      align-items: center;
      cursor: pointer;
      user-select: none;
    }

    .custom-label u{
      color: black;
    }

    .custom-label::before {
      content: "";
      position: absolute;
      left: 0;
      top: 20px;
      transform: translateY(-50%);
      width: 25px;
      height: 25px;
      border: 2px solid #a7a7a7;
      border-radius: 50%;
      background-color: #fff;
      transition: background-color 0.3s, border-color 0.3s;
    }

    .custom-label::after {
      content: "";
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url('images/checkicon.svg');
      background-size: contain;
      background-repeat: no-repeat;
      top: 15.6px;
      left: 8px;
      transform: scale(0);
      width: 12px;
      height: 12px;
      transition: transform 0.3s;
    }

    .form_checkbox:checked + .custom-label::before {
      background-color:#f5993d;
      border-color: #f5993d;
    }

    .form_checkbox:checked + .custom-label::after {
      transform:  scale(1);
    }
</style>
