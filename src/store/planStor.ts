import { reactive } from "vue";
import { IPlan } from "../models/IModel";
import { products } from "../data/Menu";
// const isToggle = ref(false)

const state = reactive<IPlan>({
  menuPlan: [],
});

export default function useStorPlan() {
  const getPlan = () => state.menuPlan;

  const UsePlan = (isToggle: boolean) => {
    try {
      state.menuPlan = products.map((product) => {
        if (isToggle) {
          return {
            ...product,
            price: product.price2,
          };
        } else {
          return { ...product, price: product.price1 };
        }
      });
    } catch (error) {}
  };

  return {
    UsePlan,
    // isToggle,
    getPlan,
  };
}
