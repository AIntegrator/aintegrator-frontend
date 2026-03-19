import { Component, ChangeDetectionStrategy, OnInit, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHeroComponent } from './components/about-hero/about-hero.component';
import { FoundersGridSectionComponent } from './components/founders-grid-section/founders-grid-section.component';
import { FinalCtaComponent } from '../../shared/components/final-cta/final-cta.component';
import { SanityService } from '../../core/services/sanity.service';
import { LocaleService } from '../../core/services/locale.service';
import { AboutPage, HomePage, TeamMember } from '../../shared/models/sanity.models';
import { SanityQueries } from '../../core/services/sanity.helpers';
import { LocalizedTextPipe } from '../../shared/pipes/localized-text.pipe';

@Component({
    selector: 'app-about-us',
    standalone: true,
    imports: [
        CommonModule,
        AboutHeroComponent,
        FoundersGridSectionComponent,
        FinalCtaComponent,
        LocalizedTextPipe
    ],
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutUsComponent implements OnInit {
    aboutData = signal<AboutPage | null>(null);
    homeData = signal<HomePage | null>(null);
    teamMembers = signal<TeamMember[]>([]);
    currentLocale = signal<string>('de');
    founders = signal<TeamMember[]>([]);

    constructor(
        private sanityService: SanityService,
        private localeService: LocaleService
    ) {
        this.currentLocale.set(this.localeService.currentLocale());

        // Watch for locale changes and update signal
        effect(() => {
            this.currentLocale.set(this.localeService.currentLocale());
        });
    }

    async ngOnInit() {
        await this.loadContent();
    }

    private async loadContent() {
        try {
            const [aboutData, teamMembers, homeData] = await Promise.all([
                this.sanityService.fetch<AboutPage>(SanityQueries.ABOUT_PAGE),
                this.sanityService.fetch<TeamMember[]>(SanityQueries.ALL_TEAM_MEMBERS),
                this.sanityService.fetch<HomePage>(SanityQueries.HOME_PAGE)
            ]);

            this.aboutData.set(aboutData);
            this.teamMembers.set(teamMembers);
            this.homeData.set(homeData);

            // Update founders with team members from CMS (founders with lowest order values)
            this.founders.set(teamMembers.slice(0, 2));
        } catch (error) {
            console.error('Error loading about page content:', error);
        }
    }


}
