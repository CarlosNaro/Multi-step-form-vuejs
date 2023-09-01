export interface IMenu {
  id: number;
  name: string;
  url: string;
  price: number;
  time:string;
  label: string;
  time: string;
}
<<<<<<< HEAD
export interface IPlanStore {
  menuPlan: IMenu[] | null;
}

export interface IMenuAddOns {
  id: number;
  title: string;
  subTitle: string;
  price: number;
  time: string;
}

export interface IAddOnsStore {
  AddOns: IMenuAddOns[] | null;
=======
export interface IPlan {
  menuPlan: IMenu[] | null;
>>>>>>> 3b0fff0cdf899eb6fc2cc24bb807ee9bfa0938df
}
