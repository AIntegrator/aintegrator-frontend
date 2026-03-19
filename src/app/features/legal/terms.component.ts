import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { LegalPageService } from '../../core/services/legal-page.service';
import { LocaleService } from '../../core/services/locale.service';
import { formatDate } from '../../core/services/sanity.helpers';

@Component({
    selector: 'app-terms',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './terms.component.html',
    styleUrl: './terms.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsComponent {
    private legalPageService = inject(LegalPageService);
    private localeService = inject(LocaleService);
    private sanitizer = inject(DomSanitizer);

    readonly page = computed(() => this.legalPageService.getTermsPage());
    readonly title = computed(() =>
        this.legalPageService.getTitle(this.page(), this.localeService.currentLocale())
    );
    readonly contentHtml = computed(() => {
        const html = this.legalPageService.getContentHtml(
            this.page(),
            this.localeService.currentLocale()
        );
        return html ? this.sanitizer.bypassSecurityTrustHtml(html) : null;
    });
    readonly lastUpdated = computed(() => this.legalPageService.getLastUpdated(this.page()));
    readonly lastUpdatedFormatted = computed(() => {
        const date = this.lastUpdated();
        if (!date) return null;
        return formatDate(date, this.localeService.currentLocale());
    });
    readonly isLoaded = computed(() => this.legalPageService.isLoaded('terms'));
}
