import { reactive } from "vue"
import { menuAdd_Ons } from "../data/MenuAdd_Ons"
import { IAddOnsStore } from "../models/IModel"
import {isToggle} from "./ToggleStor"; 

const state = reactive<IAddOnsStore>({
    AddOns: null,
  } );

export default function useStoreAddOns() {

    const getAddOns = ()=> state.AddOns
    const setAddOns = ()=>{
        state.AddOns = menuAdd_Ons.map((item)=>{
            const { id,title,subTitle,checked } = item
            const price = isToggle.value ? item.price02 : item.price01
            const time = isToggle.value ? item.time02 : item.time01 
            return { id,title,subTitle, price, time, checked } 
        })
    }

    return{ setAddOns,getAddOns}
}