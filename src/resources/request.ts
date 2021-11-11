import request from 'supertest';

import { Routes, RequestParams, Params } from 'resources/Routes';

// mediator, we can change how we execute requests
const req = async <T extends keyof Routes>({
    method,
    path,
    params = undefined,
}: RequestParams<T>): Promise<request.Response> => {
    const baseUrl = process.env.BASE_URL || 'http://localhost:3000';

    const { id, payload, query } = (params as Params<Routes[T]['params']>) || {};
    const actualPath = id ? path.replace('{id}', id.toString()) : path;
    try {
        if (method === 'GET') {
            return query ? await request(baseUrl).get(actualPath).query(query) : await request(baseUrl).get(path);
        }
        if (method === 'DELETE') {
            return await request(baseUrl).delete(actualPath).send(payload);
        }
        if (!payload) {
            throw new Error(`Missing payload for current request: ${method} ${actualPath}`);
        }
        if (method === 'POST') {
            return await request(baseUrl).post(actualPath).send(payload);
        }
        if (method === 'PUT') {
            return await request(baseUrl).put(actualPath).send(payload);
        }
        if (method === 'PATCH') {
            return await request(baseUrl).patch(actualPath).send(payload);
        }
        throw new Error(`Incorrect method for request: ${method} ${path} ${JSON.stringify(params)}`);
    } catch (e) {
        throw new Error(`Failed to perform request ${method} ${path} ${JSON.stringify(params)}, ${e as string}`);
    }
};

export { req as request };

// Define here the response type.
// If we change the request library from supertest to another, the response type would be updated here automatically
export type ResponseType = ReturnType<typeof req>;
