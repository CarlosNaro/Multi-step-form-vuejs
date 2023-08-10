<script setup lang="ts">
import { reactive, ref } from "vue";

const Info = reactive({
  name: "alonso",
  email: "alonso@gmail.com",
  phone: "123456789",
});

const rules = reactive({
  Message: "Required field",
  target: "text-red-600 text-xs absolute ",
  required: false,
});

// const email = ref("");

const emailError = ref(false);

const isValidEmail = (value: any) => {
  // Validar el formato del email utilizando una expresión regular simple
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value);
};

const submitForm = () => {
  // Verificar si el campo de email está vacío o no es un email válido
  if (!Info.email || !isValidEmail(Info.email)) {
    emailError.value = true;
  } else {
    // Lógica para enviar el formulario
    emailError.value = false;
    // Aquí puedes enviar los datos del formulario o realizar otras acciones
  }
};

const is_validate = () => {
  // if (objData.username == "") {
  //   rules.required = true;
  // } else {
  //   return (rules.required = false);
  // }

  console.log("hola");
};
</script>

<template>
  <div class="flex flex-col justify-between h-full md:bg-white bg-slate-100">
    <div class="mx-5 md:mx-0 bg-white rounded-lg -my-16 md:my-0 p-7 text-justify">
      <h1 class="pb-3 text-xl md:text-2xl font-bold">Personal info</h1>

      <div class="Encabezado pb-5">
        <span class="md:text-sm">
          Please provide your name, email addres, and phone number.
        </span>
      </div>

      <form @input="is_validate">
        <div>
          <label for="name" class="block text-sm font-medium leading-6 text-gray-900"
            >Name</label
          >

          <input
            name="Name"
            v-model="Info.name"
            type="text"
            placeholder="e.g. Stephen King"
            class="input-forms"
          />
        </div>

        <div class="mt-4">
          <label
            for="Email-Address"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email Address</label
          >

          <input
            name="Email-Address"
            v-model="Info.email"
            type="email"
            placeholder="e.g. stephenking@loren.com"
            class="input-forms"
            :class="{ error: emailError }"
          />
        </div>
        <p v-if="emailError" class="error-text">Por favor, ingresa un email válido.</p>
        <span v-if="rules.required" :class="rules.target">{{ rules.Message }}</span>

        <div class="mt-4">
          <label
            for="Phone-Number"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Phone Number
          </label>

          <input
            name="Phone-Number"
            v-model="Info.phone"
            type="number"
            placeholder="e.g. +1 234 567 890"
            class="input-forms"
          />
        </div>
      </form>
    </div>

    <div
      class="footer-button flex justify-end p-3 md:py-3 md:px-7 p footer-button md:bg-white"
    >
      <button
        @click="submitForm"
        disabled
        type="submit"
        class="flex rounded-md bg-indigo-950 px-5 py-3 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-950"
      >
        Next Step
      </button>
    </div>
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
