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
    @use "../../../../public/scss/_query-mixin.scss" as mixin;

    .feature {
      --step-width: 6.7rem;
      --text-width: 44.5rem;
      display: grid;
      grid-template-columns: var(--step-width) var(--text-width);
      grid-template-rows: auto auto;
      column-gap: 2.8rem;
      row-gap: .9rem;

      @include mixin.respond(phone) {
        --text-width: 1fr;
        padding-left: 1.6rem;
        column-gap: 1.5rem;
        row-gap: .8rem;
        position: relative;

        &::after {
          content: "";
          position: absolute;
          background: var(--orange-50);
          height: 3.9rem;
          left: 1.6rem;
          right: 0;
          z-index: -1;
          border-radius: 4rem 0 0 4rem;
        }
      }

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
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 2.3rem;
        letter-spacing: -.29px;
        padding-top: 6px;
      }

      .paragraph {
        grid-column: 2 / -1;

        @include mixin.respond(phone) {
          grid-column: 1 / -1;
          font-size: 1.4rem;
          padding-right: 1.8rem;
        }
      }
    }
  `,
})
export class FeatureComponent {
  step = input.required<number>();
  title = input.required<string>();
  description = input.required<string>();
}
