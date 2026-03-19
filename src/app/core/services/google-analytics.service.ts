import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const MEASUREMENT_ID = 'G-6CM8SL554J';

@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsService {
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  constructor() {
    if (this.isBrowser) {
      this.router.events
        .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
        .subscribe((event) => {
          if (window.gtag) {
            window.gtag('config', MEASUREMENT_ID, {
              page_path: event.urlAfterRedirects,
            });
          }
        });
    }
  }
}
