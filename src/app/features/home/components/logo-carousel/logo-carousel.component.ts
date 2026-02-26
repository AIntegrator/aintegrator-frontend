import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Partner } from '../../../../shared/models/sanity.models';

@Component({
    selector: 'app-logo-carousel',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './logo-carousel.component.html',
    styleUrl: './logo-carousel.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class LogoCarouselComponent {
    @Input() partners: Partner[] | undefined = undefined;

    private fallbackLogos = [
        { src: 'assets/images/image 11.png', alt: 'Partner 1' },
        { src: 'assets/images/image 12.png', alt: 'Partner 2' },
        { src: 'assets/images/image 13.png', alt: 'Partner 3' },
        { src: 'assets/images/image 14.png', alt: 'Partner 4' },
        { src: 'assets/images/image 15.png', alt: 'Partner 5' },
    ];

    get logos() {
        if (this.partners && this.partners.length > 0) {
            // Convert Sanity partners to logo format and duplicate for carousel
            const convertedLogos = this.partners.map(partner => ({
                src: this.getLogoUrl(partner.logo),
                alt: partner.name,
                link: partner.website
            }));
            return [...convertedLogos, ...convertedLogos];
        }
        // Fallback to hardcoded logos, duplicated for carousel
        return [...this.fallbackLogos, ...this.fallbackLogos];
    }

    private getLogoUrl(sanityImage: any): string {
        if (!sanityImage) return 'assets/images/image 11.png';
        if (typeof sanityImage === 'string') return sanityImage;
        if (sanityImage.asset?._ref) {
            const assetId = sanityImage.asset._ref.replace('image-', '').split('-')[0];
            return `https://cdn.sanity.io/images/4hvlh78z/production/${assetId}.jpg`;
        }
        return 'assets/images/image 11.png';
    }
}
