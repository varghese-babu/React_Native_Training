import { FC, SVGProps } from 'react';

export interface DropDownParams {
  Icon?: FC<SVGProps<SVGElement>>;
  text: string;
  values: Array<string>;
  DropIcon: FC<SVGProps<SVGElement>>;
  style?: any;
  updateValue: React.Dispatch<React.SetStateAction<string>>;
}
