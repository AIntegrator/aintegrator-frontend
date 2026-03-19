import { Injectable, signal } from '@angular/core';
import { SanityService } from './sanity.service';
import { SanityQueries } from './sanity.helpers';
import { getLocalized } from '../utils/localization';
import type { SiteSettings } from '../../shared/models/sanity.models';

export interface FinalCTASettings {
    title: Record<string, string>;
    description: Record<string, string>;
    primaryBtnText: Record<string, string>;
    primaryBtnLink?: string;
}

@Injectable({
    providedIn: 'root',
})
export class SiteSettingsService {
    private siteSettings = signal<SiteSettings | null>(null);
    private isLoaded = signal(false);

    constructor(private sanityService: SanityService) {
        this.loadSettings();
    }

    getFinalCTAForLang(lang: string, fallbacks: string[] = ['en', 'de']) {
        const cta = this.getFinalCTASettings();
        if (!cta) return undefined;
        return {
            title: getLocalized(cta.title, lang, fallbacks),
            description: getLocalized(cta.description, lang, fallbacks),
            primaryBtnText: getLocalized(cta.primaryBtnText, lang, fallbacks),
            primaryBtnLink: cta.primaryBtnLink,
        };
    }

    private async loadSettings() {
        try {
            const settings = await this.sanityService.fetch<SiteSettings>(
                SanityQueries.SITE_SETTINGS
            );
            this.siteSettings.set(settings);
            this.isLoaded.set(true);
        } catch (error) {
            console.error('Error loading site settings:', error);
            this.isLoaded.set(true);
        }
    }

    getFinalCTASettings(): FinalCTASettings | undefined {
        const cta = this.siteSettings()?.finalCTA;
        return cta
            ? {
                  title: cta.title as Record<string, string>,
                  description: cta.description as Record<string, string>,
                  primaryBtnText: cta.primaryBtnText as Record<string, string>,
                  primaryBtnLink: cta.primaryBtnLink,
              }
            : undefined;
    }

    getSettings(): SiteSettings | null {
        return this.siteSettings();
    }

    isSettingsLoaded(): boolean {
        return this.isLoaded();
    }

    getHeaderNavLinks(lang: string) {
        const links = this.siteSettings()?.headerNavLinks ?? [];
        if (links.length === 0) {
            return [
                { label: lang === 'de' ? 'Über uns' : 'About', url: '/about', external: false },
                { label: lang === 'de' ? 'Karriere' : 'Careers', url: '/careers', external: false },
                { label: lang === 'de' ? 'Kontakt' : 'Contact', url: '/contact', external: false },
            ];
        }
        return links.map((link) => ({
            label: getLocalized(link.label as Record<string, string>, lang, ['de', 'en']) ?? '',
            url: link.url ?? '#',
            external: link.external ?? false,
        }));
    }

    getHeaderCta(lang: string) {
        const s = this.siteSettings();
        const label = getLocalized(s?.headerCtaLabel as Record<string, string>, lang, ['de', 'en']);
        return {
            label: label ?? (lang === 'de' ? 'Termin vereinbaren' : 'Book appointment'),
            link: s?.headerCtaLink ?? 'https://calendar.app.google/fzUMskhjkfUh2Qd47',
        };
    }

    getFooterCompanyTitle(lang: string) {
        return getLocalized(
            this.siteSettings()?.footerCompanyTitle as Record<string, string>,
            lang,
            ['de', 'en']
        ) ?? 'Firma';
    }

    getFooterCompanyLinks(lang: string) {
        const links = this.siteSettings()?.footerCompanyLinks ?? [];
        if (links.length === 0) {
            return [
                { label: lang === 'de' ? 'Über uns' : 'About', url: '/about' },
                { label: lang === 'de' ? 'Karriere' : 'Careers', url: '/careers' },
                { label: lang === 'de' ? 'Kontakt' : 'Contact', url: '/contact' },
            ];
        }
        return links.map((link) => ({
            label: getLocalized(link.label as Record<string, string>, lang, ['de', 'en']) ?? '',
            url: link.url ?? '#',
        }));
    }

    getFooterServicesTitle(lang: string) {
        return getLocalized(
            this.siteSettings()?.footerServicesTitle as Record<string, string>,
            lang,
            ['de', 'en']
        ) ?? 'Leistungen';
    }

    getFooterServicesLinks(lang: string) {
        const links = this.siteSettings()?.footerServicesLinks ?? [];
        if (links.length === 0) {
            return [{ label: 'Education', url: 'https://aintegrator.education' }];
        }
        return links.map((link) => ({
            label: getLocalized(link.label as Record<string, string>, lang, ['de', 'en']) ?? '',
            url: link.url ?? '#',
        }));
    }

    getFooterSocialTitle(lang: string) {
        return getLocalized(
            this.siteSettings()?.footerSocialTitle as Record<string, string>,
            lang,
            ['de', 'en']
        ) ?? 'Social';
    }

    getFooterSocialLinks() {
        return this.siteSettings()?.footerSocialLinks ?? [];
    }

    getFooterLegalLinks(lang: string) {
        const links = this.siteSettings()?.footerLegalLinks ?? [];
        if (links.length === 0) {
            return [
                { label: lang === 'de' ? 'AGB' : 'Terms', url: '/terms' },
                { label: lang === 'de' ? 'Datenschutz' : 'Privacy', url: '/privacy' },
            ];
        }
        return links.map((link) => ({
            label: getLocalized(link.label as Record<string, string>, lang, ['de', 'en']) ?? '',
            url: link.url ?? '#',
        }));
    }

    getFooterCopyright(lang: string) {
        const text = getLocalized(
            this.siteSettings()?.footerCopyright as Record<string, string>,
            lang,
            ['de', 'en']
        );
        return text ?? `© ${new Date().getFullYear()} AIntegrator`;
    }
}
