import { FC, SVGProps } from 'react';

export interface EditComponentParams {
  listMenu: Array<{
    name: string;
    icon: any;
    onPress: any;
  }>;
  visible: boolean;
  hideMenu: () => void;
  editMenu: () => void;
}
