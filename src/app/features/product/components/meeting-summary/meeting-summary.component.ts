import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizedTextPipe } from '../../../../shared/pipes/localized-text.pipe';
import { CloudUpload, LucideAngularModule, Video } from 'lucide-angular';

@Component({
  selector: 'app-meeting-summary',
  standalone: true,
  imports: [CommonModule, LocalizedTextPipe, LucideAngularModule],
  templateUrl: './meeting-summary.component.html',
  styleUrl: './meeting-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetingSummaryComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() descriptionHighlight = '';
  @Input() uploadButtonLabel = '';
  @Input() recordButtonLabel = '';
  @Input() summaryTabLabel = '';
  @Input() transcriptTabLabel = '';
  @Input() summaryTitle = '';
  @Input() summaryText = '';
  @Input() discussionTitle = '';
  @Input() discussionPoints: Array<{ title?: string; description?: string }> = [];

  readonly cloudUploadIcon = CloudUpload;
  readonly videoIcon = Video;

  // prd provided default discussion points as example, keep but they won't be used if inputs provided
  readonly defaultDiscussionPoints = [
    {
      title: 'API-Integration:',
      description: 'Welche Alternativen gibt es, falls der externe Partner nicht rechtzeitig liefert?'
    },
    {
      title: 'Ressourcen-Engpass:',
      description: 'Sollten wir temporär externe Entwickler einbinden, um den Zeitplan einzuhalten?'
    }
  ];
}
