export interface IMenu {
  id: number;
  name: string;
  url: string;
  price: number;
  label: string;
}
export interface IPlan {
  menuPlan: IMenu[];
}
