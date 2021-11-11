import { ResponseType } from 'resources/request';

// Fields through which data can be identified, used on HTTP methods that require a value
export interface Identifiers {
    id: number;
}

// A resource must contain these fields and methods
// Data that can be fetched through the resource must be identifiable
// returntype of request mediator
export interface Resource<Data> {
    listAll: () => ResponseType;
    get: (by: Identifiers) => ResponseType;
    getBy: (values: Partial<Data>) => ResponseType;
    update: (values: Data) => ResponseType;
    patch: (values: Identifiers & Partial<Data>) => ResponseType;
    delete: (by: Identifiers) => ResponseType;
}
