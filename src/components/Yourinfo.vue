<script setup lang="ts">
import { reactive, ref } from "vue";
import { setItem  } from "../action/localStorage"
import { useRouter } from "vue-router";
const Info = reactive({
  name: "",
  email: "",
  phone: "",
});
const isPhone = ref(false)
const route = useRouter()


const validEmail = reactive({
  emailError: false,
  massege: "",
});

const isValidEmail = (value: any) => {
  // Validar el formato del email utilizando una expresión regular simple
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value);
};

const sendData = () => {
  
  // Verificar si el campo de email está vacío o no es un email válido
  if (!Info.email || !isValidEmail(Info.email)) {
    validEmail.massege = "Ingresar Email Valido ";
    return (validEmail.emailError = true);
  }else if( !Info.phone ){
    return isPhone.value = true

  }
  setItem("Info", Info)
  route.push("/select" )
  
};
</script>

<template>
  <div class="flex flex-col justify-between  h-screen md:h-full    rounded-lg   ">
    <div class=" mt-24 p-8 md:p-0 md:mt-0 z-20 bg-white  mx-4  rounded-lg ">
      <h1 class="text-xl md:text-3xl font-bold">Personal info</h1>

      <div class="Encabezado pb-5">
        <span class="text-justify md:text-sm text-slate-400">
          Please provide your name, email addres, and phone number.
        </span>
      </div>

      <form>
        <div>
          <label
            for="name"
            class="text-base font-medium leading-6 text-[#02295A]"
            >Name</label
          >

          <input
            name="Name"
            v-model="Info.name"
            type="text"
            placeholder="e.g. Stephen King"
            class="input-forms mt-2"
          />
        </div>

        <div class="mt-4">
          <label
            for="Email-Address"
            class="text-base font-medium leading-6 text-[#02295A]"
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
          <p v-if="validEmail.emailError" class="error-text">
            {{ validEmail.massege }}
          </p>
        </div>

        <div class="mt-4">

          <div class=" flex justify-between font-medium text-[#02295A] "> <span>Phone Number</span> <span v-if="isPhone" class=" text-red-500 text-xs " > This field is required </span> </div>

          <input
            name="Phone-Number"
            v-model="Info.phone"
            type="number"
            placeholder="e.g. +1 234 567 890"
            class="input-forms mt-2"
          />
          
        </div>
      </form>
    </div>

    <footer class="footer-button flex justify-end p-4  md:py-2 footer-button bg-white ">
      <button
        @click="sendData"
        type="submit"
        class="flex rounded-md bg-[#02295A] px-5 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-950"
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
