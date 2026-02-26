import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
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
}
