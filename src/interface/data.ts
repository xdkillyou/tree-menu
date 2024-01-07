export interface IMenuItemRawData {
  key: string;
  text: string;
  children?: IMenuItemRawData[];
}

export interface IMenuItem {
  key: string;
  text: string;
  expand: boolean;
  path: string;
  children: IMenuItem[];
}
