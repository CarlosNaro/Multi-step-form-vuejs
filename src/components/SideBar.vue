<script setup lang="ts">
import { computed } from "vue";
import router from "../router";
import Yourinfo from "./Yourinfo.vue";

// const router = useRouter();

export interface IRouter {
  path: string;
  name: string;
}

const ListRouter = computed(() => router.options.routes);

console.log(" LISTA DE RUTAS ", ListRouter.value);
</script>

<template>
  <div class="relative">
    <div class="flex flex-col w-full h-full absolute px-5 py-5">


      <router-link :to="index.path" class="flex my-3  hover:bg-indigo-700 " v-for="(index, item) in ListRouter" :key="item">
        <div
          
          class="flex justify-center items-center mr-3 w-8 h-8 font-semibold border-white text-sm text-white border-2 rounded-full"
        >
          {{ item + 1 }}
        </div>

        <div class="flex flex-col">
          <a class="text-slate-300 text-xs"> SETEP {{ item + 1 }} </a>
          <span class="text-white text-sm"> {{ index.name }} </span>
        </div>


      </router-link>
    </div>

    <img class="h-full" src="../assets/images/bg-sidebar-desktop.svg" alt="" />
  </div>
</template>
