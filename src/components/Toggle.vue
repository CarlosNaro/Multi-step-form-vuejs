<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue: boolean;
  // modelValue: {
  //   type: boolean;
  //   default: false;
  // };
}>();

const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const confirmCancel = () => {
  value.value = !value.value;
  localStorage.removeItem("Plan")
};
</script>
<template>
  <div
    @click="confirmCancel"
    class="flex items-center bg-gray-300 rounded-full w-12 h-6 p-1 transition-colors cursor-pointer"
    :class="{ ' bg-green-500': value }"
  >
    <div
      class="h-4 w-4 rounded-full shadow-md bg-white transition-transform"
      :class="{ ' translate-x-6 ': value }"
    ></div>
  </div>
</template>
