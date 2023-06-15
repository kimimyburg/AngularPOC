import { TodoEntity } from '@state/index';
import { Observable } from 'rxjs';

/**
 * With multiple state management libraries, it became easier to
 * separate the facades into library-specific services. This interface
 * serves as a guide to the facade structure
 */
export interface ITodoFacade {
    todos$: Observable<TodoEntity[]>;
    loaded$: Observable<boolean>;
    error$: Observable<string | null | undefined>;

  loadTodos: () => void;
}