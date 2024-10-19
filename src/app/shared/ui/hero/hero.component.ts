import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent],
  template: `
    <section class="hero container">
      <div class="hero__text-box">
        <h1 class="heading heading--xl">
          Bring everyone together to build better products.
        </h1>

        <p class="paragraph">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>

        <a app-button href="#">Get started</a>
      </div>
      <img
        class="hero__img"
        src="images/illustration-intro.svg"
        alt="Illustration of diagram and statistics"
      />
    </section>
  `,
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
