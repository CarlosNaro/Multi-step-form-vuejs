<script setup lang="ts">
import { ref, watch, computed, onMounted } from "vue";
import Toggle from "./Toggle.vue";
import useStorPlan from "../store/planStor";
import { isToggle } from "../store/ToggleStor";
import { setItem } from "../action/localStorage";
import { useRouter } from "vue-router";

const { getPlan, UsePlan } = useStorPlan();
const listPlan = computed(() => getPlan());
const selectedPlan = ref();
const route = useRouter();

onMounted(() => {
  UsePlan();
});

const isData = (item: any) => {
  selectedPlan.value = item;
};
const sendData = () => {
  if (!selectedPlan.value) {
    alert("select Plan ");
    return;
  }
  setItem("Plan", selectedPlan.value);
  route.push("/add");
};

const preview = () => {
  route.push("/");
};

watch(isToggle, () => {
  UsePlan();
});
</script>

<template>
  <div class="flex flex-col justify-between h-screen md:h-full rounded-lg">
    <div class="mt-24 p-8 md:p-0 md:mt-0 z-20 bg-white mx-4 rounded-lg">
      <h1 class="text-xl md:text-3xl font-bold">Select your Plan</h1>

      <div class="Encabezado pb-5">
        <span class="text-justify md:text-sm text-slate-400">
          You have the option of monthly or yearly billing
        </span>
      </div>

      <div class="md:flex md:gap-4">
        <div
          v-for="(item, index) in listPlan"
          :key="index"
          @click="isData(item)"
          class="flex p-4 mb-2 gap-4 md:flex-1 md:flex-col hover:border-indigo-800 hover:bg-slate-100 border-2 rounded-lg shadow-sm"
          :class="{ 'border-indigo-800 bg-slate-100 ': item == selectedPlan }"
        >
          <img class="md:w-4/12" :src="item.url" alt="" />
          <div class="md:mt-5">
            <p class="font-bold text-indigo-800 text-sm">{{ item?.name }}</p>
            <p class="text-sm md:text-xs text-slate-400">
              $ {{ item?.price }}/{{ item?.time }}
            </p>
            <p
              v-if="isToggle"
              class="text-xs text-indigo-900 font-semibold md:pt-1"
            >
              {{ item?.label }}
            </p>
          </div>
        </div>
      </div>

      <!-- Final -->
      <div
        class="flex items-center p-3 mt-3 justify-evenly bg-slate-100 rounded-lg"
      >
        <p
          :class="{
            ' font-medium text-indigo-900': !isToggle,
            ' text-gray-400  ': isToggle,
          }"
        >
          Monthly
        </p>
        <Toggle v-model="isToggle" />
        <p
          :class="{
            ' font-medium  text-indigo-900 ': isToggle,
            ' text-gray-400 ': !isToggle,
          }"
        >
          Yearly
        </p>
      </div>
    </div>

    <footer class="footer-button flex justify-between p-4 md:py-2 bg-white">
      <button
        @click="preview"
        class="flex rounded-md py-2 text-md text-slate-500 hover:text-[#02295A] font-semibold hover:font-bold cursor-pointer shadow-sm"
      >
        Go Back
      </button>

      <button
        @click="sendData"
        class="flex rounded-md bg-[#02295A] px-5 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-950"
      >
        Next Step
      </button>
    </footer>
  </div>
</template>
