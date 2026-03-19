import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizedTextPipe } from '../../pipes/localized-text.pipe';

export interface CaseStudyStat {
    value: string;
    suffix?: string;
    description: string;
    color?: string;
}

@Component({
    selector: 'app-case-study-stats',
    standalone: true,
    imports: [CommonModule, LocalizedTextPipe],
    templateUrl: './case-study-stats.component.html',
    styleUrl: './case-study-stats.component.scss'
})
export class CaseStudyStatsComponent {
    @Input({ required: true }) stats!: CaseStudyStat[];
    /** 'grid' = 2-col grid, 'row' = horizontal flex row (case study page) */
    @Input() layout: 'grid' | 'row' = 'grid';
}
