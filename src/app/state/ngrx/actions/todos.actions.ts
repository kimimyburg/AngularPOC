import { Update } from '@ngrx/entity';
import { createAction, createActionGroup, props } from '@ngrx/store';
import { TodoEntity } from '@state/models/todos.models';

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