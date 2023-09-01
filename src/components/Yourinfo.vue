<script setup lang="ts">
import { rule } from "postcss";
import { reactive, ref } from "vue";

const Info = reactive({
  name: "",
  email: "",
  phone: "",
});

const rules = reactive({
  Message: "Campo Requerido",
  target: "text-red-600 text-xs absolute ",
  required: false ,
});

const validEmail = reactive({
  emailError:false,
  massege : ""
})


const isValidEmail = (value: any) => {
  // Validar el formato del email utilizando una expresión regular simple
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value);
};

const submitForm = () => {
  
  // Verificar si el campo de email está vacío o no es un email válido
  if (!Info.email || !isValidEmail(Info.email)) {
    validEmail.massege = "Ingresar Email Valido ";
    return (validEmail.emailError = true);
  }
};
</script>

<template>
  <div class="flex flex-col justify-between  h-full md:bg-white">
    <div class="bg-white rounded-lg text-justify">
      <h1 class="text-xl md:text-3xl font-bold">Personal info</h1>

      <div class="Encabezado pb-5">
        <span class="text-justify text-sm text-slate-400">
          Please provide your name, email addres, and phone number.
        </span>
      </div>

      <form>
        <div>
          <label
            for="name"
            class="text-base font-medium leading-6 text-gray-900"
            >Name</label
          >

          <input
            name="Name"
            v-model="Info.name"
            type="text"
            placeholder="e.g. Stephen King"
            class="input-forms mt-2"
          />
          <!-- <span v-if=" rules.required   "  :class="rules.target">{{ rules.Message }}</span> -->
        </div>

        <div class="mt-4">
          <label
            for="Email-Address"
            class="text-base font-medium leading-6 text-gray-900"
            >Email Address</label
          >
          <input
            name="Email-Address"
            v-model="Info.email"
            type="email"
            placeholder="e.g. stephenking@loren.com"
            class="input-forms mt-2"
            :class="{ error: validEmail.emailError }"
          />
          <p v-if="validEmail.emailError || rules.required" class="error-text">
            {{ validEmail.massege }}
          </p>
        </div>

        <div class="mt-4">
          <label
            for="Phone-Number"
            class="text-base font-medium leading-6 text-gray-900"
          >
            Phone Number
          </label>

          <input
            name="Phone-Number"
            v-model="Info.phone"
            type="number"
            placeholder="e.g. +1 234 567 890"
            class="input-forms mt-2"
          />
          <!-- <span v-if=" rules.required " :class="rules.target">{{ rules.Message }}</span> -->
        </div>
      </form>
    </div>

    <footer class="footer-button flex justify-end py-2 footer-button bg-white">
      <button
        @click="submitForm"
        type="submit"
        class="flex rounded-md bg-[#02295A] px-5 py-2 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-950"
      >
        Next Step
      </button>
    </footer>
  </div>
</template>

<style scoped>
.error {
  border: 1px solid red;
}

.error-text {
  color: red;
}
</style>
<!-- <p v-if="emailError" class="error-text">Por favor, ingresa un email válido.</p> -->
<!-- <span v-if="rules.required" :class="rules.target">{{ rules.Message }}</span> -->
