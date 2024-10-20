import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import {
  Testimonial,
  TestimonialComponent,
} from './testimonial/testimonial.component';
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
        <div
          class="testimonials__list"
          [style]="{ 'transform': 'translateX(-' + translateOffset() + ')' }"
        >
          @for (testimonial of testimonials(); track $index) {
          <app-testimonial [testimonial]="testimonial" />
          }
        </div>
        <div class="testimonials__list" aria-hidden="true">
          @for (testimonial of testimonials(); track $index) {
          <app-testimonial [testimonial]="testimonial" />
          }
        </div>
      </div>

      <div class="testimonials__controls">
        @for (testimonial of testimonials(); track $index) {
        <button
          class="testimonials__control {{
            activeIndex() === $index ? 'testimonials__control--active' : ''
          }}"
          ariaLabel="See the testimonial of {{testimonial.author}}"
          (click)="activeIndex.set($index)"
        ></button>
        }
      </div>

      <a app-button href="#">Get started</a>
    </section>
  `,
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  protected testimonials = signal<Testimonial[]>([
    {
      author: 'Anisha li',
      quote:
        '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
    },
    {
      author: 'Ali bravo',
      quote:
        '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
    },
    {
      author: 'Richard watts',
      quote:
        '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”',
    },
    {
      author: 'Shanai gough',
      quote:
        '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”',
    },
  ]);
  protected activeIndex = signal<number>(2);
  protected translateOffset = computed(
    () => `${(1 / this.testimonials().length) * this.activeIndex() * 100}%`
  );
}
