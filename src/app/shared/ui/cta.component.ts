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

        .heading--lg {
          max-width: 44.5rem;
          height: 9.6rem;
          color: var(--white-100);
        }
      }
    }
  `,
})
export class CtaComponent {}
