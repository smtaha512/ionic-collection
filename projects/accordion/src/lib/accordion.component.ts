import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ionic-accordion',
  template: `
    <ion-list>
      <ionic-accordion-header
        (headerClicked)="__show = !__show"
        [iconName]="'arrow-' + (__show ? 'up' : 'down')"
        [show]="__show"
        [title]="title"
        [iconMode]="collapseIconMode"
      >
      </ionic-accordion-header>
      <ng-container *ngIf="__show">
        <ng-content></ng-content>
      </ng-container>
    </ion-list>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent implements OnChanges {
  @Input() title: string;
  @Input() defaultShow: boolean;
  @Input() collapseIconMode: 'ios' | 'md';

  // tslint:disable-next-line: variable-name
  __show: boolean;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!(changes.defaultShow && changes.defaultShow.isFirstChange)) {
      return;
    }
    this.__show = changes.defaultShow.currentValue;
  }
}
