import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <nav class="nav">
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

    <button class="nav-btn">
    </button>
  `,
  styles: `
    @use "../../../../public/scss/_query-mixin.scss" as mixin;
     .nav {
      @include mixin.respond(phone) {
        /* opacity: 0;
        pointer-events: none;
        visibility: hidden; */
        display: none;
        position: absolute;
      }

      &__list {
        display: flex;
        align-items: center;
        gap: 3.2rem;
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

      @include mixin.respond(phone) {
        display: block;
      }
    }
  `,
})
export class NavigationComponent {}
