import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LocalizedTextPipe } from '../../../../shared/pipes/localized-text.pipe';
import { CaseStudy } from '../../../../shared/models/sanity.models';

@Component({
    selector: 'app-case-study',
    standalone: true,
    imports: [CommonModule, RouterModule, LocalizedTextPipe],
    templateUrl: './case-study.component.html',
    styleUrl: './case-study.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class CaseStudyComponent {
    @Input() caseStudy: CaseStudy | undefined;
}
