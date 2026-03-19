import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./features/home/home.component').then((m) => m.HomeComponent),
                title: 'AIntegrator — Home',
            },
            {
                path: 'about',
                loadComponent: () =>
                    import('./features/about-us/about-us.component').then((m) => m.AboutUsComponent),
                title: 'AIntegrator — About',
            },
            {
                path: 'careers',
                loadComponent: () =>
                    import('./features/careers/careers.component').then((m) => m.CareersComponent),
                title: 'AIntegrator — Careers',
            },
            {
                path: 'contact',
                loadComponent: () =>
                    import('./features/contact/contact.component').then((m) => m.ContactComponent),
                title: 'AIntegrator — Contact',
            },
            {
                path: 'case-study/:slug',
                loadComponent: () =>
                    import('./features/case-study/case-study.component').then((m) => m.CaseStudyComponent),
                title: 'AIntegrator — Case Study',
            },
            {
                path: 'privacy',
                loadComponent: () =>
                    import('./features/legal/privacy.component').then((m) => m.PrivacyComponent),
                title: 'AIntegrator — Privacy Policy',
            },
            {
                path: 'terms',
                loadComponent: () =>
                    import('./features/legal/terms.component').then((m) => m.TermsComponent),
                title: 'AIntegrator — Terms of Service',
            },
            {
                path: '**',
                redirectTo: '',
                pathMatch: 'full',
            },
        ],
    },
];
