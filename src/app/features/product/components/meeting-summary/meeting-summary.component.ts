import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meeting-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meeting-summary.component.html',
  styleUrl: './meeting-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetingSummaryComponent {
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
