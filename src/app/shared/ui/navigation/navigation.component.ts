import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, ButtonComponent],
  template: `
    <nav class="nav" [ngClass]="navClass()">
      <ul class="nav__list">
        <li>
          <a class="heading heading--sm nav__link" href="#">Pricing</a>
        </li>
        <li>
          <a class="heading heading--sm nav__link" href="#">Product</a>
        </li>
        <li>
          <a class="heading heading--sm nav__link" href="#">About Us</a>
        </li>
        <li>
          <a class="heading heading--sm nav__link" href="#">Careers</a>
        </li>
        <li>
          <a class="heading heading--sm nav__link" href="#">Community</a>
        </li>
      </ul>
    </nav>

    <button class="nav-btn" app-button severity="icon" (click)="isOpen.set(!isOpen())">
      @if(isOpen()) {
        <img class="nav-btn__icon" src="images/icon-close.svg" alt="" />
      } @else {
        <img class="nav-btn__icon" src="images/icon-hamburger.svg" alt="" />
      }
    </button>
  `,
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  protected isOpen = signal<boolean>(false);
  protected navClass = computed(() => ({ nav__open: this.isOpen() }));
}
