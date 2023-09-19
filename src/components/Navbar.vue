<script setup lang="ts">
// import { useRouter  } from 'vue-router';
import { computed } from "vue";
import router from "../router";

import { useRouter } from "vue-router";

const route = useRouter();

export interface IRouter {
  path: string;
  name: string;
}

const ListRouter = computed(() => router.options.routes);

// console.log(" LISTA DE RUTAS ", ListRouter.value);
</script>
<template>
  <nav>
    <div class="flex justify-center mt-8 absolute w-full">
      <router-link
        v-for="(item, index) in ListRouter"
        :key="index"
        :to="item.path"
        :class="{ active: item.path == route.currentRoute.value.path }"
        class="flex justify-center items-center p-4 border-white text-white border-2 rounded-full relative mr-3"
      >
        <span class="absolute font-semibold"> {{ index + 1 }} </span>
      </router-link>
    </div>

    <img class="w-full" src="../assets/images/bg-sidebar-mobile.svg" alt="" />
  </nav>
</template>
<style scoped>
.active {
  @apply bg-white text-black;
}
</style>
