export interface IMenu {
  id: number;
  name: string;
  url: any;
  price: number;
  time: string;
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
  checked: boolean;
}

export interface IAddOnsStore {
  AddOns: IMenuAddOns[] | null;
}

export interface IPlanSummary {
  name: string | null;
  price: number | null;
  time: string | null;
  label: string | null;
}
