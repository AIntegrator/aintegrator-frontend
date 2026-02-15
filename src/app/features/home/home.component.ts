import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { LogoCarouselComponent } from '../../shared/components/logo-carousel/logo-carousel.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CtaCardComponent } from './cta-card/cta-card.component';
import { ProcessStepsComponent } from '../../shared/components/process-steps/process-steps.component';
import { SecurityCardComponent } from '../../shared/components/security-card/security-card.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        HeroComponent,
        LogoCarouselComponent,
        CaseStudyComponent,
        TestimonialComponent,

        CtaCardComponent,
        ProcessStepsComponent,
        SecurityCardComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
}
