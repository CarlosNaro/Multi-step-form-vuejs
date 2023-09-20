<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <div class="flex md:items-center md:justify-center h-screen bg-slate-100">
    <div
      class="flex md:bg-white md:w-11/12 md:h-5/6 lg:w-10/12 lg:h-4/6 xl:w-7/12 xl:h-5/6 2xl:w-6/12 2xl:h-4/6 rounded-2xl md:p-3"
    >
      <div
        class="h-min md:h-auto w-full md:w-auto bg-yellow-200 absolute md:relative z-10"
      >
        <Side-Bar class="hidden md:block" />
        <Navbar class="md:hidden" />
      </div>
      <div
        class="flex-1 w-full absolute md:relative sm:px-1 md:px-5 lg:px-16 md:pt-10 overflow-y-auto custom-scrollbar"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>
