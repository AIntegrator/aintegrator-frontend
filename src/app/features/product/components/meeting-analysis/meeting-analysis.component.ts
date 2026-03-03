import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranscriptPanelComponent } from '../../../../shared/components/transcript-panel/transcript-panel.component';
import { LocalizedTextPipe } from '../../../../shared/pipes/localized-text.pipe';
import { MEETING_TRANSCRIPT_DATA } from '../shared/meeting-transcript.data';
import { MeetingParticipantsMockComponent } from '../../../../shared/components/meeting-participants-mock/meeting-participants-mock.component';

@Component({
    selector: 'app-meeting-analysis',
    standalone: true,
    imports: [CommonModule, TranscriptPanelComponent, MeetingParticipantsMockComponent, LocalizedTextPipe],
    templateUrl: './meeting-analysis.component.html',
    styleUrl: './meeting-analysis.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetingAnalysisComponent {
    @Input() title = '';
    @Input() subtitle = '';
    @Input() transcriptData: Array<{ initial?: string; name?: string; time?: string; text?: string }> = MEETING_TRANSCRIPT_DATA;
    @Input() participants: string[] = [];
    @Input() uploadButtonLabel = '';
    @Input() recordButtonLabel = '';
    @Input() summaryTabLabel = '';
    @Input() transcriptTabLabel = '';

    readonly monicaImage = 'assets/images/image 19.png';
    readonly stephaneImage = 'assets/images/image 20.png';
    readonly liaIcon = 'assets/images/Group 2969.png';
    readonly hangUpIcon = 'assets/images/hang_up_control.png';
    readonly videoIcon = 'assets/images/tabler_video.png';
}
