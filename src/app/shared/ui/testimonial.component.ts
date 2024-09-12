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
        [alt]="author() + ' avatar image'"
      />

      <div class="testimonial__content">
        <p class="testimonial__name">{{ author() | titlecase }}</p>
        <blockquote class="paragraph">{{ quote() }}</blockquote>
      </div>
    </figure>
  `,
  styles: `
    .testimonial {
      background: var(--white-150);
      padding: 6rem 4rem 4rem;
      max-width: 54rem;
      position: relative;

      &__avatar {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 7.2rem;
      }

      &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.9rem;
      }

      &__name {
        font-weight: 700;
        line-height: 2.3rem;
        letter-spacing: -.29px;
      }

      .paragraph {
        text-align: center;
      }
    }
  `,
})
export class TestimonialComponent {
  author = input.required<string>();
  quote = input.required<string>();

  avatarSrc = computed(
    () => `images/avatar-${this.author().toLowerCase().split(' ')[0]}.png`
  );
}
