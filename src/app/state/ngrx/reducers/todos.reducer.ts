import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import {
  Action,
  ActionCreator,
  ReducerTypes,
  createReducer,
  on,
} from '@ngrx/store';

import { TodoEntity, TodoActions } from '@state/index';

export const TODOS_FEATURE_KEY = 'todos';

export interface TodosState extends EntityState<TodoEntity> {
  selected?: string | number; // which Todos record has been selected
  loaded: boolean; // has the Todos list been loaded
  error?: string | null; // last known error (if any)
}

export interface TodosPartialState {
  readonly [TODOS_FEATURE_KEY]: TodosState;
}

export const todosAdapter: EntityAdapter<TodoEntity> =
  createEntityAdapter<TodoEntity>({selectId: (e) => e.ID});

export const initialTodosState: TodosState = todosAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const crudSuccessOns: ReducerTypes<TodosState, ActionCreator[]>[] = [
  on(
    TodoActions.loadTodosSuccess,
    (state, { todos }): TodosState =>
      todosAdapter.setAll(todos, { ...state, loaded: true })
  ),
]

const reducer = createReducer(
  initialTodosState,
  on(TodoActions.initTodos, (state): TodosState => initialTodosState),
  on(
    TodoActions.loadTodosFailure,
    (state, { error }): TodosState => ({ ...state, error })
  ),
  ...crudSuccessOns
);

export function todosReducer(state: TodosState | undefined, action: Action) {
  return reducer(state, action);
}