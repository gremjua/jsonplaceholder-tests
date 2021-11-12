import { Identifiers, Resource } from 'resources/interfaces';
import { request, ResponseType } from 'resources/request';

import { User } from './types';

/**
 * Users client. This is to be used in tests for simplicity.
 * It implements the Resource interface and uses `User` data types.
 * The return values of each of its methods is defined by the current requests handler.
 */
const users: Resource<User> = {
    delete: ({ id }: Identifiers): ResponseType =>
        request({ method: 'DELETE', params: { id }, path: 'users/{id}' }).catch((error) => {
            throw new Error(error);
        }),
    get: ({ id }: Identifiers): ResponseType =>
        request({ method: 'GET', params: { id }, path: 'users/{id}' }).catch((error) => {
            throw new Error(error);
        }),
    getBy: (values: Partial<User>): ResponseType =>
        request({ method: 'GET', params: { query: values }, path: 'users' }).catch((error) => {
            throw new Error(error);
        }),
    listAll: (): ResponseType =>
        request({ method: 'GET', path: 'users' }).catch((error) => {
            throw new Error(error);
        }),
    patch: (values: Identifiers & Partial<User>): ResponseType =>
        request({ method: 'PATCH', params: { id: values.id, payload: values }, path: 'users/{id}' }).catch((error) => {
            throw new Error(error);
        }),
    update: (user: User): ResponseType =>
        request({ method: 'PUT', params: { id: user.id, payload: user }, path: 'users/{id}' }).catch((error) => {
            throw new Error(error);
        }),
};

export default users;
