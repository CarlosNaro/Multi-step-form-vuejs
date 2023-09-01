import { reactive } from "vue";
import { IPlanStore } from "../models/IModel";
import { products } from "../data/Menu";
import { isToggle } from "./ToggleStor";

<<<<<<< HEAD

const state = reactive<IPlanStore>({
  menuPlan: null,
} );
=======
const state = reactive<IPlan>({
  menuPlan: null,
});
>>>>>>> 3b0fff0cdf899eb6fc2cc24bb807ee9bfa0938df

export default function useStorPlan() {
  const getPlan = () => state.menuPlan ;

  const UsePlan = () => {
    try {
<<<<<<< HEAD
      state.menuPlan = products.map((product) => {
          const { id, name, url, label } = product;
          const price = isToggle.value ? product.price2 : product.price1;
          const time = isToggle.value ? product.time02 : product.time01;

          return { id, name, url, price, label, time };        
=======
      state.menuPlan = products.map((product) => { 

        const { id, name, url, label } = product
        const price = isToggle? product.price2 : product.price1
        const time = isToggle ? product.time02 : product.time01
        return{ id, name, url, price, time, label}
>>>>>>> 3b0fff0cdf899eb6fc2cc24bb807ee9bfa0938df
      });
    } catch (error) {
      // Manejo de errores aquí
    }
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
  




