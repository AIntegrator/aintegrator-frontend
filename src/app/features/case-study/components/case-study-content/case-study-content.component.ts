import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialSectionComponent } from '../../../../shared/components/testimonial-section/testimonial-section.component';
import { LocalizedTextPipe } from '../../../../shared/pipes/localized-text.pipe';
import { CaseStudy } from '../../../../shared/models/sanity.models';

@Component({
    selector: 'app-case-study-content',
    standalone: true,
    imports: [CommonModule, TestimonialSectionComponent, LocalizedTextPipe],
    templateUrl: './case-study-content.component.html',
    styleUrl: './case-study-content.component.scss'
})
export class CaseStudyContentComponent {
    @Input() caseStudyData: CaseStudy | null | undefined;
}
