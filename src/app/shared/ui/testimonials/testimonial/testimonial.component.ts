import { TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TitleCasePipe],
  template: `
    <figure class="testimonial">
      <img
        class="testimonial__avatar"
        [src]="avatarSrc()"
        [alt]="testimonial().author + ' profile image'"
      />

      <div class="testimonial__content">
        <p class="testimonial__name">{{ testimonial().author | titlecase }}</p>
        <blockquote class="paragraph">{{ testimonial().quote }}</blockquote>
      </div>
    </figure>
  `,
  styleUrl: './testimonial.component.scss',
})
export class TestimonialComponent {
  testimonial = input.required<Testimonial>();

  protected avatarSrc = computed(
    () => `images/avatar-${this.testimonial().author.toLowerCase().split(' ')[0]}.png`
  );
}

export interface Testimonial {
  author: string;
  quote: string;
}
