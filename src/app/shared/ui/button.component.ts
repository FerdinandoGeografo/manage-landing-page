import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: '[app-button]',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `<ng-content />`,
  styles: `
    :host.btn {
      &,
      &:link,
      &:visited {
        padding: 1.25rem 0;
        border: 0 none;
        border-radius: 2.2rem;
        font-size: 1.3rem;
        font-weight: 700;
        line-height: 1.9rem;
        max-width: 13.7rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .3s;
      }

      &--primary {
        box-shadow: 0 1.5rem 1.5rem -1rem var(--orange-300);
        background: var(--orange-300);
        color: var(--white-300);

        &:hover, &:active {
          background: var(--orange-100);
        }
      }

      &--secondary {
        box-shadow: 0 1.5rem 1.5rem -1rem var(--orange-500);
        background: var(--white-100);
        color: var(--orange-300);

        &:hover, &:active {
          color: var(--orange-100);
        }
      }
    }
  `,
  host: {
    '[class]': 'btnClass()',
  },
})
export class ButtonComponent {
  severity = input<'primary' | 'secondary'>('primary');
  btnClass = computed(() => `btn btn--${this.severity()}`);
}
