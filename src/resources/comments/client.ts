import { Identifiers, Resource } from 'resources/interfaces';
import { request, ResponseType } from 'resources/request';

import { Comment } from './types';

const comments: Resource<Comment> = {
    delete: ({ id }: Identifiers): ResponseType =>
        request({ method: 'DELETE', params: { id }, path: 'comments/{id}' }).catch((error) => {
            throw new Error(error);
        }),
    get: ({ id }: Identifiers): ResponseType =>
        request({ method: 'GET', params: { id }, path: 'comments/{id}' }).catch((error) => {
            throw new Error(error);
        }),
    getBy: (values: Partial<Comment>): ResponseType =>
        request({ method: 'GET', params: { query: values }, path: 'comments' }).catch((error) => {
            throw new Error(error);
        }),
    listAll: (): ResponseType =>
        request({ method: 'GET', path: 'comments' }).catch((error) => {
            throw new Error(error);
        }),
    patch: (values: Identifiers & Partial<Comment>): ResponseType =>
        request({ method: 'PATCH', params: { id: values.id, payload: values }, path: 'comments/{id}' }).catch(
            (error) => {
                throw new Error(error);
            }
        ),
    update: (comment: Comment): ResponseType =>
        request({ method: 'PUT', params: { id: comment.id, payload: comment }, path: 'comments/{id}' }).catch(
            (error) => {
                throw new Error(error);
            }
        ),
};

export default comments;