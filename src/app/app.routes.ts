import { Route } from '@angular/router';
import { WelcomeComponent } from './pages';

export const appRoutes: Route[] = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent}
];
