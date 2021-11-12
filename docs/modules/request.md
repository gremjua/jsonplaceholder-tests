[jsonplaceholder-tests](../README.md) / [Exports](../modules.md) / request

# Module: request

## Table of contents

### Type aliases

- [ResponseType](request.md#responsetype)

### Functions

- [request](request.md#request)

## Type aliases

### ResponseType

Ƭ **ResponseType**: `ReturnType`<typeof [`request`](request.md#request)\>

Define here the response type.
If we change the request library from supertest to another, the response type would be updated here automatically

#### Defined in

request.ts:55

## Functions

### request

▸ `Const` **request**<`T`\>(`__namedParameters`): `Promise`<`Response`\>

Implementation of the network requests handler.

**`summary`** The request handler is a mediator for how resource clients make network requests.
It could change to use a different library. It is currently using `supertest`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`Routes`](Routes.md#routes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`RequestParams`](Routes.md#requestparams)<`T`\> |

#### Returns

`Promise`<`Response`\>

Response type according to the current request handler implementation.

#### Defined in

request.ts:15
