<script setup lang="ts">
import { computed } from "vue";
import router from "../router";
import { useRouter } from "vue-router";

const route = useRouter();

export interface IRouter {
  path: string;
  name: string;
}

const ListRouter = computed(() => router.options.routes);
</script>

<template>
  <div class="h-full relative">
    <div class="flex gap-6 flex-col mt-2 w-full absolute p-7">
      <router-link
        v-for="(item, index) in ListRouter"
        :key="index"
        class="flex items-center text-sm"
        :to="item.path"
      >
        <div
          :class="{ active: item.path == route.currentRoute.value.path }"
          class="flex justify-center items-center mr-3 w-7 h-7 border-white text-white border rounded-full hover:shadow-xl"
        >
          {{ index + 1 }}
        </div>

        <div class="flex flex-col hover:shadow-xl ">
          <a class="text-slate-300 text-xs    "> SETEP {{ index + 1 }} </a>
          <span class="text-white font-semibold text-xs">
            {{ item.name }}
          </span>
        </div>
      </router-link>
    </div>

    <img class="h-full" src="../assets/images/bg-sidebar-desktop.svg" alt="" />
  </div>
</template>

<style scoped>
.active {
  @apply bg-white text-black;
}
</style>
