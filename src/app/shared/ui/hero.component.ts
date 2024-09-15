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
      <img
        class="hero__img"
        src="images/illustration-intro.svg"
        alt="hero image"
      />
    </section>
  `,
  styles: `
    @use "../../../../public/scss/_query-mixin.scss" as mixin;

    .hero {
      max-width: 144rem;
      width: 100%;
      margin: 0 auto;
      padding: 0 16.5rem 13.2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;

      @include mixin.respond(phone) {
        padding: 0 2.6rem 9.3rem;
        flex-direction: column;
        gap: 1.9rem;
      }

      &__text-box {
        display: flex;
        flex-direction: column;
        max-width: 44.5rem;

        @include mixin.respond(phone) {
          align-items: center;
          text-align: center;
          order: 1;
        }

        .paragraph {
          margin: 3.4rem 0 4rem;
          max-width: 35rem;

          @include mixin.respond(phone) {
            font-weight: 300;
            margin: .9rem 0 2.9rem;
          }
        }
      }

      &__img {
        max-width: 100%;
      }
    }
  `,
})
export class HeroComponent {}
