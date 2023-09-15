<script setup lang="ts">
// import { useRouter  } from 'vue-router';
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
  <nav >
    <div class="flex justify-center    mt-8 absolute w-full">
      <router-link
        v-for="(index, item) in ListRouter"
        :key="item"
        :to="index.path"
        class="flex justify-center items-center p-4 border-white text-white border-2 rounded-full relative mr-3"
      >
        <span class="absolute font-semibold"> {{ item + 1 }} </span>
      </router-link>
    </div>

    <img class="w-full" src="../assets/images/bg-sidebar-mobile.svg" alt="" />
  </nav>
</template>
