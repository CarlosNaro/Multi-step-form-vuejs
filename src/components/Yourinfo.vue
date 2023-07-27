<script setup lang="ts"></script>

<template>
  <div class="flex flex-col justify-between h-full bg-slate-100">
    <div class="mx-5 md:mx-0 bg-white md:bg-yellow-200 rounded-lg -my-16 md:my-0 p-7 text-justify">
      <h1 class="pb-3 text-xl font-bold">Personal info</h1>

      <div class="pb-5">
        <span class=" ">
          Please provide your name, email addres, and phone number.
        </span>
      </div>

      <div>
        <label
          for="name"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Name</label
        >
        <div class="mt-2">
          <input
            name="Name"
            type="text"
            placeholder="e.g. Stephen King"
            class="input-forms"
          />
        </div>
      </div>

      <div>
        <label
          for="Email-Address"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Email Address</label
        >
        <div class="mt-2">
          <input
            name="Email-Address"
            type="email"
            placeholder="e.g. stephenking@loren.com"
            class="input-forms"
          />
        </div>
      </div>

      <div>
        <label
          for="Phone-Number"
          class="block text-sm font-medium leading-6 text-gray-900"
        >
          Phone Number
        </label>
        <div class="mt-2">
          <input
            name="Phone-Number"
            type="number"
            placeholder="e.g. +1 234 567 890"
            class="input-forms"
          />
        </div>
      </div>
    </div>

    <div class="flex justify-end p-3 footer-button bg-white">
      <button
        type="submit"
        class="flex rounded-md bg-indigo-950 px-5 py-3 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-950"
      >
        Next Step
      </button>
    </div>

  </div>
</template>
