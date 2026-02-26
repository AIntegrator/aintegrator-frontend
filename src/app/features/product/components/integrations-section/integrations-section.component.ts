import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-integrations-section',
    standalone: true,
    imports: [CommonModule],
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
