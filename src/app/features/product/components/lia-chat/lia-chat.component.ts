import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-lia-chat',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './lia-chat.component.html',
    styleUrl: './lia-chat.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LiaChatComponent {
    @Input() title = '';
    @Input() subtitle = '';
    @Input() promptMobile = '';
    @Input() promptDesktop = '';
    @Input() inputPlaceholder = '';
    @Input() quickActions: string[] = [];
}
