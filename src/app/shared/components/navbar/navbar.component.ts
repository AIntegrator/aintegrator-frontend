import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SiteSettingsService } from '../../../core/services/site-settings.service';
import { LocaleService } from '../../../core/services/locale.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [NgClass, RouterLink, RouterLinkActive],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    readonly logoSrc = 'assets/images/logo.png';
    readonly arrowIconSrc = 'assets/icons/Frame.svg';
    mobileMenuOpen = false;

    private siteSettings = inject(SiteSettingsService);
    private localeService = inject(LocaleService);

    readonly navLinks = computed(() =>
        this.siteSettings.getHeaderNavLinks(this.localeService.currentLocale())
    );
    readonly cta = computed(() =>
        this.siteSettings.getHeaderCta(this.localeService.currentLocale())
    );

    toggleMobileMenu(): void {
        this.mobileMenuOpen = !this.mobileMenuOpen;
        document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : '';
    }

    closeMobileMenu(): void {
        this.mobileMenuOpen = false;
        document.body.style.overflow = '';
    }
}
