import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-feature',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DecimalPipe],
  template: `
    <div class="feature">
      <div class="heading heading--md feature__step">
        {{ step() | number : '2.0-0' }}
      </div>

      <h3 class="heading heading--md feature__title">
        {{ title() }}
      </h3>

      <p class="paragraph">{{ description() }}</p>
    </div>
  `,
  styleUrl: './feature.component.scss',
})
export class FeatureComponent {
  step = input.required<number>();
  title = input.required<string>();
  description = input.required<string>();
}
