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
  styleUrl: './button.component.scss',
  host: {
    '[class]': `btnClass() + ' ' + styleClass()`,
  },
})
export class ButtonComponent {
  severity = input<'primary' | 'secondary' | 'icon'>('primary');
  styleClass = input<string>('');

  protected btnClass = computed(() => `btn heading heading--sm btn--${this.severity()}`);
}
