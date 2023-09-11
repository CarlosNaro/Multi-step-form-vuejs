<script setup lang="ts">
import {computed, onMounted, ref } from "vue";
import useStoreAddOns from "../store/addOnsStor";
import { setItem } from "../action/localStorage";

const { getAddOns, setAddOns } = useStoreAddOns();
const listAddOns = computed(() => getAddOns());
const item = ref()

onMounted(() => {
  setAddOns();
});

const sendData = (valor:any)=>{
  
  const datosJson = JSON.stringify(valor)
  setItem("addOn", Object(datosJson))
  
  
console.log("clicks")
}

</script>

<template>
  <div class="flex flex-col justify-between  h-screen md:h-full     rounded-lg   ">
    <div class=" mt-24 p-8 md:p-0 md:mt-0 z-20 bg-white  mx-4  rounded-lg ">
      <h1 class="text-xl md:text-3xl font-bold">Personal info</h1>

      <div class="Encabezado pb-5">
        <span class="text-justify md:text-sm text-slate-400">
          Add-ons held enhance your gaming experience
        </span>
      </div>

      <div
        v-for="(item, index ) in listAddOns " :key="index"
        class="flex items-center  justify-between mb-4 p-4  hover:border-indigo-800 hover:bg-slate-50 border-2 rounded-lg shadow-sm"
      >
        <div class="flex gap-4 ">
          <input type="checkbox"  @click="sendData(item)"    />
          <div class="flex flex-col ">
            <span class="font-bold text-xs md:text-sm  text-[#02295A] "> {{ item.title}} </span>
            <span class=" sub-Title  ">{{ item.subTitle }}</span>
          </div>
        </div>
        <span class="text-xs font-bold text-indigo-500 "> +${{item.price}}/{{item.time}} </span>
      </div>
    </div>

    <footer class="footer-button flex justify-between p-4  md:py-2  bg-white">
      <button
        class="flex rounded-md py-2 text-md text-slate-500 hover:text-indigo-950 font-semibold shadow-sm"
      >
        Go Back
      </button>

      <button
        class="flex rounded-md bg-[#02295A] px-5 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-950"
      >
        Next Step
      </button>
    </footer>
  </div>
</template>

<style scoped>
input[type="checkbox"] {
  transform: scale(1.5);
}

.sub-Title{
  font-size: xx-small;
}

</style>
