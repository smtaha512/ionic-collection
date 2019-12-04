# Segments

`ionic-segments` is a wrapper over `ion-segment` to avoid repetative use of `ion-segment`, `ion-segment-button` and `ion-label`.

`ionic-segments` is useful when you have simple and similar content in all segments.

## How to use

1. Install `@ionic-collection/segments`.

```bash
npm i @ionic-collection/segments
```

2. Add `SegmentsModule` to NgModule.

```typescript
import { SegmentsModule } from '@ionic-collection/segments';

@NgModule({
  ...imports: [
    ...
    SegmentsModule
    ...
  ]
})
export class MyModule { ... }
```

3. Use in component:

```typescript
import { Segments } from '@ionic-collection/segments';

@Component({
  template: `
    <ionic-segments [segments]="segments"></ionic-segments>
  `,
  ...
})
export class MyComponent {
  ...
  segments: Segments = [{ text: 'My segment text', value: 'my-segment-text' }];
  ...
}
```

`ionic-segments` takes following input properties:

`segments` is an array of objects. Each object has 2 properties: `text` is the text to be shown on segment button and `value` is the value that will be sent back on click.

`defaultSelectedIndex` is the index of item you want to select when `ionic-segments` is first shown.

`mode` can be `ios` or `md`.

`scrollable` can be `true` or `false`. If you have long list of segments buttons you will want to make it scrollable.

`ionic-segments` emits `selectedSegmentChange` when any `segment` is clicked. The emitted event contains the `value` of the segment.
