import { FC, SVGProps } from 'react';

export interface HeaderParams {
  Icon: FC<SVGProps<SVGElement>>;
  titleImage?: HTMLImageElement;
  titleText?: string;
  style?: any;
  onIconPress: () => void;
}
