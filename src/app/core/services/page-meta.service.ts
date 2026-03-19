import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root',
})
export class PageMetaService {
    constructor(
        private title: Title,
        private meta: Meta
    ) {}

    /**
     * Set the document title and meta description for SEO.
     * @param title - Browser tab title
     * @param description - Meta description (optional)
     */
    setPageMeta(title: string, description?: string): void {
        this.title.setTitle(title);
        if (description) {
            this.meta.updateTag({ name: 'description', content: description });
        } else {
            this.meta.removeTag("name='description'");
        }
    }
}
