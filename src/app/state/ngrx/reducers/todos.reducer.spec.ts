import { Action } from '@ngrx/store';

import * as TodosActions from '../actions/todos.actions';
import { TodoEntity } from '@state/models/todos.models';
import { TodosState, initialTodosState, todosReducer } from './todos.reducer';

describe('Todos Reducer', () => {
  const createTodosEntity = (ID: string, EnglishName = '', LocalizedName= ''): TodoEntity => ({
    ID,
    EnglishName: EnglishName || `name-${ID}`,
    LocalizedName,
  });

  describe('valid Todos actions', () => {
    it('loadTodosSuccess should return the list of known Todos', () => {
      const todos = [
        createTodosEntity('PRODUCT-AAA'),
        createTodosEntity('PRODUCT-zzz'),
      ];
      const action = TodosActions.loadTodosSuccess({ todos });

      const result: TodosState = todosReducer(initialTodosState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = todosReducer(initialTodosState, action);

      expect(result).toBe(initialTodosState);
    });
  });
});
