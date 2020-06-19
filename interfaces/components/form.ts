import { Config } from 'react-select/src/filters';
import { WithTooltipProps, SliderProps } from 'rc-slider';
import { SyntheticEvent } from 'react';

export interface IFormSelectProps extends Config {
  field?: {
    name?: string;
  };
  form?: {
    setFieldValue: (fieldName?: string, selectedOption?: any) => void;
  };
  placeholder?: string;
  options: Array<object>;
  value?: object;
  isSearchable?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isFullHeight?: boolean;
  isClearable?: boolean;
  onChange?: (event: SyntheticEvent) => any;
  adapter: (value) => void;
  isNotRounded?: boolean;
  extraPadding?: boolean;
  extraPaddingUnique?: boolean;
}

export interface IFormFieldProps {
  field: object;
  props: object;
  filterProp?: boolean | undefined;
  isFullHeight?: boolean;
  isNotRounded?: boolean;
  extraPaddingUnique?: boolean;
}

export interface IInputPhoneProps {
  validate: (value) => string | undefined;
  isFullWidth?: boolean;
}

type Settings = {
  min: number;
  max: number;
  step: number;
  value: number[] | undefined;
  allowCross: boolean;
};

export interface IValueSliderProps extends WithTooltipProps, SliderProps {
  name: string;
  isRange: boolean;
  withToolTip: boolean;
  settings: Settings;
  tipFormatter?: any;
}
