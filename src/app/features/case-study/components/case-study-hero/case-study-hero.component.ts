import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Landmark } from 'lucide-angular';

@Component({
    selector: 'app-case-study-hero',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './case-study-hero.component.html',
    styleUrl: './case-study-hero.component.scss'
})
export class CaseStudyHeroComponent {
    readonly landmarkIcon = Landmark;
}
