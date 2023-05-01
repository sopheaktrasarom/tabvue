<script setup lang="ts">
import { ref } from "vue";
import data from "../data.json";
const datas = ref(data);
const active = ref(0);
const showMenu = ref(false);
/* change tab function */
function activeTab(index: number) {
  active.value = index;
}
function toggleMenu() {
  showMenu.value = !showMenu.value;
}
</script>
<template>
  <div class="px-[25px] pt-[35px] tutorial pb-[50px] w-full relative">
    <!-- <header class="flex justify-between w-full items-center relative">
      <div class="flex items-center justify-center">
        <img
          src="/logo.png"
          alt=""
          class="w-[50px] translate-y-[-11px] inline-block"
        />
      </div>

      <div
        class="menu w-[30px] flex flex-col gap-[5px] cursor-pointer"
        @click="toggleMenu"
      >
        <div class="menu1 bg-white w-full h-[3px] rounded-[5px]"></div>
        <div class="menu2 w-full bg-white h-[3px] rounded-[5px]"></div>
        <div class="menu3 w-[70%] ml-auto bg-white h-[3px] rounded-[5px]"></div>
      </div>
    </header> -->
    <div class="absolute right-[25px]">
      <div
        v-if="showMenu"
        class="bg-white w-fit ml-auto grid place-items-center translate-y-[-30px] relative p-[50px]"
      >
        <p>Tutorial</p>
        <div
          class="bg-white right-[10px] w-[30px] h-[30px] top-[-5px] rotate-[45deg] absolute"
        ></div>
      </div>
    </div>
    <div class="mb-[40px]">
      <h1 class="text-white text-center font-HevHelvetica text-[25px]">
        MPAY Tutorial
      </h1>
      <p class="text-[#FFEBCD] font-HevHelvetica px-[35px] text-[14px]">
        Transactions done anywhere, anytime, across borders. Secured,efficient,
        untracable and unfreezable.
      </p>
    </div>

    <div class="flex justify-evenly tab gap-[5px]">
      <button
        @click="activeTab(index)"
        class="text-white button text-center font-bold px-[24px] py-[8px] text-[14px] rounded-[8px]"
        v-for="(data, index) in datas"
        :class="active === index ? `bg-[#EA792E] ` : `bg-[#1E2428] active`"
      >
        {{ data.header }}
      </button>
    </div>

    <!-- Steps -->
    <div class="step1 grid box mt-[35px] gap-[60px]">
      <!-- Step1 -->
      <div
        v-for="(data, index) in datas"
        :class="active === index ? `animate-fadeIn ` : `hidden`"
      >
        <h1 class="step">{{ data.step1 }}</h1>
        <p class="order">{{ data.order1 }}</p>
        <div class="relative image_container">
          <img :src="data.src1" alt="" class="relative phone" />
          <img
            src="../assets/left_icon.png"
            alt=""
            class="absolute icon-left"
            :class="[
              data.header === 'Verify' &&
                `top-[-63px] left-[40px] verify_step1`,
              data.header === 'Buy' && `top-[80px] left-[70px] buy_step1`,
              data.header === 'Sell' && `top-[80px] right-0 sell_step1`,
              data.header === 'Recharge' &&
                `top-[120px] right-[50px] recharge_step1`,
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
        <p class="order">{{ data.order2 }}</p>
        <div class="relative image_container">
          <img :src="data.src2" alt="" class="relative phone" />
          <img
            src="../assets/left_icon.png"
            alt=""
            class="absolute icon-left"
            :class="[
              data.header === 'Verify' &&
                `top-[150px] left-[80px] verify_step2`,
              data.header === 'Buy' &&
                `top-[160px] left-0  right-[-200px] buy_step2`,
              data.header === 'Sell' && `top-[20px] left-[120px] sell_step2`,
              data.header === 'Recharge' && `top-0 right-[50px] recharge_step2`,
            ]"
          />
        </div>
      </div>

      <!-- Step3 -->
      <div
        v-for="(data, index) in datas"
        :class="active === index ? `block ` : `hidden`"
      >
        <h1 class="step">{{ data.step3 }}</h1>
        <p class="order">{{ data.order3 }}</p>
        <div class="relative image_container">
          <img :src="data.src3" alt="" class="relative phone" />
          <img
            src="../assets/left_icon.png"
            alt=""
            class="absolute icon-left top-0"
            :class="[
              data.header === 'Verify' &&
                ` verify_step3 top-[210px] left-[120px]`,
              data.header === 'Buy' && `top-[120px] left-[80px] buy_step3`,
              data.header === 'Sell' && `top-[0px] right-[50px] sell_step3`,
              data.header === 'Recharge' &&
                `top-[90px] right-[50px] recharge_step3 `,
            ]"
          />
        </div>
      </div>

      <!-- Step4 -->
      <div
        v-for="(data, index) in datas"
        :class="active === index ? `block ` : `hidden`"
      >
        <h1 class="step">{{ data.step4 }}</h1>
        <p class="order">{{ data.order4 }}</p>
        <div class="relative image_container">
          <img :src="data.src4" alt="" class="relative phone" />
          <img
            src="../assets/left_icon.png"
            alt=""
            class="absolute icon-left"
            :class="[
              data.header === 'Verify' &&
                `bottom-[140px]  right-[80px] verify_step4`,
              data.header === 'Buy' && `top-[140px] left-[100px] buy_step4`,

              data.header === 'Sell' && `top-0 right-[50px] sell_step4`,
              data.header === 'Recharge' &&
                `top-[100px] right-[50px] recharge_step4`,
            ]"
          />
        </div>
      </div>

      <!-- Step5 -->
      <div
        v-for="(data, index) in datas"
        :class="active === index ? `block ` : `hidden`"
      >
        <h1 class="step">{{ data.step5 }}</h1>
        <p class="order">{{ data.order5 }}</p>
        <div class="relative image_container">
          <img :src="data.src5" alt="" class="relative phone" />
          <img
            src="../assets/left_icon.png"
            alt=""
            class="absolute icon-left"
            :class="[
              data.header === 'Verify' && `hidden`,
              data.header === 'Buy' && ` top-[200px] left-[180px] buy_step5`,

              data.header === 'Sell' && `hidden`,
              data.header === 'Recharge' &&
                `top-[-4px] right-[65px] recharge_step5`,
            ]"
          />
        </div>
      </div>

      <!-- Step6 -->
      <div
        v-for="(data, index) in datas"
        :class="active === index ? `block ` : `hidden`"
      >
        <h1 class="step">{{ data.step6 }}</h1>
        <p class="order">{{ data.order6 }}</p>
        <div class="relative image_container">
          <img :src="data.src6" alt="" class="relative phone" />
          <img
            src="../assets/left_icon.png"
            alt=""
            class="absolute top-[-23px] left-0 icon-left"
            :class="[
              data.header === 'Verify' && `hidden`,
              data.header === 'Buy' && `top-[130px] left-[120px] buy_step6`,

              data.header === 'Recharge' && `hidden recharge_step6`,
              data.header === 'Sell' && `hidden `,
            ]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tutorial {
  background-image: url("../assets/phone_bg.png");
  background-size: 100%;
}
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
.order {
  color: white;
  font-size: 17px;
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
@media (max-width: 320px) {
  .order {
    font-size: 15px;
  }
  .button {
    font-size: 12px;
    padding-inline: 18px;
  }
  .verify_step1.icon-left {
    top: -70px;
    left: 25px;
  }
  .verify_step2.icon-left {
    top: 100px;
  }
  .verify_step3.icon-left {
    top: 150px;
    left: 100px;
  }
  .verify_step4.icon-left {
    top: 160px;
    left: 100px;
  }

  .buy_step1.icon-left {
    top: 45px;
    left: 60px;
  }
  .buy_step2.icon-left {
    top: 110px;
    right: -170px;
    left: 0;
  }
  .buy_step3.icon-left {
    top: 80px;

    left: 50px;
  }
  .buy_step4.icon-left {
    top: 80px;

    left: 80px;
  }
  .buy_step5.icon-left {
    top: 130px;

    left: 120px;
  }
  .buy_step6.icon-left {
    top: 80px;

    left: 100px;
  }
  .sell_step1.icon-left {
    top: 50px;
    left: 100px;
  }
  .sell_step2.icon-left {
    top: -3px;
    left: 90px;
  }
  .sell_step3.icon-left {
    top: -30px;
    right: 30px;
  }
  .sell_step4.icon-left {
    top: -30px;
    right: 30px;
  }
  .recharge_step2.icon-left {
    top: -30px;
  }
  .recharge_step3.icon-left {
    top: 50px;
    left: 120px;
  }
  .recharge_step4.icon-left {
    top: 50px;
    left: 120px;
  }
  .recharge_step5.icon-left {
    top: -30px;
    left: 120px;
  }
}

@media (min-width: 389px) {
  .verify_step2.icon-left {
    top: 170px;
  }
  .verify_step3.icon-left {
    top: 240px;
    left: 150px;
  }
  .verify_step4.icon-left {
    top: 250px;
    left: 120px;
  }
  .buy_step1.icon-left {
    top: 100px;
    left: 80px;
  }
  .buy_step2.icon-left {
    top: 180px;
    left: 0px;
    right: -250px;
  }
  .buy_step3.icon-left {
    top: 140px;
    left: 80px;
  }
  .buy_step4.icon-left {
    top: 160px;
    left: 120px;
  }
  .buy_step5.icon-left {
    top: 220px;
    left: 180px;
  }
  .buy_step6.icon-left {
    top: 150px;
    left: 150px;
  }
  .sell_step1.icon-left {
    top: 100px;
    left: 180px;
  }
  .sell_step2.icon-left {
    top: 30px;
    left: 120px;
  }
  .recharge_step1.icon-left {
    top: 200px;
  }
  .recharge_step3.icon-left {
    top: 120px;
  }
  .recharge_step4.icon-left {
    top: 120px;
  }
}
@media (min-width: 424px) {
  .verify_step2.icon-left {
    top: 210px;
  }
  .verify_step3.icon-left {
    top: 280px;
  }
  .verify_step4.icon-left {
    top: 300px;
    left: 120px;
  }
  .buy_step3.icon-left {
    top: 180px;

    left: 80px;
  }
  .buy_step4.icon-left {
    top: 180px;
  }
  .buy_step5.icon-left {
    top: 250px;
  }
  .buy_step6.icon-left {
    top: 180px;
  }
  .sell_step1.icon-left {
    top: 120px;
  }
  .sell_step2.icon-left {
    top: 50px;
    left: 140px;
  }
}
.phone {
  width: 100%;
}
.image_container {
  padding-inline: 2rem;
}
</style>
