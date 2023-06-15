import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { TODOS_FEATURE_KEY, todoEffects,  todosReducer} from '@state/index';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideEffects(todoEffects),
    provideState(TODOS_FEATURE_KEY, todosReducer),
    provideStore(),
    provideHttpClient(),
  ],
};
