[jsonplaceholder-tests](../README.md) / [Exports](../modules.md) / Routes

# Module: Routes

## Table of contents

### Type aliases

- [Params](Routes.md#params)
- [RequestParams](Routes.md#requestparams)
- [Routes](Routes.md#routes)

## Type aliases

### Params

Ƭ **Params**<`T`\>: `Object`

Common parameters used for network requests.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id?` | `number` |
| `payload?` | `Partial`<`T`\> |
| `query?` | `Partial`<`T`\> |

#### Defined in

Routes.ts:8

___

### RequestParams

Ƭ **RequestParams**<`T`\>: `Object`

Request parameters.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`Routes`](Routes.md#routes) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `method` | [`Routes`](Routes.md#routes)[`T`][``"methods"``] |
| `params?` | [`Routes`](Routes.md#routes)[`T`][``"params"``] |
| `path` | `T` |

#### Defined in

Routes.ts:55

___

### Routes

Ƭ **Routes**: `Object`

Endpoints, their allowed methods, and parameters.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `comments` | `Object` |
| `comments.methods` | ``"GET"`` \| ``"POST"`` |
| `comments.params` | [`Params`](Routes.md#params)<[`Comment`](comments_types.md#comment)\> |
| `comments/{id}` | `Object` |
| `comments/{id}.methods` | ``"GET"`` \| ``"PUT"`` \| ``"PATCH"`` \| ``"DELETE"`` |
| `comments/{id}.params` | [`Params`](Routes.md#params)<[`Comment`](comments_types.md#comment)\> |
| `posts` | `Object` |
| `posts.methods` | ``"GET"`` \| ``"POST"`` |
| `posts.params` | [`Params`](Routes.md#params)<[`Post`](posts_types.md#post)\> |
| `posts/{id}` | `Object` |
| `posts/{id}.methods` | ``"GET"`` \| ``"PUT"`` \| ``"PATCH"`` \| ``"DELETE"`` |
| `posts/{id}.params` | [`Params`](Routes.md#params)<[`Post`](posts_types.md#post)\> |
| `posts/{id}/comments` | `Object` |
| `posts/{id}/comments.methods` | ``"GET"`` \| ``"POST"`` |
| `posts/{id}/comments.params` | [`Params`](Routes.md#params)<[`Comment`](comments_types.md#comment)\> |
| `users` | `Object` |
| `users.methods` | ``"GET"`` \| ``"POST"`` |
| `users.params` | [`Params`](Routes.md#params)<[`User`](users_types.md#user)\> |
| `users/{id}` | `Object` |
| `users/{id}.methods` | ``"GET"`` \| ``"PUT"`` \| ``"PATCH"`` \| ``"DELETE"`` |
| `users/{id}.params` | [`Params`](Routes.md#params)<[`User`](users_types.md#user)\> |
| `users/{id}/posts` | `Object` |
| `users/{id}/posts.methods` | ``"GET"`` |
| `users/{id}/posts.params` | [`Params`](Routes.md#params)<[`Post`](posts_types.md#post)\> |

#### Defined in

Routes.ts:17
