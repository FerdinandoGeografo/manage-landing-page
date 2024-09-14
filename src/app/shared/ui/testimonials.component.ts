import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TestimonialComponent } from './testimonial.component';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TestimonialComponent, ButtonComponent],
  template: `
    <section class="testimonials">
      <h2 class="heading heading--lg">What they've said</h2>

      <div class="testimonials__list">
        <!-- <app-testimonial
          author="Anisha li"
          quote="“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
        /> -->
        <app-testimonial
          author="Ali bravo"
          quote="“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
        />
        <!-- <app-testimonial
          author="Richard watts"
          quote="“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"
        />
        <app-testimonial
          author="Shanai gough"
          quote="“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"
        /> -->
      </div>

      <a app-button href="#">Get started</a>
    </section>
  `,
  styles: `
    @use "../../../../public/scss/_query-mixin.scss" as mixin;

    .testimonials {
      padding: 0 0 18rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      @include mixin.respond(phone) {
        padding: 0 1.75rem 4.2rem;
      }

      .heading--lg {
        margin-bottom: 11.4rem;

        @include mixin.respond(phone) {
          margin-bottom: 9.8rem;
          font-size: 3.2rem;
          line-height: 4.5rem;
          letter-spacing: -.66px;
          font-weight: 800;
        }
      }

      &__list {
        display: flex;
        align-items: center;
        gap: 3rem;
        margin-bottom: 4.8rem;
      }
    }
  `,
})
export class TestimonialsComponent {}
