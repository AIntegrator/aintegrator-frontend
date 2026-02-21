import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranscriptPanelComponent } from '../../../../shared/components/transcript-panel/transcript-panel.component';

@Component({
    selector: 'app-meeting-analysis',
    standalone: true,
    imports: [CommonModule, TranscriptPanelComponent],
    templateUrl: './meeting-analysis.component.html',
    styleUrl: './meeting-analysis.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetingAnalysisComponent {
    readonly transcriptData = [
        {
            initial: 'M',
            name: 'Monica',
            time: '00:01:00',
            text: 'Wo stehen wir gerade mit dem Projekt? Ich möchte den aktuellen Stand überprüfen und sehen, ob wir noch im Rahmen des geplanten Zeitplans liegen.'
        },
        {
            initial: 'S',
            name: 'Stephane',
            time: '00:01:55',
            text: 'Wir sind grösstenteils mit dem ursprünglichen Umfang im Einklang. Die Kernfunktionen sind bereit.'
        }
    ];

    readonly monicaImage = 'assets/images/image 19.png';
    readonly stephaneImage = 'assets/images/image 20.png';
    readonly liaIcon = 'assets/images/Group 2969.png';
    readonly hangUpIcon = 'assets/images/hang_up_control.png';
    readonly videoIcon = 'assets/images/tabler_video.png';
}
