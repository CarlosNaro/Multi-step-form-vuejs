export interface IMenu {
  id: number;
  name: string;
  url: string;
  price: number;
  time:string;
  label: string;
}
export interface IPlan {
  menuPlan: IMenu[] | null;
}
