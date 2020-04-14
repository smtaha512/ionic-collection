import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'ionic-timepicker-title',
  templateUrl: './timepicker-title.component.html',
  styleUrls: ['./timepicker-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TimepickerTitleComponent {
  @Input() title: boolean | string = true;
}
