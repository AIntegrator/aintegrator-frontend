import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareersHeroComponent } from './components/careers-hero/careers-hero.component';
import { OpenRolesComponent } from './components/open-roles/open-roles.component';

@Component({
    selector: 'app-careers',
    standalone: true,
    imports: [
        CommonModule,
        CareersHeroComponent,
        OpenRolesComponent
    ],
    templateUrl: './careers.component.html',
    styleUrl: './careers.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CareersComponent {
    roles = [
        {
            title: 'Software Engineer – Intern',
            department: 'Engineering',
            location: 'Remote',
            link: 'https://aintegrator.notion.site/Software-Engineer-Intern-315a7ccd21c380c095f7dfadeac4e6e4?source=copy_link'
        },
    
    ];
}
