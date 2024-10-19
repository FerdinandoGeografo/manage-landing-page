import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeatureComponent } from './feature/feature.component';

@Component({
  selector: 'app-features',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FeatureComponent],
  template: `
    <section class="features">
      <div class="container features__content">
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
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {}
