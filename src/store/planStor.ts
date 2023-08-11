import {ref, reactive } from "vue"
import { products } from "../data/Menu"
// const isToggle = ref(false)

export interface IMenu {
    id: number;
    name: string;
    url: string;
    price: number;
    label: string;
  }

  export interface IPlan{
    menuPlan:IMenu[] | null
  }

const state = reactive<IPlan>({
    menuPlan: null 
}) 

export default function useStorPlan(){

    const getPlan =()=> state.menuPlan

    const UsePlan = (isToggle:boolean)=>{       
        
        products.forEach((element: any) => {
            if (isToggle) {
              const menu: IMenu = {
                id: element.id,
                name: element.name,
                url: element.url,
                price: element.price2,
                label: element.label,
              };
          
              state.menuPlan?.push(menu)  
            } else {
              const menu: IMenu = {
                id: element.id,
                name: element.name,
                url: element.url,
                price: element.price1,
                label: element.label,
              };
          
              state.menuPlan?.push(menu) 
            }
          });

    }  





    return{
        UsePlan,
        // isToggle,
        getPlan
    }
}