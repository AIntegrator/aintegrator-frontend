import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Landmark } from 'lucide-angular';

@Component({
    selector: 'app-case-study',
    standalone: true,
    imports: [CommonModule, RouterModule, LucideAngularModule],
    templateUrl: './case-study.component.html',
    styleUrl: './case-study.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class CaseStudyComponent {
    readonly landmarkIcon = Landmark;
}
