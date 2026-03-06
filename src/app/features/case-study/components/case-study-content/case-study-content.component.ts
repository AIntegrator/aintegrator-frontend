import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, CircleCheck } from 'lucide-angular';
import { TestimonialSectionComponent } from '../../../../shared/components/testimonial-section/testimonial-section.component';
import { LocalizedTextPipe } from '../../../../shared/pipes/localized-text.pipe';
import { CaseStudy } from '../../../../shared/models/sanity.models';
import { SanityService } from '../../../../core/services/sanity.service';
import { getImageUrl } from '../../../../core/services/sanity.helpers';

@Component({
    selector: 'app-case-study-content',
    standalone: true,
    imports: [CommonModule, TestimonialSectionComponent, LocalizedTextPipe, LucideAngularModule],
    templateUrl: './case-study-content.component.html',
    styleUrl: './case-study-content.component.scss'
})
export class CaseStudyContentComponent {
    @Input() caseStudyData: CaseStudy | null | undefined;
    readonly checkIcon = CircleCheck;

    constructor(private sanityService: SanityService) { }

    getTestimonialPhoto(photo: any): string {
        if (!photo) return '';
        try {
            return getImageUrl(this.sanityService.getClient(), photo, 160, 160);
        } catch {
            return '';
        }
    }
}
