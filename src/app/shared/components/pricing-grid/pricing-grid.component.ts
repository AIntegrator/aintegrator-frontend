import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pricing-grid',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './pricing-grid.component.html',
    styleUrl: './pricing-grid.component.scss'
})
export class PricingGridComponent {
    @Input() title = '';
    @Input() plans: Array<{
        namePrefix?: string;
        nameSuffix?: string;
        description?: string;
        price?: string;
        period?: string;
        ctaLabel?: string;
        highlightLabel?: string;
        features?: Array<{ text?: string }>;
    }> = [];
}
