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
        [alt]="author() + ' profile image'"
      />

      <div class="testimonial__content">
        <p class="testimonial__name">{{ author() | titlecase }}</p>
        <blockquote class="paragraph">{{ quote() }}</blockquote>
      </div>
    </figure>
  `,
  styleUrl: './testimonial.component.scss',
})
export class TestimonialComponent {
  author = input.required<string>();
  quote = input.required<string>();

  protected avatarSrc = computed(
    () => `images/avatar-${this.author().toLowerCase().split(' ')[0]}.png`
  );
}
