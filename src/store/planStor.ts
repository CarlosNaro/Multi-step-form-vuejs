import { reactive } from "vue";
import { IPlanStore } from "../models/IModel";
import { products } from "../data/Menu";
import { isToggle } from "./ToggleStor";


const state = reactive<IPlanStore>({
  menuPlan: null,
} );

export default function useStorPlan() {
  const getPlan = () => state.menuPlan ;

  const UsePlan = () => {
    try {
      state.menuPlan = products.map((product) => { 
        const { id, name, url, label } = product
        const price = isToggle.value ? product.price2 : product.price1
        const time = isToggle.value ? product.time02 : product.time01 
        return{ id, name, url, price, time, label}
      });
    } catch (error:any) {
      console.log(error)
    }
  };

  return {
    UsePlan,
    getPlan,
  };
}





