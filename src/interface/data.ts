export interface IMenuItemRawData {
  key: string;
  text: string;
  children?: IMenuItemRawData[];
}

export interface IMenuSelectLists {
  path: string;
  text: string;
}

export interface IMenuItem {
  key: string;
  text: string;
  expand: boolean;
  path: string;
  children: IMenuItem[];
}

export interface IUpdateMenu {
  (path: string): undefined;
}
