import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudUpload, LucideAngularModule, Video } from 'lucide-angular';

@Component({
    selector: 'app-transcript-panel',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './transcript-panel.component.html',
    styleUrl: './transcript-panel.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranscriptPanelComponent {
    @Input() transcriptData: any[] = [];
    @Input() uploadButtonLabel = '';
    @Input() recordButtonLabel = '';
    @Input() summaryTabLabel = '';
    @Input() transcriptTabLabel = '';
    readonly cloudUploadIcon = CloudUpload;
    readonly videoIcon = Video;
}
