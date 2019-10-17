import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Segments, Segment } from './segments.interface';

@Component({
  selector: 'ionic-segments',
  template: `
    <ion-segment
      mode="ios"
      [scrollable]="scrollable"
      class="m-3"
      (ionChange)="selectedSegmentChange.emit($event.detail.value)"
      [value]="segments[defaultSelectedIndex].value"
    >
      <ion-segment-button [mode]="mode" *ngFor="let segment of segments; let i = index; trackBy: trackBy" [value]="segment?.value">
        <ion-label style="font-size: 10px">{{ segment?.text }}</ion-label>
      </ion-segment-button>
    </ion-segment>
  `,
  styles: []
})
export class SegmentsComponent {
  @Input() defaultSelectedIndex = 0;
  @Input() mode: 'ios' | 'md';
  @Input() scrollable = true;
  @Input() segments: Segments;
  @Output() selectedSegmentChange: EventEmitter<string> = new EventEmitter();

  constructor() {}

  trackBy(idx: number, item: Segment) {
    if (item) {
      return item.value;
    }
    return idx;
  }
}
