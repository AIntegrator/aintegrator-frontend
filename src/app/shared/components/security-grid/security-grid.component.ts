import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-security-grid',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './security-grid.component.html',
    styleUrl: './security-grid.component.scss'
})
export class SecurityGridComponent {
    @Input() cards: Array<{ title?: string; description?: string }> = [];
    @Input() footerCardTitle = '';
    @Input() footerCardDescription = '';
    @Input() badgeLabels: string[] = [];
}
