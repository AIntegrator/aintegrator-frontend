import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SiteSettingsService } from '../../../core/services/site-settings.service';
import { LocaleService } from '../../../core/services/locale.service';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
    readonly currentYear = new Date().getFullYear();

    private siteSettings = inject(SiteSettingsService);
    private localeService = inject(LocaleService);

    readonly companyTitle = computed(() =>
        this.siteSettings.getFooterCompanyTitle(this.localeService.currentLocale())
    );
    readonly companyLinks = computed(() =>
        this.siteSettings.getFooterCompanyLinks(this.localeService.currentLocale())
    );
    readonly servicesTitle = computed(() =>
        this.siteSettings.getFooterServicesTitle(this.localeService.currentLocale())
    );
    readonly servicesLinks = computed(() =>
        this.siteSettings.getFooterServicesLinks(this.localeService.currentLocale())
    );
    readonly socialTitle = computed(() =>
        this.siteSettings.getFooterSocialTitle(this.localeService.currentLocale())
    );
    readonly socialLinks = computed(() => this.siteSettings.getFooterSocialLinks());
    readonly legalLinks = computed(() =>
        this.siteSettings.getFooterLegalLinks(this.localeService.currentLocale())
    );
    readonly copyrightText = computed(() =>
        this.siteSettings.getFooterCopyright(this.localeService.currentLocale())
    );

    isExternalUrl(url: string): boolean {
        return url.startsWith('http://') || url.startsWith('https://');
    }
}
