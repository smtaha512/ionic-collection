import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimepickerService {
  constructor() {}

  updateTime({
    current,
    max,
    min,
    shouldIncrease,
    step,
  }: {
    current: number;
    step: number;
    shouldIncrease: boolean;
    min: number;
    max: number;
  }): string {
    return this.pad0(this.limitTime(this.changeTime(current, step, shouldIncrease), max, min));
  }

  private changeTime(current: number, step: number, increase: boolean) {
    return current + step * (increase ? +1 : -1);
  }

  private limitTime(time: number, max: number, min: number) {
    if (time > max) {
      return max + 1 - time;
    }
    if (time < min) {
      return max + 1 + time;
    }
    return time;
  }

  public pad0(time: number | string) {
    return time.toString().padStart(2, '0');
  }
}
