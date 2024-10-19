import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, NavigationComponent],
  template: `
    <header class="header container">
      <img class="header__logo" src="images/logo.svg" alt="Manage header logo" />

      <app-navigation />

      <a class="header__btn" app-button href="#">Get started</a>
    </header>
  `,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
