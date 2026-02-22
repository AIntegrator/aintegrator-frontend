import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agentic-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agentic-actions.component.html',
  styleUrl: './agentic-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgenticActionsComponent {
  readonly actionItems = [
    {
      text: 'Followup with the client about the new feature request',
      date: '12th June 2025'
    },
    {
      text: 'Summarize the key meetings takeaways',
      date: '11th June 2025'
    },
    {
      text: 'Prepare proposal draft for next review',
      date: '05th June 2025'
    }
  ];
}
