import { ResponseType } from 'resources/request';

/**
 * Fields through which data can be identified, used on HTTP methods that require a value
 */
export interface Identifiers {
    id: number;
}

/**
 * Interface that represents the app's resources.
 * A resource must contain these fields and methods.
 * ResponseType is the type returned by the network requests handler.
 */
export interface Resource<Data> {
    listAll: () => ResponseType;
    get: (by: Identifiers) => ResponseType;
    getBy: (values: Partial<Data>) => ResponseType;
    update: (values: Data) => ResponseType;
    patch: (values: Identifiers & Partial<Data>) => ResponseType;
    delete: (by: Identifiers) => ResponseType;
}
