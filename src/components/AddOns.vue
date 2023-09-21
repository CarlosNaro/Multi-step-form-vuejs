<script setup lang="ts">
import { computed, onMounted } from "vue";
import useStoreAddOns from "../store/addOnsStor";
import { setItem } from "../action/localStorage";
import { IMenuAddOns } from "../models/IModel";
import { useRouter } from "vue-router";

const { getAddOns, setAddOns } = useStoreAddOns();
const listAddOns = computed(() => getAddOns());
const selectedItems: Array<Object> = [];
const route = useRouter();

onMounted(() => {
  setAddOns();
});

const selectData = (item: IMenuAddOns) => {
  if (!item.checked) {
    // Si el checkbox se desmarca, elimina el elemento del array selectedItems
    const index = selectedItems.findIndex(
      (selectedItem) => selectedItem === item
    );
    if (index !== -1) selectedItems.splice(index, 1);
    return;
  }
  selectedItems.push(item);
};

const uploadData = () => {
  if (!selectedItems.length) {
    localStorage.removeItem("services");
    alert("select service");
    return;
  }
  setItem("services", selectedItems);
  route.push("/summary");
};
const preview = () => {
  route.push("/select");
};
</script>

<template>
  <div class="flex flex-col justify-between h-screen md:h-full rounded-lg">
    <div class="mt-24 p-8 md:p-0 md:mt-0 z-20 bg-white mx-4 rounded-lg">
      <h1 class="text-xl md:text-3xl font-bold">Pick add-ons</h1>

      <div class="Encabezado pb-5">
        <span class="text-justify md:text-sm text-slate-400">
          Add-ons held enhance your gaming experience.
        </span>
      </div>

      <div
        v-for="(item, index) in listAddOns"
        :key="index"
        class="flex items-center justify-between mb-4 p-4 hover:border-indigo-800 hover:bg-slate-50 border-2 rounded-lg shadow-sm"
      >
        <div class="flex gap-4">
          <input
            type="checkbox"
            v-model="item.checked"
            @change="selectData(item)"
          />
          <div class="flex flex-col">
            <span class="font-bold text-xs md:text-sm text-[#02295A]">
              {{ item.title }}
            </span>
            <span
              class="sub-Title text-slate-400 text-[xx-small] md:text-xs font-medium"
              >{{ item.subTitle }}</span
            >
          </div>
        </div>
        <span class="text-xs font-bold text-indigo-500">
          +${{ item.price }}/{{ item.time }}
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
        @click="uploadData"
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

/* .sub-Title {
  font-size: xx-small;
} */
</style>
