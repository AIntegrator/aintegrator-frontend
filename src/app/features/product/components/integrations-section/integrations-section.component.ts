import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-integrations-section',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './integrations-section.component.html',
    styleUrl: './integrations-section.component.scss'
})
export class IntegrationsSectionComponent {
    currentDayName: string;
    currentDayNumber: string;

    constructor() {
        const now = new Date();
        this.currentDayName = now.toLocaleDateString('de-DE', { weekday: 'long' });
        this.currentDayName = this.currentDayName.charAt(0).toUpperCase() + this.currentDayName.slice(1);
        this.currentDayNumber = now.getDate() + '.';
    }
}
