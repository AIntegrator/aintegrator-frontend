import { Component, Input, ChangeDetectionStrategy, effect, signal } from '@angular/core';
import { getLocalizedValue } from '../../../../core/services/sanity.helpers';
import { LocalizedText } from '../../../../shared/models/sanity.models';
import { LocaleService } from '../../../../core/services/locale.service';

@Component({
    selector: 'app-about-hero',
    standalone: true,
    imports: [],
    templateUrl: './about-hero.component.html',
    styleUrl: './about-hero.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutHeroComponent {
    @Input() title: string = 'About Us';
    @Input() description: LocalizedText | string = '';
    @Input() set currentLocale(val: string) {
        this._currentLocale.set(val);
    }
    get currentLocale(): string {
        return this._currentLocale();
    }

    private _currentLocale = signal<string>('de');

    constructor(private localeService: LocaleService) {
        // Watch LocaleService for changes
        effect(() => {
            this._currentLocale.set(this.localeService.currentLocale());
        });
    }

    /**
     * Get localized description text
     */
    getDescription(): string {
        if (!this.description) return '';
        if (typeof this.description === 'string') return this.description;
        // Cast to Record for getLocalizedValue compatibility
        return getLocalizedValue(this.description as Record<string, string>, this.currentLocale, 'de') || '';
    }
}
