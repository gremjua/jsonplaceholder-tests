import { Identifiers, Resource } from 'resources/interfaces';
import { request, ResponseType } from 'resources/request';

import { Post } from './types';

const posts: Resource<Post> = {
    delete: ({ id }: Identifiers): ResponseType =>
        request({ method: 'DELETE', params: { id }, path: 'posts/{id}' }).catch((error) => {
            throw new Error(error);
        }),
    get: ({ id }: Identifiers): ResponseType =>
        request({ method: 'GET', params: { id }, path: 'posts/{id}' }).catch((error) => {
            throw new Error(error);
        }),
    getBy: (values: Partial<Post>): ResponseType =>
        request({ method: 'GET', params: { query: values }, path: 'posts' }).catch((error) => {
            throw new Error(error);
        }),
    listAll: (): ResponseType =>
        request({ method: 'GET', path: 'posts' }).catch((error) => {
            throw new Error(error);
        }),
    patch: (values: Identifiers & Partial<Post>): ResponseType =>
        request({ method: 'PATCH', params: { id: values.id, payload: values }, path: 'posts/{id}' }).catch((error) => {
            throw new Error(error);
        }),
    update: (post: Post): ResponseType =>
        request({ method: 'PUT', params: { id: post.id, payload: post }, path: 'posts/{id}' }).catch((error) => {
            throw new Error(error);
        }),
};

export default posts;
