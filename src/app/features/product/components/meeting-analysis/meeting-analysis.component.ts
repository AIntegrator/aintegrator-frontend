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
    @Input() participantAvatars: string[] = [];
    @Input() liaIcon = '';
    @Input() hangUpIcon = '';
    @Input() videoIcon = '';
    @Input() uploadButtonLabel = '';
    @Input() recordButtonLabel = '';
    @Input() summaryTabLabel = '';
    @Input() transcriptTabLabel = '';

    // Fallback images (used only if CMS doesn't provide images)
    readonly defaultMonica = 'assets/images/image 19.png';
    readonly defaultStephane = 'assets/images/image 20.png';
    readonly defaultLiaIcon = 'assets/images/Group 2969.png';
    readonly defaultHangUpIcon = 'assets/images/hang_up_control.png';
    readonly defaultVideoIcon = 'assets/images/tabler_video.png';

    get monicaImage(): string {
        return this.participantAvatars[0] || this.defaultMonica;
    }

    get stephaneImage(): string {
        return this.participantAvatars[1] || this.defaultStephane;
    }

    get liaIconUrl(): string {
        return this.liaIcon || this.defaultLiaIcon;
    }

    get hangUpIconUrl(): string {
        return this.hangUpIcon || this.defaultHangUpIcon;
    }

    get videoIconUrl(): string {
        return this.videoIcon || this.defaultVideoIcon;
    }
}
