import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-cta',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent],
  template: `
    <section class="cta">
      <div class="container cta__content">
        <h2 class="heading heading--lg">Simplify how your team works today.</h2>

        <a app-button severity="secondary" href="#">
          <span>Get started</span>
        </a>
      </div>
    </section>
  `,
  styleUrl: './cta.component.scss',
})
export class CtaComponent {}
