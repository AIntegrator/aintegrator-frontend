import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { MeetingAnalysisComponent } from './components/meeting-analysis/meeting-analysis.component';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [CommonModule, HeroComponent, InfoSectionComponent, MeetingAnalysisComponent],
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent { }
