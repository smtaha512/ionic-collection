import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ionic-accordion-header',
  template: `
    <ion-item [lines]="lines" detail="false" button (click)="headerClicked.emit(show)">
      <ion-label>
        <h2 class="font-weight-bolder">{{ title }}</h2>
      </ion-label>
      <ion-icon [mode]="iconMode" [name]="iconName"></ion-icon>
    </ion-item>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionHeaderComponent implements OnInit {
  @Input() detail = false;
  @Input() iconMode: 'ios' | 'md' = 'ios';
  @Input() iconName: string;
  @Input() lines: 'full' | 'inset' | 'none' = 'full';
  @Input() show: boolean;
  @Input() title: string;
  @Output() headerClicked: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
