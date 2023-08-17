import { reactive } from "vue";
import { IPlan } from "../models/IModel";
import { products } from "../data/Menu";
// const isToggle = ref(false)

const state = reactive<IPlan>({
  menuPlan: null,
});

export default function useStorPlan() {
  const getPlan = () => state.menuPlan;

  const UsePlan = (isToggle: boolean) => {
    try {
      state.menuPlan = products.map((product) => { 

        const { id, name, url, label } = product
        const price = isToggle? product.price2 : product.price1
        const time = isToggle ? product.time02 : product.time01
        return{ id, name, url, price, time, label}
      });
    } catch (error) {}
  };

  return {
    UsePlan,
    getPlan,
  };
}
      // state.menuPlan = products.map((product) => {
      //   if (isToggle) {
      //     return {
      //       ...product,
      //       price: product.price2,
      //       time: product.time02
      //     };
      //   } else {
      //     return { ...product, price: product.price1 , time:product.time01 };
      //   }
      // });
  




