import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-feature',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DecimalPipe],
  template: `
    <div class="feature">
      <div class="feature__step">
        {{ step() | number : '2.0-0' }}
      </div>

      <h3 class="feature__title">
        {{ title() }}
      </h3>

      <p class="paragraph">{{ description() }}</p>
    </div>
  `,
  styles: `
    .feature {
      --step-width: 6.7rem;
      --text-width: 44.5rem;
      display: grid;
      grid-template-columns: var(--step-width) var(--text-width);
      grid-template-rows: auto auto;
      column-gap: 2.8rem;
      row-gap: .9rem;

      &__step {
        background: var(--orange-300);
        color: var(--white-100);
        padding: 6px 0 1rem;
        font-weight: 700;
        line-height: 2.3rem;
        letter-spacing: -.29px;
        border-radius: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &__title {
        font-weight: 700;
        line-height: 2.3rem;
        letter-spacing: -.29px;
        padding-top: 6px;
      }

      .paragraph {
        grid-column: 2 / -1;
      }
    }
  `,
})
export class FeatureComponent {
  step = input.required<number>();
  title = input.required<string>();
  description = input.required<string>();
}
