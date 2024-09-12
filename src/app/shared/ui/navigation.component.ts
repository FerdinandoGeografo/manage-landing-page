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
  `,
  styles: `
    .nav {
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
  `,
})
export class NavigationComponent {}
