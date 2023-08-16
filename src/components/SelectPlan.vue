<script setup lang="ts">
import { ref, watch, computed, reactive, onMounted, onUpdated } from "vue";
import Toggle from "./Toggle.vue";

import useStorPlan from "../store/planStor.ts";

const isToggle = ref(false);
const time = reactive("");

const { getPlan, UsePlan } = useStorPlan();
const listPlan = computed(() => getPlan());

onMounted(() => {
  UsePlan(isToggle.value);
});

const isData = (item: any) => {
  console.log("datos recogidos ", item);
};

watch(isToggle, (nuevoValor, viejoValor) => {
  // console.log(`La variable cambió de ${viejoValor} a ${nuevoValor}`);
  UsePlan(isToggle.value);
  // Aquí puedes ejecutar cualquier otra lógica que desees realizar cuando la variable cambia.
});
</script>

<template>
  <div class="flex flex-col justify-between h-full md:bg-white bg-slate-100">
    <div
      class="mx-5 md:mx-0 bg-white rounded-lg -my-16 md:my-0 p-7 text-justify"
    >
      <h1 class="pb-3 text-xl md:text-2xl font-bold">Select your plan</h1>

      <div class="Encabezado pb-5">
        <span class="md:text-sm">
          You have the option of monthly or yearly billing.
        </span>
      </div>

      <div
        v-for="(item, index) in listPlan"
        :key="index"
        @click="isData(item)"
        class="flex p-4 mb-2 gap-4 hover:border-indigo-800 hover:bg-slate-50 border-2 rounded-lg shadow-sm"
      >
        <!-- <img src="../assets/images/icon-arcade.svg" alt="" /> -->
        <img :src="item.url" alt="" />
        <div class="tex">
          <p class="font-bold text-indigo-800">{{ item.name }}</p>
          <p class="text-sm text-slate-400">${{ item.price }}/mo</p>
          <p v-if="isToggle" class="text-sm text-indigo-900 font-semibold">
            {{ item.label }}
          </p>
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

    <footer
      class="footer-button flex justify-end p-4 md:py-3 md:px-7 p footer-button bg-white"
    >
      <button
        disabled
        class="flex text-sm rounded-md bg-indigo-950 px-5 py-2 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-950"
      >
        Next Step
      </button>
    </footer>
  </div>
</template>
