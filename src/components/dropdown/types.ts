import { FC, SVGProps } from "react";

export interface DropDownParams {

    Icon: FC<SVGProps<SVGElement>>;
    text: string;
    values: Array<string>;
    
}