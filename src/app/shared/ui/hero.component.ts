import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent],
  template: `
    <section class="hero">
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
      <img src="images/illustration-intro.svg" alt="hero image" />
    </section>
  `,
  styles: `
    .hero {
      max-width: 144rem;
      width: 100%;
      margin: 0 auto;
      padding: 0 16.5rem 13.2rem;
      display: flex;
      align-items: center;

      &__text-box {
        .paragraph {
          margin: 3.4rem 0 4rem;
          max-width: 35rem;
        }
      }
    }
  `,
})
export class HeroComponent {}
