import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoActions, TodoSelectors } from '@state/index';
import {ITodoFacade} from '@core/index'

@Injectable({
  providedIn: 'root',
})
export class TodoFacade implements ITodoFacade {
  private readonly store = inject(Store);

  todos$ = this.store.select(TodoSelectors.selectAllTodos);
  loaded$ = this.store.select(TodoSelectors.selectTodosLoaded);
  error$ = this.store.select(TodoSelectors.selectTodosError);

  loadTodos() {
    this.store.dispatch(TodoActions.initTodos());
  }
}