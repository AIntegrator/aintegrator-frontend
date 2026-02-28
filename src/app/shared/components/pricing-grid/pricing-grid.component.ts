import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleCheck, LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'app-pricing-grid',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './pricing-grid.component.html',
    styleUrl: './pricing-grid.component.scss'
})
export class PricingGridComponent {
    readonly circleCheckIcon = CircleCheck;
}
