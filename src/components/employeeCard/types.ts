import { FC, SVGProps } from 'react';

export interface EmployeeCardParams {
  employeeName: string;
  status: string;
  onCardClick: () => void;
}
