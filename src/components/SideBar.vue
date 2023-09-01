<script setup lang="ts">
import { computed } from "vue";
import router from "../router";

// const router = useRouter();

export interface IRouter {
  path: string;
  name: string;
}

const ListRouter = computed(() => router.options.routes);

// console.log(" LISTA DE RUTAS ", ListRouter.value);
</script>

<template>
  <div class="  h-full relative "  >
    <div class="flex gap-6 flex-col  mt-2   w-full absolute p-7">
      <router-link
        :to="index.path"
        class="flex items-center  text-sm   hover:bg-indigo-700  "
        v-for="(index, item) in ListRouter"
        :key="item"
      >
        <div
          class="flex justify-center  items-center  mr-3 w-7 h-7  border-white  text-white border rounded-full"
        >
          {{ item + 1 }}
        </div>

        <div class="flex flex-col">
          <a class="text-slate-300 text-xs  "> SETEP {{ item + 1 }} </a>
          <span class="text-white font-semibold text-xs  "> {{ index.name }} </span>
        </div>
      </router-link>
    </div>

    <img class="h-full" src="../assets/images/bg-sidebar-desktop.svg" alt="" />
  </div>
</template>
