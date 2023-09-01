<script setup lang="ts">
import { ref, watch, computed, reactive, onMounted, onUpdated } from "vue";
import Toggle from "./Toggle.vue";
import useStorPlan from "../store/planStor";
import { isToggle } from "../store/ToggleStor"

// const isToggle  = ref(false)

const { getPlan, UsePlan } = useStorPlan();
const listPlan = computed(() => getPlan());

onMounted(() => {
  UsePlan();
});

const isData = (item: any) => {
  console.log("datos recogidos ", item);
};

watch(isToggle, (nuevoValor, viejoValor) => {
  UsePlan(isToggle.value);
});
</script>

<template>
  <div class="flex flex-col justify-between h-full md:bg-white">
    <div class="bg-white rounded-lg text-justify">
      <h1 class="text-xl md:text-3xl font-bold">Personal info</h1>

      <div class="Encabezado pb-5">
        <span class="text-justify text-sm text-slate-400">
          Please provide your name, email addres, and phone number.
        </span>
      </div>

<<<<<<< HEAD
      <div class=" flex    gap-3 justify-between  " >
        <div
          v-for="(item, index) in listPlan"
          :key="index"
          @click="isData(item)"
          class="xs:flex md:flex-1 md:flex-col  p-4 mb-2 gap-4 hover:border-indigo-800 hover:bg-slate-50 border-2 rounded-lg shadow-sm"
        >
         
          <img  class="  md:w-7 " :src="item.url" alt="" />
          <div class=" pt-8  ">
            <p class="  text-indigo-800 font-bold text-sm ">{{ item.name }}</p>
            <p class="  text-slate-400 font-mono text-xs ">${{ item.price }}/{{item.time}}</p>
            <p v-if="isToggle" class=" text-xs text-indigo-900 font-semibold md:pt-1 ">
              {{ item.label }}
            </p>
          </div>
=======
      <div
        v-for="(item, index) in listPlan"
        :key="index"
        @click="isData(item)"
        class="flex p-4 mb-2 gap-4 hover:border-indigo-800 hover:bg-slate-50 border-2 rounded-lg shadow-sm"
      >
        <!-- <img src="../assets/images/icon-arcade.svg" alt="" /> -->
        <img :src="item?.url" alt="" />
        <div class="tex">
          <p class="font-bold text-indigo-800">{{ item?.name }}</p>
          <p class="text-sm text-slate-400">$ {{ item?.price }}/{{item?.time}}</p>
          <p v-if="isToggle" class="text-sm text-indigo-900 font-semibold">
            {{ item?.label }}
          </p>
>>>>>>> 3b0fff0cdf899eb6fc2cc24bb807ee9bfa0938df
        </div>
      </div>

      <!-- Final -->
      <div
        class="flex items-center p-3 mt-3 justify-evenly bg-slate-100 rounded-lg"
      >
        <p
          :class="{
            ' font-semibold text-indigo-900': !isToggle,
            ' text-gray-400  ': isToggle,
          }"
        >
          Monthly
        </p>
        <Toggle v-model="isToggle" />
        <p
          :class="{
            ' font-semibold  text-indigo-500 ': isToggle,
            ' text-gray-400 ': !isToggle,
          }"
        >
          Yearly
        </p>
      </div>
    </div>

    <footer class="footer-button flex justify-between  py-2  bg-white">
      <button
       
        class="flex rounded-md  py-2 text-md text-slate-500  hover:text-indigo-950 font-semibold shadow-sm   "
      >
        Go Back
      </button>

      <button
        class="flex rounded-md bg-[#02295A] px-5 py-2 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-950"
      >
        Next Step
      </button>
    </footer>
  </div>
</template>
