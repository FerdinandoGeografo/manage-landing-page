import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeatureComponent } from './feature.component';

@Component({
  selector: 'app-features',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeatureComponent],
  template: `
    <section class="features">
      <div class="features__content">
        <div class="features__text-box">
          <h2 class="heading heading--lg">What's different about Manage?</h2>

          <p class="paragraph">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        <div class="features__list">
          <app-feature
            [step]="1"
            title="Track company-wide progress"
            description="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
          />
          <app-feature
            [step]="2"
            title="Advanced built-in reports"
            description="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
          />
          <app-feature
            [step]="3"
            title="Everything you need in one place"
            description="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
          />
        </div>
      </div>
    </section>
  `,
  styles: `
    @use "../../../../public/scss/_query-mixin.scss" as mixin;

    .features {
      &__content {
        max-width: 144rem;
        width: 100%;
        margin: 0 auto;
        padding: 0 16.5rem 14.6rem;
        display: flex;
        gap: 12.5rem;

        @include mixin.respond(phone) {
          padding: 0 0 6.2rem;
          flex-direction: column;
          gap: 5.4rem;
        }
      }

      &__text-box {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        @include mixin.respond(phone) {
          padding: 0 2.2rem;
          text-align: center;
          gap: 1.3rem;

          .heading--lg {
            font-size: 3rem;
            line-height: 4.5rem;
          }

          .paragraph {
            font-size: 1.4rem;
            padding: 0 .5rem;
          }
        }

        .paragraph {
          max-width: 35rem;
        }
      }

      &__list {
        display: flex;
        flex-direction: column;
        gap: 4rem;

        @include mixin.respond(phone) {
          gap: 4.7rem;
        }
      }
    }
  `,
})
export class FeaturesComponent {}
