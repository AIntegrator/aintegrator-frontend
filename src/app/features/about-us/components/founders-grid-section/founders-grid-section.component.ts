import { Component, Input, computed, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FounderCardComponent } from '../../../../shared/components/founder-card/founder-card.component';
import { TeamMember } from '../../../../shared/models/sanity.models';
import { getImageUrl } from '../../../../core/services/sanity.helpers';
import { SanityService } from '../../../../core/services/sanity.service';

@Component({
    selector: 'app-founders-grid-section',
    standalone: true,
    imports: [CommonModule, FounderCardComponent],
    templateUrl: './founders-grid-section.component.html',
    styleUrl: './founders-grid-section.component.scss'
})
export class FoundersGridSectionComponent {
    @Input() founders: TeamMember[] = [];

    constructor(private sanityService: SanityService) { }

    /**
     * Map TeamMember objects to founder card display format
     */
    getFounderAvatar(photo: any): string {
        if (!photo) return 'assets/images/image 17.png';
        try {
            return getImageUrl(this.sanityService.getClient(), photo, 400, 400);
        } catch {
            return 'assets/images/image 17.png';
        }
    }
}
