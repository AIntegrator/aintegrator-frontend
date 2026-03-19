import { Component, ChangeDetectionStrategy, inject, computed, signal, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, ChevronDown } from 'lucide-angular';
import { SiteSettingsService } from '../../../core/services/site-settings.service';
import { LocaleService, type SupportedLocale } from '../../../core/services/locale.service';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, RouterModule, LucideAngularModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
    readonly currentYear = new Date().getFullYear();
    readonly chevronDownIcon = ChevronDown;
    readonly langDropdownOpen = signal(false);

    private siteSettings = inject(SiteSettingsService);
    readonly localeService = inject(LocaleService);
    private elementRef = inject(ElementRef);

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
        if (this.langDropdownOpen() && !this.elementRef.nativeElement.contains(event.target)) {
            this.closeLangDropdown();
        }
    }

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
    readonly currentLocaleLabel = computed(() =>
        this.localeService.localeLabels()[this.localeService.currentLocale()] ?? 'English'
    );
    readonly supportedLocales = computed(() =>
        this.localeService.supportedLocales as readonly string[]
    );

    toggleLangDropdown(): void {
        this.langDropdownOpen.update((v) => !v);
    }

    closeLangDropdown(): void {
        this.langDropdownOpen.set(false);
    }

    selectLocale(locale: string): void {
        if (this.localeService.isSupported(locale)) {
            this.localeService.setLocale(locale as SupportedLocale);
            this.closeLangDropdown();
        }
    }

    getLocaleLabel(locale: string): string {
        const labels = this.localeService.localeLabels();
        return (labels as Record<string, string>)[locale] ?? locale;
    }

    isExternalUrl(url: string): boolean {
        return url.startsWith('http://') || url.startsWith('https://');
    }
}
