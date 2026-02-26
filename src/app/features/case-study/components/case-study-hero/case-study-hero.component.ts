import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizedTextPipe } from '../../../../shared/pipes/localized-text.pipe';
import { CaseStudy } from '../../../../shared/models/sanity.models';

@Component({
    selector: 'app-case-study-hero',
    standalone: true,
    imports: [CommonModule, LocalizedTextPipe],
    templateUrl: './case-study-hero.component.html',
    styleUrl: './case-study-hero.component.scss'
})
export class CaseStudyHeroComponent {
    @Input() caseStudyData: CaseStudy | null | undefined;
}
