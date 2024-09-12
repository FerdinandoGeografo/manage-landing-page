import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from './button.component';
import { NavigationComponent } from './navigation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, NavigationComponent],
  template: `
    <header class="header">
      <img src="images/logo.svg" alt="Manage logo image" />

      <app-navigation />

      <a app-button href="#">Get started</a>
    </header>
  `,
  styles: `
    .header {
      padding: 5.6rem 16.5rem 12rem;
      max-width: 144rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `,
})
export class HeaderComponent {}
