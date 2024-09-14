import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-cta',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent],
  template: `
    <section class="cta">
      <div class="cta__content">
        <h2 class="heading heading--lg">Simplify how your team works today.</h2>

        <a app-button severity="secondary" href="#">
          <span>Get started</span>
        </a>
      </div>
    </section>
  `,
  styles: `
    @use "../../../../public/scss/_query-mixin.scss" as mixin;

    .cta {
      background: var(--orange-300);
      background-image: url('/images/bg-simplify-section-desktop.svg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position-y: bottom;
      background-position-x: 17.65vw;

      &__content {
        max-width: 144rem;
        width: 100%;
        margin: 0 auto;
        padding: 6.2rem 16.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @include mixin.respond(phone) {
          padding: 9.1rem 3.2rem;
          display: flex;
          flex-direction: column;
          gap: 2.9rem;
        }

        .heading--lg {
          max-width: 44.5rem;
          line-height: 4.8rem;
          color: var(--white-100);

          @include mixin.respond(phone) {
            font-size: 4rem;
            line-height: 5rem;
            letter-spacing: 1px;
            text-align: center;
          }
        }
      }
    }
  `,
})
export class CtaComponent {}
