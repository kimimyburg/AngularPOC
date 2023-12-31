import { createAction, props } from '@ngrx/store';
import { TodoEntity } from '@state/index';

export const initTodos = createAction('[Todos Page] Init');

const errorProps = props<{ error: string; data?: unknown }>;

export const loadTodosSuccess = createAction(
  '[Todos/API] Load Todos Success',
  props<{ todos: TodoEntity[] }>()
);

export const loadTodosFailure = createAction(
  '[Todos/API] Load Todos Failure',
  props<{ error: string }>()
);