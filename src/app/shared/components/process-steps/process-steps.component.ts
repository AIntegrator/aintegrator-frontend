import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-process-steps',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './process-steps.component.html',
    styleUrls: ['./process-steps.component.scss']
})
export class ProcessStepsComponent {
    steps = [
        {
            number: '1',
            title: 'Plan',
            desc: 'Wir identifizieren gemeinsam, wo AI echten Mehrwert schafft.',
            active: false
        },
        {
            number: '2',
            title: 'Build',
            desc: 'Wir entwickeln und integrieren robuste, produktionsreife AI-Lösungen.',
            active: false
        },
        {
            number: '3',
            title: 'Improve',
            desc: 'Wir optimieren kontinuierlich für nachhaltige Wirkung.',
            active: true
        }
    ];
}
