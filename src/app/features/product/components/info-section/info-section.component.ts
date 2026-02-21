import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-info-section',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './info-section.component.html',
    styleUrl: './info-section.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoSectionComponent { }
