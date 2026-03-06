import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizedTextPipe } from '../../../../shared/pipes/localized-text.pipe';
import { CaseStudy } from '../../../../shared/models/sanity.models';
import { LucideAngularModule, Landmark } from 'lucide-angular';
import { SanityService } from '../../../../core/services/sanity.service';
import { getImageUrl } from '../../../../core/services/sanity.helpers';

@Component({
    selector: 'app-case-study-hero',
    standalone: true,
    imports: [CommonModule, LocalizedTextPipe, LucideAngularModule],
    templateUrl: './case-study-hero.component.html',
    styleUrl: './case-study-hero.component.scss'
})
export class CaseStudyHeroComponent {
    @Input() caseStudyData: CaseStudy | null | undefined;
    readonly landmarkIcon = Landmark;

    constructor(private sanityService: SanityService) { }

    getCoverImageUrl(): string {
        if (!this.caseStudyData?.coverImage) return '';
        try {
            return getImageUrl(this.sanityService.getClient(), this.caseStudyData.coverImage, 1400, 720);
        } catch {
            return '';
        }
    }
}
