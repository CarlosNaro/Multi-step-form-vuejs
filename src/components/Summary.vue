<script setup lang="ts">
import {ref} from "vue"
import Final from './Final.vue';
import { IMenuAddOns } from "../models/IModel";



const isFinal = ref(false)

</script>

<template>
<Final v-if="isFinal"/>

  <div class="flex flex-col justify-between h-screen md:h-full rounded-lg">
    <div class="mt-24 p-8 md:p-0 md:mt-0 z-20 bg-white mx-4 rounded-lg">
      <h1 class="text-xl md:text-3xl font-bold">Finishing up</h1>

      <div class="Encabezado pb-5">
        <span class="text-justify md:text-sm text-slate-400">
          Double-check everything looks OK before confirming.
        </span>
      </div>

      <div class="bg-slate-50 rounded-lg p-4">
        <div class="flex flex-col mb-3">
          <div class="flex justify-between text-[#02295A] font-medium text-sm">
            <span> Arcade (Monthly) </span>
            <span> $ 90/yer</span>
          </div>
          <router-link to="#" class="text-slate-500 text-xs underline"
            >Change</router-link
          >
        </div>
        <hr />
        <div class="flex justify-between text-slate-500 text-xs mt-3">
          <span> Online service </span>
          <span> +$ 90/yer</span>
        </div>
      </div>
      <div class="flex justify-between p-4 ">
        <span class=" text-slate-500 text-sm mt-3" >  Online service </span>
        <span  class=" text-indigo-500 font-bold  medium text-lg " > +$ 90/yer</span>
      </div>
    </div>

    <footer class="footer-button flex justify-between  p-4  md:py-2   bg-white">
      <button
       
        class="flex rounded-md  py-2 text-md text-slate-500  hover:text-indigo-950 font-semibold shadow-sm   "
      >
        Go Back
      </button>

      <button
        class="flex rounded-md bg-blue-700 px-5 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-950"
      >
        Confirm
      </button>
    </footer>


  </div>
</template>
