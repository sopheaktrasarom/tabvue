<script setup lang="ts">
import { ref } from "vue";
import data from "../data.json";
const datas = ref(data);
const active = ref(0);

/* change tab function */
function activeTab(index: number) {
  active.value = index;
}
</script>
<template>
  <div class="px-[25px] bg-[#1E1E1E] pb-[50px]">
    <div>
      <h1 class="text-white text-center">MPAY Tutorial</h1>
      <p class="text-[#BAAC97]">
        Transactions done anywhere, anytime, across borders. Secured,efficient,
        untracable and unfreezable.
      </p>
    </div>

    <div class="flex justify-evenly tab gap-[5px]">
      <button
        @click="activeTab(index)"
        class="text-white button text-center font-bold px-[24px] py-[8px] text-base rounded-[8px]"
        v-for="(data, index) in datas"
        :class="active === index ? `bg-[#EA792E] ` : `bg-[#1E2428] active`"
      >
        {{ data.header }}
      </button>
    </div>

    <!-- Steps -->
    <div class="step1 grid box mt-[35px]">
      <!-- Step1 -->
      <div
        v-for="(data, index) in datas"
        :class="active === index ? `animate-fadeIn ` : `hidden`"
      >
        <h1 class="step">{{ data.step1 }}</h1>
        <p>{{ data.order1 }}</p>
        <div class="relative">
          <img :src="data.src1" alt="" class="relative" />
          <img
            src="../assets/left_icon.png"
            alt=""
            class="absolute top-[-63px] left-[40px] icon-left"
            :class="[
              data.header === 'Recharge' && `hidden`,
              data.header === 'Buy' && `hidden`,
            ]"
          />
        </div>
      </div>

      <!-- Step2 -->
      <div
        v-for="(data, index) in datas"
        :class="active === index ? `block ` : `hidden`"
      >
        <h1 class="step">{{ data.step2 }}</h1>
        <p>{{ data.order2 }}</p>
        <div class="relative">
          <img :src="data.src2" alt="" class="relative" />
          <img
            src="../assets/left_icon.png"
            alt=""
            class="absolute top-[-23px] left-0 icon-left"
          />
        </div>
      </div>

      <!-- Step3 -->
      <div
        v-for="(data, index) in datas"
        :class="active === index ? `block ` : `hidden`"
      >
        <h1 class="step">{{ data.step3 }}</h1>
        <p>{{ data.order3 }}</p>
        <div class="relative">
          <img :src="data.src3" alt="" class="relative" />
          <img
            src="../assets/left_icon.png"
            alt=""
            class="absolute top-[-23px] left-0 icon-left"
          />
        </div>
      </div>

      <!-- Step4 -->
      <div
        v-for="(data, index) in datas"
        :class="active === index ? `block ` : `hidden`"
      >
        <h1 class="step">{{ data.step4 }}</h1>
        <p>{{ data.order4 }}</p>
        <div class="relative">
          <img :src="data.src4" alt="" class="relative" />
          <img
            src="../assets/left_icon.png"
            alt=""
            class="absolute top-[-23px] left-0 icon-left"
          />
        </div>
      </div>

      <!-- Step5 -->
      <div
        v-for="(data, index) in datas"
        :class="active === index ? `block ` : `hidden`"
      >
        <h1 class="step">{{ data.step5 }}</h1>
        <p>{{ data.order5 }}</p>
        <div class="relative">
          <img :src="data.src5" alt="" class="relative" />
          <img
            src="../assets/left_icon.png"
            alt=""
            class="absolute top-[-23px] left-0 icon-left"
          />
        </div>
      </div>

      <!-- Step6 -->
      <div
        v-for="(data, index) in datas"
        :class="active === index ? `block ` : `hidden`"
      >
        <h1 class="step">{{ data.step6 }}</h1>
        <p>{{ data.order6 }}</p>
        <div class="relative">
          <img :src="data.src6" alt="" class="relative" />
          <img
            src="../assets/left_icon.png"
            alt=""
            class="absolute top-[-23px] left-0 icon-left"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.step {
  color: #ffebcd;
  font-size: 25px;
  font-family: '"Helvetica Neue", Helvetica, Arial';
  font-weight: 800;
}
.button.active {
  border: 1px solid rgba(128, 128, 128, 0.251);
}
button {
  font-family: '"Helvetica Neue", Helvetica, Arial';
}
p {
  color: white;
  font-size: 18px;
  font-weight: 500;
  font-family: '"Helvetica Neue", Helvetica, Arial';
}
img {
  margin-top: 25px;
  margin-inline: auto;
}
.icon-left {
  animation: move 1s ease infinite;
  width: 120px;
}
@keyframes move {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(10px, -10px);
  }

  100% {
    transform: translate(0, 0);
  }
}
/* @media only screen and (max-width: 320px) {
  .button {
    padding-inline: 10px;
  }
  .tab {
    gap: 5px;
  }
}
@media only screen and (max-width: 420px) {
  .button {
    padding-inline: 20px;
  }
  .tab {
    gap: 0px;
  }
} */
.box {
  gap: 35px;
}
</style>
