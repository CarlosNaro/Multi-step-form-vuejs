<script setup lang="ts">
import { ref, onMounted } from "vue";
import Final from "./Final.vue";
import AlertError from "./AlertError.vue";
import { IPlanSummary, IMenu, IMenuAddOns } from "../models/IModel";
import { getItem } from "../action/localStorage";
import { useRouter } from "vue-router";


const isFinal = ref(false);
const service = getItem("services");
const plan = getItem("Plan") as IMenu;
const route = useRouter();
const isAlertError = ref(false);
const isSummary = ref(false);

const modelPlan = ref<IPlanSummary>({
  name: plan?.name,
  price: plan?.price,
  time: plan?.time,
  label: plan?.time == "mo" ? "Monthly" : "Yearly",
});

const sumServicePrices = service?.reduce(
  (total: number, objeto: IMenuAddOns) => {
    total += objeto.price;
    return total;
  },
  0
);

const total = ref(sumServicePrices + modelPlan.value.price);

const preview = () => {
  route.push("/add");
};

const modelFinal = () => {
  if (total) isFinal.value = true;
  isSummary.value = false;
  localStorage.clear()
  
  return;
};

onMounted(() => {
  if (service == null || plan == null) {
    isAlertError.value = true;
  } else {
    isSummary.value = true;
  }
});
</script>

<template>
  <Final v-if="isFinal" />
  <AlertError v-if="isAlertError" />

  <div
    v-if="isSummary"
    class="flex flex-col justify-between h-screen md:h-full rounded-lg"
  >
    <div class="mt-24 p-8 md:p-0 md:mt-0 z-20 bg-white mx-4 rounded-lg">
      <h1 class="text-xl md:text-3xl font-bold">Finishing up</h1>

      <div class="Encabezado pb-5">
        <span class="text-justify md:text-sm text-slate-400">
          Double-check everything looks OK before confirming.
        </span>
      </div>

      <div class="bg-slate-50 rounded-lg p-4">
        <div class="flex flex-col mb-3">
          <div class="flex justify-between text-[#02295A] font-bold text-sm">
            <span> {{ modelPlan.name }}( {{ modelPlan.label }} )</span>
            <span> ${{ modelPlan.price }}/{{ modelPlan.time }}</span>
          </div>
          <router-link
            to="/select"
            class="text-slate-500 text-xs underline hover:text-indigo-500"
            >Change</router-link
          >
        </div>

        <hr />

        <div
          v-for="(item, index) in service"
          :key="index"
          class="flex justify-between text-slate-500 text-xs mt-3"
        >
          <span>{{ item.title }}</span>
          <span class="text-[#02295A] font-bold">
            +${{ item.price }}/{{ item.time }}</span
          >
        </div>
      </div>
      <div class="flex justify-between p-4">
        <span class="text-slate-500 text-sm mt-3"> Total (per year) </span>
        <span class="text-indigo-500 font-bold medium text-lg">
          +${{ total }}/{{ modelPlan.time }}
        </span>
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
        @click="modelFinal"
        class="flex rounded-md bg-blue-700 px-5 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-950"
      >
        Confirm
      </button>
    </footer>
  </div>
</template>
