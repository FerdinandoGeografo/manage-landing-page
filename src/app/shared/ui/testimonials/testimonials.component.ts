import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TestimonialComponent, ButtonComponent],
  template: `
    <section class="testimonials">
      <h2 class="heading heading--lg">What they've said</h2>

      <div class="testimonials__slider">
        <div class="testimonials__list">
          <app-testimonial
            author="Anisha li"
            quote="“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
          />
          <app-testimonial
            author="Ali bravo"
            quote="“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
          />
          <app-testimonial
            author="Richard watts"
            quote="“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"
          />
          <app-testimonial
            author="Shanai gough"
            quote="“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"
          />
        </div>
        <div class="testimonials__list" aria-hidden="true">
          <app-testimonial
            author="Anisha li"
            quote="“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
          />
          <app-testimonial
            author="Ali bravo"
            quote="“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
          />
          <app-testimonial
            author="Richard watts"
            quote="“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"
          />
          <app-testimonial
            author="Shanai gough"
            quote="“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"
          />
        </div>
      </div>

      <nav class="testimonials__nav">
        <a class="testimonials__link" href="#"></a>
        <a class="testimonials__link" href="#"></a>
        <a class="testimonials__link" href="#"></a>
        <a class="testimonials__link" href="#"></a>
      </nav>

      <a app-button href="#">Get started</a>
    </section>
  `,
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {}
