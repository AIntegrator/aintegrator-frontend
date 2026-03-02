import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudUpload, LucideAngularModule, Video } from 'lucide-angular';

@Component({
  selector: 'app-meeting-summary',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './meeting-summary.component.html',
  styleUrl: './meeting-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetingSummaryComponent {
  readonly cloudUploadIcon = CloudUpload;
  readonly videoIcon = Video;

  readonly discussionPoints = [
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
