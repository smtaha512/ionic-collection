import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'ionic-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TimepickerComponent implements OnInit {
  /** Set it to change increment factor for hours */
  @Input() hourStep: number;
  /** Set it to change increment factor for minutes */
  @Input() minuteStep: number;
  /** Set it to change increment factor for secondss */
  @Input() secondsStep: number;
  /** Set it to true to disable the controls */
  @Input() readonlyInput = false;
  /** Set it to true to disable the controls */
  @Input() disable = false;
  /** Set it to true to change time using scroll inside the input */
  @Input() mousewheel: boolean;
  /** Set it to true to change time using keyboard arrow keys */
  @Input() arrowkeys: boolean;
  /** Set it to true to show arrows above and below the input fields */
  @Input() showSpinners: boolean;
  /** Set it to true to meridian(AM/PM) button */
  @Input() showMeridian: boolean;
  /** Set it to true to minutes input field */
  @Input() showMinutes: boolean;
  /** Set it to true to seconds input field */
  @Input() showSeconds: boolean;
  /** Provide locale based meridian labels for internationalization(i18n) */
  @Input() meridians: string[];
  /** Minimum time user can select */
  @Input() min: Date;
  /** Maximum time user can select */
  @Input() max: Date;
  /** placeholder for hours field in timepicker */
  @Input() hoursPlaceholder: string;
  /** placeholder for minutes field in timepicker */
  @Input() minutesPlaceholder: string;
  /** placeholder for seconds field in timepicker */
  @Input() secondsPlaceholder: string;
  /** Set to false to hide title. Set to true to show time. Set to string to show custom title */
  @Input() title: string | boolean = true;
  /** Set to true/false to show/hide the buttons at bottom */
  @Input() showFooterButtons = true;

  constructor() {}

  ngOnInit() {}
}
