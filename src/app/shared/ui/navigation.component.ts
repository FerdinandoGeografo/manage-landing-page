import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
  template: `
    <nav class="nav" [ngClass]="navClass()">
      <ul class="nav__list">
        <li>
          <a class="nav__link" href="#">Pricing</a>
        </li>
        <li>
          <a class="nav__link" href="#">Product</a>
        </li>
        <li>
          <a class="nav__link" href="#">About Us</a>
        </li>
        <li>
          <a class="nav__link" href="#">Careers</a>
        </li>
        <li>
          <a class="nav__link" href="#">Community</a>
        </li>
      </ul>
    </nav>

    <button class="nav-btn" (click)="isOpen.set(!isOpen())"></button>
  `,
  styles: `
    @use "../../../../public/scss/_query-mixin.scss" as mixin;

    /* :host:has(.nav__open)::before {
      content: "";
      background: linear-gradient(to bottom, transparent, rgba(0,0,0, 60%));
      position: fixed;
      inset: 0;
    } */

    .nav {
      @include mixin.respond(phone) {
        opacity: 0;
        pointer-events: none;
        visibility: hidden;

        background: var(--white-100);
        position: absolute;
        inset: 10.3rem 2.4rem auto 2.4rem;
        padding: 4rem 0;
        border-radius: 4px;
        box-shadow: 0 1rem 2rem var(--white-50);
        transition: all .3s;
        transform: translateY(-200%);

        &__open {
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
          transform: translateY(0);
        }
      }

      &__list {
        display: flex;
        align-items: center;
        gap: 3.2rem;

        @include mixin.respond(phone) {
          flex-direction: column;
          gap: 2.4rem;
        }
      }

      &__link {
        &:link, &:visited {
          font-size: 1.3rem;
          font-weight: 500;
          line-height: 1.9rem;
          color: var(--black-100);
          transition: all .3s;
          position: relative;

          &::after {
            content: "";
            position: absolute;
            height: 1px;
            width: 100%;
            left: 0;
            bottom: -3.5px;
            background: var(--orange-300);
            transform: scaleX(0);
            transition: all .3s;
          }

          @include mixin.respond(phone) {
            font-size: 1.6rem;
            font-weight: 700;
            line-height: 2.3rem;
            letter-spacing: -.29px;
          }
        }

        &:hover, &:active {
          color: var(--black-200);

          &::after {
            transform: scaleX(1);
          }
        }
      }
    }

    .nav-btn {
      display: none;
      background-image: url('/images/icon-hamburger.svg'), linear-gradient(to top, white, white);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      border: none;
      outline: 0 none;
      width: 2.4rem;
      height: 2.4rem;
      cursor: pointer;

      @include mixin.respond(phone) {
        display: block;
      }
    }
  `,
})
export class NavigationComponent {
  protected isOpen = signal<boolean>(false);
  protected navClass = computed(() => ({ nav__open: this.isOpen() }));
}
