import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactHeroComponent } from './components/contact-hero/contact-hero.component';
import { ContactCardsComponent } from './components/contact-cards/contact-cards.component';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, RouterModule, ContactHeroComponent, ContactCardsComponent],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent { }
