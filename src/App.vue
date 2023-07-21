<script setup lang="ts"></script>

<template>
  <div class="h-screen bg-slate-300">
    <div id="SideBar" class="overflow-hidden"></div>
    <img src="" class=" bg-image-mobile md:bg-image-desktop "  alt="">
    <main>
      <div id="container">
        <router-view />
      </div>

      <footer>footer</footer>
    </main>
  </div>
</template>

<style scoped>



</style>
