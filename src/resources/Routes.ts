import { Comment } from 'resources/comments/types';
import { Post } from 'resources/posts/types';
import { User } from 'resources/users/types';

/**
 * Common parameters used for network requests.
 */
export type Params<T> = {
    query?: Partial<T>;
    payload?: Partial<T>;
    id?: number;
};

/**
 * Endpoints, their allowed methods, and parameters.
 */
export type Routes = {
    users: {
        methods: 'GET' | 'POST';
        params: Params<User>;
    };
    'users/{id}': {
        methods: 'GET' | 'PUT' | 'PATCH' | 'DELETE';
        params: Params<User>;
    };
    'users/{id}/posts': {
        methods: 'GET';
        params: Params<Post>;
    };
    posts: {
        methods: 'GET' | 'POST';
        params: Params<Post>;
    };
    'posts/{id}': {
        methods: 'GET' | 'PUT' | 'PATCH' | 'DELETE';
        params: Params<Post>;
    };
    'posts/{id}/comments': {
        methods: 'GET' | 'POST';
        params: Params<Comment>;
    };
    comments: {
        methods: 'GET' | 'POST';
        params: Params<Comment>;
    };
    'comments/{id}': {
        methods: 'GET' | 'PUT' | 'PATCH' | 'DELETE';
        params: Params<Comment>;
    };
};

/**
 * Request parameters.
 */
export type RequestParams<T extends keyof Routes> = {
    method: Routes[T]['methods'];
    path: T;
    params?: Routes[T]['params'];
};
