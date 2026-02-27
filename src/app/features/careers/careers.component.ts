import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareersHeroComponent } from './components/careers-hero/careers-hero.component';
import { PrinciplesMvSectionComponent } from '../../shared/components/principles-mv-section/principles-mv-section.component';
import { OpenRolesComponent } from './components/open-roles/open-roles.component';

@Component({
    selector: 'app-careers',
    standalone: true,
    imports: [
        CommonModule,
        CareersHeroComponent,
        PrinciplesMvSectionComponent,
        OpenRolesComponent
    ],
    templateUrl: './careers.component.html',
    styleUrl: './careers.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CareersComponent {
    roles = [
        {
            title: 'Intern Software Engineer',
            department: 'Engineering',
            location: 'Remote',
            link: '#'
        },
        {
            title: 'QA Engineer',
            department: 'Engineering',
            location: 'Remote',
            link: '#'
        },
        {
            title: 'Frontend Engineer',
            department: 'Engineering',
            location: 'Remote',
            link: '#'
        },
        {
            title: 'Backend Engineer',
            department: 'Engineering',
            location: 'Remote',
            link: '#'
        },
        {
            title: 'AI/ML Engineer',
            department: 'Engineering',
            location: 'Remote',
            link: '#'
        }
    ];
}
