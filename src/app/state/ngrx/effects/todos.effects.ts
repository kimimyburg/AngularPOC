import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { TodoService } from '@core/services';
import {TodoActions} from '@state/index';

export const loadTodos = createEffect(
  (actions$ = inject(Actions), todoService = inject(TodoService)) => {
    return actions$.pipe(
      ofType(TodoActions.initTodos),
      switchMap(() =>
        todoService.getAll().pipe(
          map((todos) => TodoActions.loadTodosSuccess({ todos })),
          catchError((error) => {
            return of(TodoActions.loadTodosFailure({ error }));
          })
        )
      )
    );
  },
  { functional: true }
);