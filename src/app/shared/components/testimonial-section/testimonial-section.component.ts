import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-testimonial-section',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './testimonial-section.component.html',
    styleUrl: './testimonial-section.component.scss'
})
export class TestimonialSectionComponent {
    @Input() alignment: 'left' | 'center' = 'center';
    @Input() fullWidth = false;
    @Input({ required: true }) quote!: string;
    @Input() author = '';
    @Input() role = '';
    @Input() avatarUrl = '';

    /** 'default' = centered, 'compact' = left-aligned author + tighter gap, 'compactNarrow' = compact + narrow on mobile */
    @Input() variant: 'default' | 'compact' | 'compactNarrow' = 'default';
    @Input() spacing = true;

    hasMeta(): boolean {
        return Boolean(this.author || this.role || this.avatarUrl);
    }
}
