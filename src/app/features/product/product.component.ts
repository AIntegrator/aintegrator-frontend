import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { MeetingAnalysisComponent } from './components/meeting-analysis/meeting-analysis.component';
import { IntegrationsSectionComponent } from './components/integrations-section/integrations-section.component';
import { MeetingTranscriptionComponent } from './components/meeting-transcription/meeting-transcription.component';
import { MeetingSummaryComponent } from './components/meeting-summary/meeting-summary.component';
import { AgenticActionsComponent } from './components/agentic-actions/agentic-actions.component';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [CommonModule, HeroComponent, InfoSectionComponent, MeetingAnalysisComponent, IntegrationsSectionComponent, MeetingTranscriptionComponent, MeetingSummaryComponent, AgenticActionsComponent],
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent { }
