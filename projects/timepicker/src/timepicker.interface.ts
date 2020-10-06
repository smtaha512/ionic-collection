import { PopoverOptions } from '@ionic/core';

export interface Time {
  HH: number | string;
  MM: number | string;
}

export interface Limits {
  HH: number;
  MM: number;
}
export interface TimepickerInterface {
  hourStep: number;
  minuteStep: number;
  secondsStep: number;
  readonlyInput: boolean;
  disable: boolean;
  mousewheel: boolean;
  arrowkeys: boolean;
  showSpinners: boolean;
  showMeridian: boolean;
  showMinutes: boolean;
  showSeconds: boolean;
  meridians: string[];
  min: Partial<Limits>;
  max: Partial<Limits>;
  hoursPlaceholder: string;
  minutesPlaceholder: string;
  secondsPlaceholder: string;
  title: string | boolean;
  showFooterButtons: boolean;
}

export interface TimePickerPopoverOptions extends Omit<PopoverOptions, 'component' | 'componentProps'> {
  componentProps?: Partial<TimepickerInterface>;
}
