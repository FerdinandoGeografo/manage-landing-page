import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './shared/ui/header.component';
import { FeaturesComponent } from './shared/ui/features.component';
import { FooterComponent } from './shared/ui/footer.component';
import { HeroComponent } from './shared/ui/hero.component';
import { TestimonialsComponent } from './shared/ui/testimonials.component';
import { CtaComponent } from './shared/ui/cta.component';

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
