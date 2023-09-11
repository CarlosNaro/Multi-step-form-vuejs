export interface IMenu {
  id: number;
  name: string;
  url: string;
  price: number;
  time:string;
  label: string;
}
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
}
