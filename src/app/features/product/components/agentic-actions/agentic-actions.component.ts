import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
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
  @Input() badgeLabel = '';
  @Input() title = '';
  @Input() description = '';
  @Input() mobileCards: Array<{ title?: string; description?: string }> = [];
  @Input() actionItemsTitle = '';
  @Input() actionItems: Array<{ text?: string; date?: string }> = [];
}
