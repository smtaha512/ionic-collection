import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { TimepickerService } from './timepicker.service';

@Component({
  selector: 'ionic-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TimepickerComponent implements OnInit {
  /** Set it to change increment factor for hours */
  @Input() set hourStep(step: number) {
    if (step < 1) {
      throw new Error('Hour Step can not be less than 1');
    }
    this.step.HH = step;
  }
  /** Set it to change increment factor for minutes */
  @Input() set minuteStep(step: number) {
    if (step < 1) {
      throw new Error('Minute Step can not be less than 1');
    }
    this.step.MM = step;
  }
  /** TODO: Set it to change increment factor for secondss */
  @Input() secondsStep: number;
  /** TODO: Set it to true to disable the controls */
  @Input() readonlyInput = false;
  /** TODO:  Set it to true to disable the controls */
  @Input() disable = false;
  /** TODO: Set it to true to change time using scroll inside the input */
  @Input() mousewheel: boolean;
  /** TODO: Set it to true to change time using keyboard arrow keys */
  @Input() arrowkeys: boolean;
  /** TODO: Set it to true to show arrows above and below the input fields */
  @Input() showSpinners: boolean;
  /** TODO: Set it to true to meridian(AM/PM) button */
  @Input() showMeridian: boolean;
  /** TODO: Set it to true to minutes input field */
  @Input() showMinutes: boolean;
  /** TODO: Set it to true to seconds input field */
  @Input() showSeconds: boolean;
  /** TODO: Provide locale based meridian labels for internationalization(i18n) */
  @Input() meridians: string[];
  /** Minimum time user can select */
  @Input() set min({ HH, MM }: { HH: number; MM: number }) {
    this.limits.min.HH = HH ?? this.limits.min.HH;
    this.limits.min.MM = MM ?? this.limits.min.MM;
    this.time.HH = this.service.pad0(HH > this.time.HH ? HH : this.time.HH);
    this.time.MM = this.service.pad0(MM > this.time.MM ? MM : this.time.MM);
  }
  /** Maximum time user can select */
  @Input() set max({ HH, MM }: { HH: number; MM: number }) {
    this.limits.max.HH = HH ?? this.limits.max.HH;
    this.limits.max.MM = MM ?? this.limits.max.MM;
    this.time.HH = this.service.pad0(HH < this.time.HH ? HH : this.time.HH);
    this.time.MM = this.service.pad0(MM < this.time.MM ? MM : this.time.MM);
  }
  /** TODO: placeholder for hours field in timepicker */
  @Input() hoursPlaceholder: string;
  /** TODO: placeholder for minutes field in timepicker */
  @Input() minutesPlaceholder: string;
  /** TODO: placeholder for seconds field in timepicker */
  @Input() secondsPlaceholder: string;
  /** TODO: Set to false to hide title. Set to true to show time. Set to string to show custom title */
  @Input() title: string | boolean = true;
  /** TODO: Set to true/false to show/hide the buttons at bottom */
  @Input() showFooterButtons = true;

  time: { HH: string | number; MM: string | number } = {
    HH: new Date().getHours(),
    MM: new Date().getMinutes(),
  };
  step = { HH: 1, MM: 1 };
  limits = {
    min: {
      HH: 0,
      MM: 0,
    },
    max: {
      HH: 23,
      MM: 59,
    },
  };

  constructor(private readonly service: TimepickerService) {}

  ngOnInit() {}

  updateTime(component: 'HH' | 'MM', direction: '+' | '-') {
    const step = this.step[component];
    const shouldIncrease = direction === '+';
    const min = this.limits.min[component];
    const max = this.limits.max[component];
    const current = +this.time[component];

    this.time = { ...this.time, [component]: this.service.updateTime({ current, min, max, step, shouldIncrease }) };
  }
}
