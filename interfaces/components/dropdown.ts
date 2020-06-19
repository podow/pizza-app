import { SyntheticEvent } from 'react';

export interface IDropDownProps {
  options: Array<{ name: string; id: number }>;
  currentValue: string;
  isOpened: boolean;
  toLeft: boolean;
  toggleCities: (event: SyntheticEvent) => void;
  selectCity: (selectedCity: any) => void;
}
