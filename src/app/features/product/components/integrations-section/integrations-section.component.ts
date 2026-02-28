import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizedTextPipe } from '../../../../shared/pipes/localized-text.pipe';

@Component({
    selector: 'app-integrations-section',
    standalone: true,
    imports: [CommonModule, LocalizedTextPipe],
    templateUrl: './integrations-section.component.html',
    styleUrl: './integrations-section.component.scss'
})
export class IntegrationsSectionComponent {
    @Input() title = '';
    @Input() description = '';
    @Input() calendarDayLabel = '';
    @Input() calendarDayNumber = '';
    @Input() meetingTitle = '';
    @Input() timeRange = '';
    @Input() durationLabel = '';
    @Input() participants: string[] = [];
    @Input() cards: Array<{ title?: string; badge?: string }> = [];
}
