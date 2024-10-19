import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './shared/ui/header/header.component';
import { HeroComponent } from './shared/ui/hero/hero.component';
import { FeaturesComponent } from './shared/ui/features/features.component';
import { TestimonialsComponent } from './shared/ui/testimonials/testimonials.component';
import { CtaComponent } from './shared/ui/cta/cta.component';
import { FooterComponent } from './shared/ui/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    TestimonialsComponent,
    CtaComponent,
    FooterComponent,
  ],
  template: `
    <app-header />

    <main class="main">
      <app-hero />
      <app-features />
      <app-testimonials />
      <app-cta />
    </main>

    <app-footer />
  `,
})
export class AppComponent {}
